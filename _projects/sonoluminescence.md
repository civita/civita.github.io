---
layout: distill
title: Sonoluminescence Experiment
description: Observing sonoluminescence using a cylindrical glass container with degassed water
importance: 5
category: hidden
date: 2016-05-25
img: assets/img/project_sonoluminescence-preview.png

authors:
  - name: Michael Chang
    affiliations:
      name: National Taiwan University
  - name: Johnson Yen
    affiliations:
      name: National Taiwan University

bibliography: project_sonoluminescence.bib

toc:
  - name: Abstract
  - name: Theories
    subsections:
      - name: Bubble Radius Dynamics
  - name: Procedures
  - name: Results
  - name: Discussion and improvements
  - name: Conclusions
---

## Abstract

This experiment used a cylindrical glass container filled with degassed pure water. Ultrasonic waves generated standing waves within the container, and microbubbles ($$\sim \mu m$$) were created using a heating wire. These bubbles, trapped at fixed positions, periodically expanded and contracted, emitting blue-purple light at short intervals ($$\sim \mu s$$), appearing as a stable light point to the naked eye. This phenomenon is known as sonoluminescence. After 35 hours of attempts, we observed blue light in the third week and captured it with a camera. The process involved iterative adjustments, refining methods to reliably observe the light emission.

## Theories

Sonoluminescence involves the rapid compression of gas bubbles in a liquid using periodic sound waves. During extremely short intervals ($$\mu s$$), the bubble volume adiabatically compresses by $$10^6$$ times, causing a temperature rise exceeding 10,000 degrees. The high temperature ionizes the gas within the bubble, emitting bremsstrahlung radiation predominantly in the ultraviolet range, visible as blue-purple light. The phenomenon is further explained by cavitation effects, where collapsing bubbles create shock waves.

This phenomenon, originally studied due to erosion effects on steamship blades, has applications in fluid dynamics and light emission studies. In the 1930s, scientists Frenzel and Schultes observed faint blue light from compressed microbubbles but could not isolate single-bubble light emission. It wasn't until 1989 that Felipe Gaitan successfully observed single-bubble sonoluminescence in a laboratory setting. Subsequent experiments confirmed that bubble temperatures exceed 10,000 degrees, with some suggesting temperatures near a million degrees, hinting at potential applications in nuclear fusion, though success remains elusive.

### Bubble Radius Dynamics

The Rayleigh-Plesset equation describes the variation in bubble radius in a liquid:

$$\dot{R}R+\frac{3}{2}\dot{R}^2=\frac{1}{\rho}(p_{gas}(t)-P_0-P(t)-4\eta\frac{\dot{R}}{R}-2\frac{\gamma}{R})$$

where
- $$R$$: Bubble radius  
- $$\dot{R}$$: Rate of change of radius with time  
- $$\rho$$: Liquid density  
- $$\gamma$$: Surface tension  
- $$P(t)$$: Pressure from periodic ultrasonic waves, typically sinusoidal  
- $$p_{gas}(t)$$: Gas pressure inside the bubble  
- $$P_0$$: Atmospheric pressure (1 atm at sea level)  

For detailed derivations, refer to <d-cite key="brenner:2002"/>. In this experiment, we adjusted the frequency and amplitude of ultrasonic waves ($$P(t)$$) while keeping other parameters constant (e.g., using water as the liquid) until light emission was observed.

This equation governs the bubble dynamics and indirectly determines the bubble's internal temperature (assuming adiabatic compression). However, the emitted light phenomenon also depends on the gas atom species. The light's wavelength is influenced by bremsstrahlung radiation and electronic transitions between energy levels, which the Rayleigh-Plesset equation does not account for. Therefore, predicting the light spectrum requires detailed models of the emission mechanisms, as discussed in <d-cite key="brenner:2002"/>.

## Procedures

1. Use a large siphon (in the water tank) and a wash bottle to remove water from the resonance chamber (cylindrical glass container). Ensure the heating wire is removed beforehand.
2. Fill a conical flask about 80% full of water (too much will result in spillage), and degas it using a vacuum pump. Ensure the exhaust pipe is directed outside the room.
3. After approximately 15 minutes of degassing, transfer the water from the conical flask to the resonance chamber using a thin plastic tube and the siphon principle. For precision, let some water flow out of the siphon tube before placing it in the resonance chamber, as the water inside the tube has not been degassed. Ensure the tube is free of air and its tip remains submerged to avoid air bubbles entering the chamber.
4. Adjust the water level according to your preference, as it affects the ultrasonic resonance frequency. For example, our group tested depths of 9–10 cm and observed light emission at a water depth of 10 cm (resonance frequency ~30 kHz). Another group succeeded at a depth of 9.2 cm with a frequency of 26 kHz.
5. Connect the instrument circuits. Plug power cables directly into wall sockets rather than extension cords. (In the first week, we noticed waveform distortions when power cables shared an extension cord. Pressing the heating button caused waveform shifts on the oscilloscope.)
6. Turn on the signal generator, oscilloscope, and sonoluminescence apparatus (set the cooling system current knob to the middle). Set the signal generator’s input voltage to about 1.5V, generating a sinusoidal wave of 20–30 kHz. Adjust the white voltage knob on the bottom left of the sonoluminescence apparatus to the middle scale. Observe the waveforms:
    - Channel 1 (Ch1) on the oscilloscope displays the complete ultrasonic wave detected by the microphone in the resonance chamber.
    - Channel 2 (Ch2) shows the high-frequency component of this wave.
    - Slowly adjust the input frequency until Ch1 displays a local voltage maximum, indicating that a standing wave has formed in the resonance chamber, effectively trapping the bubble. Multiple frequencies might meet this criterion; select one and proceed with the experiment. If unsuccessful, try another frequency.
7. Adjust the position of the ultrasonic generator (metal rod) within the water, aiming to center it in the glass container. Fine-tune the depth of immersion until Ch1 voltage reaches a maximum. Note that securing the rod’s position is challenging, as tightening screws may alter its alignment. This requires patience.
8. Connect the heating wire's power supply to the socket on the bottom right of the sonoluminescence apparatus. Position the heating wire in the water beneath the metal rod. The exact position can be adjusted as it influences the bubble's ability to be trapped in the standing wave. Avoid the heating wire touching the metal rod, as this may cause a short circuit. The setup is illustrated in Figure [1](#fig-1).
9. Press the heating button and observe waveform changes on Ch1 and Ch2. Possible scenarios include:
    - Small high-frequency ripples appear on Ch1's original sinusoidal wave, and Ch2 transitions from noise to a stepped standing wave. These changes vanish immediately after releasing the button, indicating that the ultrasonic wave amplitude is too high, bursting the bubble instantly. Reduce the signal generator's voltage (preferably, avoid adjusting the apparatus's left-bottom voltage knob due to instability).
    - If the changes persist briefly or indefinitely, increase the signal generator's voltage. Repeat these steps to find the critical voltage, allowing the bubble to exist stably.
10. If the input voltage exceeds a certain value, the waveforms become unstable, resonating with external elements (possibly the glass), producing a sharp noise. In this case, reduce the voltage or reposition the metal rod and frequency. Once the critical voltage is identified, cover the setup with black fabric, briefly press the heating button (based on hand sensitivity), and check for light spots. If unsuccessful after several attempts:
    - The critical voltage might be too low. Restart from step 6, adjusting parameters to increase voltage.
    - The frequency might be incorrect. Return to step 6 and try a different frequency.
11. During experiments, waveforms might deviate from sinusoidal patterns due to floating or attached bubbles disrupting the standing wave. (Large bubbles, which do not emit light, can be observed directly.) In this case:
    - Turn off the input voltage (mute = Shift + 0), allowing the bubbles to float out of the chamber.
    - Alternatively, increase the input voltage to burst the bubbles.
    - Ensure waveforms return to their original sinusoidal shape, tolerating minor deviations based on experimental intuition.
12. Over time, water temperature rises, and more air dissolves into the water, forming bubbles of various sizes. These bubbles affect waveforms, making it difficult to maintain a sinusoidal pattern. Replace the water immediately.
13. Once a blue light spot is visually confirmed from Step 10, capture it using a camera with a long exposure.

Note: For further detailed procedures, please refer to <d-cite key="geisler:1996"/>.

<a name="fig-1"></a>
<div class="row">
    <div class="col-sm-3 mt-3 mt-md-0">
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.html path="assets/img/project_sonoluminescence/procedures-1.jpg" width="400" class="img-fluid z-depth-1" %}
    </div>
    <div class="col-sm-3 mt-3 mt-md-0">
    </div>
</div>
<div class="caption">
    Figure 1: Resonance chamber setup. The heating spring is visible below the metal rod.
</div>

### Results
### Discussion and improvements
### Conclusions