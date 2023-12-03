---
layout: page
title: TuxKart Ice Hockey Image Agent
description: A machine learning model that could play ice hockey in the SuperTuxKart racing game
importance: 2
category: school
img: assets/img/project_tuxkart-preview.gif
---

## Introduction

In this project, I implemented an agent that plays the [SuperTuxKart](https://supertuxkart.net/) ice hockey game mode. My goal is to train the agent to score as many goals as possible in a 2 vs. 2 tournament against some existing agents.

## Getting Started

First, I played the SuperTuxKart ice hockey game on my Linux machine, to familiarize with the rules, methods of controlling, the size of the court and goals, and how the AI agents act during the game. Then I think I should implement an agent based on the *internal world states* first. The specific additional world state passed to my agent is the location (heatmap) of puck in each given image. This information can be retrieved via the object `render_data[i].instance` where `i` is the ID of the player. I wrote a low-level controller based on the original information (image, kart) and the location of puck (see below).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="https://i.imgur.com/IVNMteu.png" class="img-fluid z-depth-1" %}<br/>
        Original given image
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="https://i.imgur.com/ViMssX6.png" class="img-fluid z-depth-1" %}<br/>
        Heatmap of puck
    </div>
</div>

<br />

## Low-level Controller

The implemented low-level controller determines its action based on several scenarios:

### 1. At the beginning of each round

To distinguish if it is the beginning of each round or not, I stored the pervious location of the kart and compared it to the current location (`kart.location`). If the distance is larger enough, new round is likely started. The importance of this part is that in the beginning the puck is too far to be noticed by merely the given image, and the kart cannot determine where to go. In my code of the controller, during the first 25 frames the kart always accelerates and use nitro if it is possible. After 25 frames, the puck is large enough and in front of the kart, the kart determines the action based on the following parts.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="https://i.imgur.com/Y29NwEB.png" class="img-fluid z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="https://i.imgur.com/0grZXRp.png" class="img-fluid z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="https://i.imgur.com/P3pA45h.png" class="img-fluid z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="https://i.imgur.com/PezEiII.png" class="img-fluid z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        Image frame 0
    </div>
    <div class="col-sm mt-3 mt-md-0">
        Heatmap of puck
    </div>
    <div class="col-sm mt-3 mt-md-0">
        Image frame 25
    </div>
    <div class="col-sm mt-3 mt-md-0">
        Heatmap of puck
    </div>
</div>
<br />

### 2. During the game

The strategies of the controller are relatively basic and intuitive. The value of steering is determined by the coordinate of the puck in the image. For example, if the puck is at the right side of the image, the kart turns right (similar to our pervious homework). This ensures to keep up with the puck and avoid to get lost (to some extent). Another benefit from this strategy is that if an opponent is trying to shoot, the kart may be an obstacle and make the opponent to goal more difficult.

There is also a target speed and the acceleration is determined by the current speed, target speed, and the size of the puck in the image.

However, this strategy may have some issues. For example, the kart does not know that it is close to goal and it would also shoot to the opposites', hence the following additional strategies are introduced to avoid such conditions.

### 3. The kart is close to the goal

If the kart is about to earn a point, the angle between the kart and two sides of that goal is calculated ($\theta$ and $\phi$). If the angle is too large (for example, the kart is facing wrong direction) then it will steer to another side. The facing direction is determined by the difference between `player_info.kart.front` and `player_info.kart.location`.

{% include figure.html path="https://i.imgur.com/F3HNMyz.jpeg" class="img-fluid z-depth-1" %} 

### 4. The kart faces wrong direction with the puck in front of it

If the kart is facing wrong direction and pushing the puck to the opposites' goal, it drifts and brakes immediately to prevent losing one point in the game. This strategy can be achieved by determining the x (first) coordinate and the (above-mentioned) facing direction. The reason to drift is trying to make both the puck and the kart turn around.

{% include figure.html path="https://i.imgur.com/hFUfO3c.jpg" class="img-fluid z-depth-1" %} 

### 5. There is no puck in the input image

There is a chance that the puck is somehow not in the input image. Here we will also inspect the coordinates of the puck in the previous frame. If the puck existed in the previous frame, and the absolute value of x (long edge) coordinate is larger than the threshold (0.9 for example), then the kart will try to reverse the gear to find the puck (based on which side the puck moved away).

{% include figure.html path="https://i.imgur.com/dq55te6.jpg" class="img-fluid z-depth-1" %} 

## Planner

With the above-mentioned strategies, the kart performed acceptable results with the given internal world states. However, in real game we don't have such internal information, and we have to design a deep network to get the heatmap by ourselves.

Here several models are proposed. First I would like to implement a model that the input is the given image and the output is the `{steer value, acceleration}` (like our hands-on segment). In this way we even don't have to design low-level controller. However, this cannot be achieved because we are not *driving* the kart along the track and loss is difficult to be valued. 

Secondly, I came out with a model that the output is the center `x, y` coordinates of puck in each input image. This one had another issue that all the trained images contained the puck inside, and when the puck is not in the image, this model still `guesses` the coordinates of the puck (maybe refer to some black paints in other karts). I trained this one and the results are unacceptable.

Finally, the model output is designed to be the heatmap of the puck (similar to one of our assignments). I modified the `planner.py` and `train.py` based on previous homework. The training images were generated by playing `6000` frames between implemented agents (with given world state) and AIs. The results are shown below.

{% include figure.html path="https://i.imgur.com/FuoVCUI.png" width="800" class="img-fluid z-depth-1" %}
{% include figure.html path="https://i.imgur.com/zxnNSXD.png" width="800" class="img-fluid z-depth-1" %}
{% include figure.html path="https://i.imgur.com/Gnql2gc.png" width="800" class="img-fluid z-depth-1" %}

Here I also resized the input dimension from (400, 300, 3) to (128, 96, 3) because with the original size the model is too large (the required VRAM exceeds the limit) to be trained in Google Colab. The output dimension is (128, 96, 1).

{% include figure.html path="assets/img/project_tuxkart-preview.gif" class="img-fluid z-depth-1" %}

## Discussion

There are several mechanisms that could be added to my implement and improve the performance. First, I read the source code of `pystk` AI in GitHub and think my implemented low-level controller is too simple (compared to the AI). I would like to add additional functions (for example, one is offensive and one is defensive). Second, the output heatmap is only for the puck in my implementation, and opponents' kart are not recognized during the game. I would design strategy when the opponent is in front of the kart.

From this programming final project, I've learned how to implement the deep network based on several scenarios and design the loss accordingly. The methods of choosing suitable output are very important and would affect the results hugely.

In addition, I also realized that instead of trial-and-error, we should explain the results and find better approaches to improve the performance. If we just try different combinations of parameters without thinking the meaning behind it, it is just a waste of time. I think my implemented model is reasonable, but it still needs time to optimize it.
