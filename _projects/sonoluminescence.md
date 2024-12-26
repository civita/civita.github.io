---
layout: distill
title: Sonoluminescence Experiment
description: Observing sonoluminescence using a cylindrical glass container with degassed water
importance: 5
category: school
date: 2016-05-25
img: assets/img/project_sonoluminescence/preview.gif

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
    subsections:
      - name: How do bubble radius and pressure vary in different solutions (Rayleigh-Plesset equation)?
      - name: What is the bubble temperature? Can it achieve nuclear fusion?
  - name: Conclusions
  - name: Journal
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

<a name="fig-1"></a>
<div class="row">
    <div class="col-sm-3 mt-3 mt-md-0">
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.html path="assets/img/project_sonoluminescence/procedures/1.jpg" width="400" class="img-fluid z-depth-1" %}
    </div>
    <div class="col-sm-3 mt-3 mt-md-0">
    </div>
</div>
<div class="caption">
    Figure 1: Resonance chamber setup. The heating spring is visible below the metal rod.
</div>

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

<a name="section-results"></a>

## Results

In the third week, we observed multiple instances of bubble luminescence. Images were captured using a Canon EOS 700D camera with a Canon 24–70mm F4L lens (the white circle marks the bubble's position). To better analyze the bubble's color and shape, we cropped the original images. Close-up views of the bubbles are shown in Figures [2](#fig-2) and [3](#fig-3).

<a name="fig-2"></a>
<div class="row">
    <div class="col-sm mt-3 mt-md-0"><a name="fig-2a"></a>
        {% include figure.html path="assets/img/project_sonoluminescence/results/1_b.png" title="a" class="img-fluid z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0"><a name="fig-2b"></a>
        {% include figure.html path="assets/img/project_sonoluminescence/results/2_b.png" title="b" class="img-fluid z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0"><a name="fig-2c"></a>
        {% include figure.html path="assets/img/project_sonoluminescence/results/3_b.png" title="c" class="img-fluid z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0 caption">
        a
    </div>
    <div class="col-sm mt-3 mt-md-0 caption">
        b
    </div>
    <div class="col-sm mt-3 mt-md-0 caption">
        c
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0"><a name="fig-2d"></a>
        {% include figure.html path="assets/img/project_sonoluminescence/results/5_b.png" title="d" class="img-fluid z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0"><a name="fig-2e"></a>
        {% include figure.html path="assets/img/project_sonoluminescence/results/8_b.png" title="e" class="img-fluid z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0"><a name="fig-2f"></a>
        {% include figure.html path="assets/img/project_sonoluminescence/results/9_b.png" title="f" class="img-fluid z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0 caption">
        d
    </div>
    <div class="col-sm mt-3 mt-md-0 caption">
        e
    </div>
    <div class="col-sm mt-3 mt-md-0 caption">
        f
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0"><a name="fig-2g"></a>
        {% include figure.html path="assets/img/project_sonoluminescence/results/10_b.png" title="g" class="img-fluid z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0"><a name="fig-2h"></a>
        {% include figure.html path="assets/img/project_sonoluminescence/results/11_b.png" title="h" class="img-fluid z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0"><a name="fig-2i"></a>
        {% include figure.html path="assets/img/project_sonoluminescence/results/12_b.png" title="i" class="img-fluid z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0 caption">
        g
    </div>
    <div class="col-sm mt-3 mt-md-0 caption">
        h
    </div>
    <div class="col-sm mt-3 mt-md-0 caption">
        i
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0"><a name="fig-2j"></a>
        {% include figure.html path="assets/img/project_sonoluminescence/results/13_b.png" title="j" class="img-fluid z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0"><a name="fig-2k"></a>
        {% include figure.html path="assets/img/project_sonoluminescence/results/14_b.png" title="k" class="img-fluid z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0"><a name="fig-2l"></a>
        {% include figure.html path="assets/img/project_sonoluminescence/results/15_b.png" title="l" class="img-fluid z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0 caption">
        j
    </div>
    <div class="col-sm mt-3 mt-md-0 caption">
        k
    </div>
    <div class="col-sm mt-3 mt-md-0 caption">
        l
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0"><a name="fig-2m"></a>
        {% include figure.html path="assets/img/project_sonoluminescence/results/16_b.png" title="m" class="img-fluid z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0"><a name="fig-2n"></a>
        {% include figure.html path="assets/img/project_sonoluminescence/results/17_b.png" title="n" class="img-fluid z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0 caption">
        m
    </div>
    <div class="col-sm mt-3 mt-md-0 caption">
        n
    </div>
    <div class="col-sm mt-3 mt-md-0 caption">
    </div>
</div>
<div class="caption">
    Figure 2: Enlarged results.
</div>

<a name="fig-3"></a>
<div class="row">
    <div class="col-sm mt-3 mt-md-0"><a name="fig-3a"></a>
        {% include figure.html path="assets/img/project_sonoluminescence/results/6_b.png" title="a" class="img-fluid z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0"><a name="fig-3b"></a>
        {% include figure.html path="assets/img/project_sonoluminescence/results/7_b.png" title="b" class="img-fluid z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0 caption">
        a
    </div>
    <div class="col-sm mt-3 mt-md-0 caption">
        b
    </div>
</div>
<div class="caption">
    Figure 3: Enlarged results.
</div>

<a name="fig-4"></a>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/project_sonoluminescence/results/1.jpg" class="img-fluid z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 4: First observed luminescent bubble at 15:45 (f/8, 25s, ISO 640). Enlarged result in Figure 2a.
</div>

<a name="fig-5"></a>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/project_sonoluminescence/results/2.jpg" class="img-fluid z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 5: Observed luminescent bubble at 17:11 (f/7.1, 6s, ISO 3200). Enlarged result in Figure 2b.
</div>

<a name="fig-6"></a>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/project_sonoluminescence/results/3.jpg" class="img-fluid z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 6: Observed luminescent bubble at 17:12 (f/7.1, 6s, ISO 3200). Enlarged result in Figure 2c.
</div>

<a name="fig-7"></a>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/project_sonoluminescence/results/5.jpg" class="img-fluid z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 7: Observed luminescent bubble at 18:14 (f/7.1, 6s, ISO 3200). Enlarged result in Figure 2d.
</div>

<a name="fig-8"></a>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/project_sonoluminescence/results/10.jpg" class="img-fluid z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 8: Observed luminescent bubble at 18:26 (f/10, 6s, ISO 6400). Enlarged result in Figure 2g.
</div>

<a name="fig-9"></a>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/project_sonoluminescence/results/11.jpg" class="img-fluid z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 9: Observed luminescent bubble at 18:27 (f/10, 6s, ISO 6400). Enlarged result in Figure 2h.
</div>

Figure [4](#fig-4) depicts the first observed luminescent bubble. Upon magnification (Figure [2a](#fig-2a)) the bubble appeared elongated. Similar phenomena were observed in Figures [5](#fig-5), [8](#fig-8), and [9](#fig-9) ([2d](#fig-2d), [2g](#fig-2g), and [2h](#fig-2h), respectively). The elongation might be due to camera movement during exposure or bubble oscillations.

<a name="fig-10"></a>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/project_sonoluminescence/results/6.jpg" class="img-fluid z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 10: Observed luminescent bubbles at 18:14 (f/7.1, 6s, ISO 3200). Enlarged result in Figure 3a.
</div>

<a name="fig-11"></a>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/project_sonoluminescence/results/7.jpg" class="img-fluid z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 11: Observed luminescent bubbles at 18:14 (f/7.1, 6s, ISO 3200). Enlarged result in Figure 3b.
</div>

At 18:14, two luminescent bubbles coexisted in the container, as shown in Figures [10](#fig-10) and [11](#fig-11) ([3a](#fig-3a) and [3b](#fig-3b), respectively).

<a name="fig-12"></a>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/project_sonoluminescence/results/9.jpg" class="img-fluid z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 12: Observed luminescent bubble at 18:25 (f/11, 10s, ISO 3200). Enlarged result in Figure 2f.
</div>

At 18:25, a bubble persisted for an extended duration of three minutes. Images are provided in Figures [12](#fig-12), [8](#fig-8), and [9](#fig-9) ([2f](#fig-2f), [2g](#fig-2g), and [2h](#fig-2h)). The luminescent color of the bubbles was consistently blue-white.

<a name="fig-13"></a>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/project_sonoluminescence/results/17.jpg" class="img-fluid z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 13: Observed luminescent bubble at 18:20 (f/7.1, 6s, ISO 3200). Enlarged result in Figure 2n.
</div>

At 18:20, an image (Figure [13](#fig-13)) accidentally captured environmental light entering through gaps in the black fabric. Surprisingly, the bubble was still visible, and its brightness was higher than initially expected. Luminescence was easily noticeable whenever it occurred.

<a name="fig-14"></a>
<div class="row">
    <div class="col-sm-3 mt-3 mt-md-0">
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.html path="assets/img/project_sonoluminescence/procedures/2.jpg" width="400" class="img-fluid z-depth-1" %}
    </div>
    <div class="col-sm-3 mt-3 mt-md-0">
    </div>
</div>
<div class="caption">
    Figure 14: Approximate positions of the luminescent bubbles relative to the water surface and the metal rod.
</div>

Based on the images, we outlined the approximate positions of the luminescent bubbles relative to the water surface and the metal rod in Figure [14](#fig-14). Most bubbles were located beneath the metal rod, though some images could not pinpoint the luminescent position.

## Discussion and improvements

Since we only observed sonoluminescence in the final week, we lacked the time to conduct additional experiments. However, we propose the following ideas for future exploration, which may be helpful for other groups:

1. High-Speed Camera for Capturing Bubble Oscillations: observing the expansion and contraction of bubbles can confirm radius changes and estimate the gas temperature inside the bubble. Additionally, this would reveal the emission cycle of the light. However, as the cycle duration is approximately tens of microseconds ($$\mu s$$), a high-speed camera with at least 100,000 fps is required. Such cameras are extremely rare, making this suggestion challenging to implement.
2. Adding Inert Gases: according to the experimental principles, while the type of gas does not influence the bubble radius (as governed by the Rayleigh-Plesset equation), it is closely related to light emission. Experiments have shown that the proportion of inert gases dissolved in water affects luminescence intensity <d-cite key="brenner:2002"/>, as illustrated below:

<a name="fig-15"></a>
<div class="row">
    <div class="col-sm-3 mt-3 mt-md-0">
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.html path="assets/img/project_sonoluminescence/error-1.png" width="400" class="img-fluid z-depth-1" %}
    </div>
    <div class="col-sm-3 mt-3 mt-md-0">
    </div>
</div>
<div class="caption">
    Figure 15: Relationship between inert gases (Ar, Xe) and luminescence intensity <d-cite key="brenner:2002"/>.
</div>

After consulting with the teaching assistant, we learned that argon gas is available. However, dissolving it into water poses a challenge. According to Raoult's Law, solubility is proportional to gas partial pressure. Therefore, it might be possible to seal the opening of the resonance chamber to create an airtight environment, then introduce argon gas. This approach would require considerable effort, and unfortunately, we did not have the time to pursue it.

### How do bubble radius and pressure vary in different solutions (Rayleigh-Plesset equation)?

Using MATLAB, we simulated the radius and pressure changes for water, glycerol, and sulfuric acid. The basic properties of these solutions are shown in Table [1](#tab-1). Simulation parameters are detailed in Figure [16](#fig-16)<d-cite key="hoff:2004"/>, and the results are plotted in Figure [17](#fig-17). The simulations show that higher viscosity coefficients lead to smaller amplitude oscillations in bubble radius and faster damping.  

<a name="tab-1"></a>

|                 | Water        | Glycerol       | Sulfuric Acid |
|-----------------|--------------|----------------|---------------|
| Density ($$kg/m^3$$) | $$1000$$         | $$1261$$           | $$1841$$          |
| Viscosity ($$Pa \cdot s$$) | $$1.00 \times 10^{-3}$$ | $$1.42 \times 10^{0}$$ | $$2.42 \times 10^{-2}$$ |
| Sound speed ($$m/s$$) | $$1500$$         | $$1920$$           | $$1257$$          |

<div class="caption">
    Table 1: Basic properties of water, glycerol, and sulfuric acid at room temperature.
</div>

<a name="fig-16"></a>
<div class="row">
    <div class="col-sm-3 mt-3 mt-md-0">
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.html path="assets/img/project_sonoluminescence/qa-0.png" width="400" class="img-fluid z-depth-1" %}
    </div>
    <div class="col-sm-3 mt-3 mt-md-0">
    </div>
</div>
<div class="caption">
    Figure 16: MATLAB simulation parameters.
</div>

<a name="fig-17"></a>
<div class="row">
    <div class="col-sm-3 mt-3 mt-md-0">
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.html path="assets/img/project_sonoluminescence/qa-1.png" width="400" class="img-fluid z-depth-1" %}
    </div>
    <div class="col-sm-3 mt-3 mt-md-0">
    </div>
</div>
<div class="caption">
    Figure 17: Radius and pressure variations for water (blue, +), glycerol (orange, o), and sulfuric acid (yellow, x).
</div>

### What is the bubble temperature? Can it achieve nuclear fusion?

From studies published in *Nature* <d-cite key="flannigan:2005"/><d-cite key="didenko:2000"/>, bubbles in water typically contain $$N_2$$, $$O_2$$, $$Ar (\sim 1\%)$$, and water vapor, with proportions similar to atmospheric levels. During rapid collapse (sonolysis), $$N_2$$ and $$O_2$$ react to form $$NO_x$$, which dissolves into water, leaving $$Ar$$ as the primary gas within the bubble. This suggests that $$Ar$$, a monoatomic gas, is the main contributor to luminescence.

**Conditions for observing sonoluminescence in other liquids**:  
- **Low vapor pressure**: Prevents excessive vapor from entering the bubble, ensuring $$Ar$$ remains the dominant component. For example, using alcohol would introduce $$C_2H_5OH$$ vapor, which absorbs heat through chemical reactions during compression, reducing bubble temperature and suppressing luminescence. Inert gases avoid this issue.  
- **Polarity**: Ensures that $$NO_x$$ gases dissolve in the liquid, preventing residue in the bubble.  

Researchers used sulfuric acid solutions (vapor pressure $$0.001 \, \text{mmHg}$$, much lower than water’s $$17 \, \text{mmHg}$$) and mixed inert gases $$Xe$$ and $$Ar$$ in varying proportions. They observed luminescence intensities 1500–2700 times greater than water bubbles and identified spectral lines characteristic of $$Ar$$, as well as continuous blackbody radiation.  

However, producing these discrete spectral lines requires energy $$\gg 13 \, \text{eV}$$, far exceeding the blackbody radiation estimate ($$< 1 \, \text{eV}$$). Moreover, blackbody radiation and bubble collapse do not occur simultaneously. Researchers detected $$O_2^+$$ lines, requiring at least $$18 \, \text{eV}$$, suggesting high-energy processes involving free electrons and atom collisions. This confirms the bubble interior is in a plasma state.  

As for cold nuclear fusion, the inability to estimate temperatures accurately and the transient nature of luminescence remain obstacles under investigation.

## Conclusions

This experiment was a challenging task. At the beginning of the semester, the teaching assistant mentioned that experiments in Group B were particularly challenging, and indeed, we made no progress in the first week. We consulted online guides and suggestions from other groups, gradually gaining a better understanding of the procedures. The steps sounded simple when described online or by classmates, leading us to believe that success was guaranteed if we followed them.

On **5/10**, we returned to the lab in the evening to conduct the experiment but, despite our efforts, failed to observe any luminescence (see detailed process in Section [Journal](#section-journal)). At the time, we followed the parameters of previous successful cases, including water levels, transducer positions, and frequencies. On **5/11**, we worked from 1 PM to 9 PM but still saw no results. This made us question why we couldn’t replicate the phenomenon despite adhering to the recommended steps. 

Driven by curiosity and a strong desire to observe luminescence, we scheduled a session with the teaching assistant on **5/12**, starting at 9 AM. We adjusted various parameters, invited students from other groups for guidance, and asked them to help verify whether the luminescence was visible (as prior reports mentioned that dim luminescence could appear as an optical illusion). Despite these efforts, we still didn’t achieve success.

Finally, on **5/18**, we observed luminescence! When one of our team members shouted, “I see it!”, another thought it was a joke, but upon verification, it turned out to be true. After further testing, we concluded that water level was the critical factor. Overjoyed, we captured the phenomenon using a camera—something that no group had successfully done before.

This experiment taught us a great deal. Many experimental variables interact with each other (e.g., power strips affecting waveforms), and even when following previous groups' steps, results are not always consistent. We identified several areas for improvement, such as measuring temperature or using alternative solutions. We hope future groups can validate our procedures, build upon our findings, and further refine this experiment to achieve more comprehensive results.

<a name="section-journal"></a>

## Journal

- **5/4**  
  During the first week, after understanding the experimental principles and procedures, we began the degassing process. However, we noticed the oscilloscope waveform was unstable (the transducer couldn't be mounted correctly, and pressing the heating button caused the waveform to "shift"). With the teaching assistant's help, we switched to another oscilloscope and recalibrated it, but the issue persisted. We later found that the power strip connected to the oscilloscope had a flickering indicator light, suggesting electrical interference. Plugging the oscilloscope directly into a wall socket resolved the issue.  

  Pressing the heating button caused the heating wire's temperature to rise, producing a plastic smell. To avoid melting the wire's plastic coating and causing a short circuit, we replaced the wire with a thicker, more robust one. Throughout the day, we replaced the water multiple times, each requiring significant adjustments (e.g., mounting the transducer at the optimal position and avoiding resonance with other objects). While pressing the heating button caused waveform changes indicating bubble formation, we observed no luminescence by 9 PM. We scheduled the next session for the following Tuesday evening.  

- **5/10**  
  Following the steps from **5/4**, we continued the experiment after the Tuesday group finished. However, we still observed no luminescence and left the lab at 9 PM.  

- **5/11**  
  On this day, we invited a team member from a previous successful group to share their process. They explained that luminescence wasn’t observed when the waveform showed significant changes but rather when it closely resembled the original sine wave with minor distortions. This indicated the bubble's presence at critical voltage, which could produce luminescence. With their guidance, we continued the experiment but were still unable to observe any glowing bubbles.  

- **5/12**  
  On Thursday, we started the experiment at 9 AM with the teaching assistant. After heating, the water temperature rose, and excessive gas dissolved into the resonance chamber, distorting the waveform in ways that couldn’t be corrected using standard methods. We had to replace the water repeatedly, each time requiring extensive adjustments. Despite working from 9 AM to 8 PM, we still observed no glowing bubbles.  

- **5/18**  
  This was our final day of experimentation. Initially, we were prepared to accept failure if we didn’t succeed. Previous water levels were set to ~9.2 cm, based on prior groups' reports of successful luminescence. After reconsidering, we decided to adjust the water level.  

  Around 3 PM, we replaced the water, raising the level to ~10 cm. Following the procedures, including degassing for over 20 minutes and transferring water to the resonance chamber via a siphon, we found it easier to adjust the transducer to the optimal position (near the chamber's center, with an amplitude of ~1V). At approximately 3:30 PM, team member Yan Jingzhe observed luminescence! The light was blue-white, located near the transducer, and significantly brighter than expected, leaving no room for doubt. After repeated confirmations by team member, we verified that it was indeed a glowing bubble. Although we invited the teaching assistant to observe, the bubble had become unstable by then, and they couldn’t see it.  

  We continued heating, but as the water temperature rose, the waveform became increasingly distorted. After discussion, we decided to maintain the current water level and transducer position for another water replacement. At around 5 PM, we observed luminescence again and invited the teaching assistant and other group members to confirm it, all of whom verified the phenomenon. Using a camera, we captured the glowing bubbles, with the results and parameters documented in Section [Results](#sec-results). Additionally, we observed two glowing bubbles simultaneously.  

  Following this, we hypothesized that water level might determine the experiment's success. We lowered the water to ~9 cm and resumed the experiment but observed no luminescence. Gradually increasing the water back to 10 cm and reheating produced luminescence again! Based on this, we recommend future groups adjust the water level if their experiments are unsuccessful.  

  In the first week, we had considered improvements to make after observing luminescence, but since we only succeeded in the third week, there wasn’t enough time to implement them. We hope future groups can continue this work and refine the experiment further.