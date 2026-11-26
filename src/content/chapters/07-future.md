---
id: "frontier"
number: "07"
eyebrow: "THE WORK AHEAD"
title: "Towards higher-order study"
summary: "The analytic understanding of an idealized model for a shear-flow stabilized Z-pinch opens new questions related to the higher-order physics and the stabilizing effect of the shear alongside plasma turbulence. These questions involve investigating eigenmode spectra, nonlinear evolution, nonideal transport, experimental tests, and engineering"
mediaTitle: "FUTURE RESEARCH"
mediaCaption: "Roadmap, simulations, references, and collaboration links"
mediaIcon: "✧"
showGallery: true
mediaSlides:
  - src: /public/images/frontier/cheesin.jpeg
    title: A picture of myself, the researcher behind this work
    caption: And I need your support
---

## Conclusion: Next steps for the research

**This is just the beginning** — What's most remarkable about this simplified, idealized model is how well it does at accurately modelling complex experimental systems using their experimental data. That is despite only capturing the effects of ideal magnetohydrodynamics, i.e., only what the plasma would do if it was treated purely as a magnetic spring, and involving a uniform density as well as an enhanced temperature gradient that is a very simplified model of an experimental temperature gradient.

What really needs to happen for this research are two things:

(1) Higher-order theoretical and computational work to analyze resistive physics, kinetic physics, and the effect of instabilities just to name a few. This list is by no means an exhaustive one.

(2) **Financial stability for myself**. Since graduating with a Master's of Science in Aeronautics & Astronautics from the University of Washington three years ago it's been really difficult. I've never been the best student: I stopped caring about grades years ago. 

I spent a year hearing rejection after rejection while I worked on a high-performance [3D+t CUDA C Ideal MHD solver](https://github.com/russellmatt66/imhd-CUDA) until I finally found a job training AI, and got my code to run equilibrium pinch problems without spazzing out. My function was to come up with novel problems that stumped the AI. On three separate days I managed to do this twelve separate times each day by giving the AI Bennett Pinch problems in the infinitely long plasma cylinder. 

Eventually, the people paying me said "you're doing too much Bennett Pinch. Do something different." So, I sat down and read Davidson's *Turbulence* for three hours but to no avail. Asking an AI problems from a book it's trained on is not going to work, and it didn't. With only an hour left on the clock, and a need for the money that came from the stump, I did the only thing I could and that was to swap the Bennett profile around so that I could use my code for solving the Bennett pinch to get a value for the system in the limit, $T_{0} >> T_{p}$, i.e., treating the temperature as uniform. 

This is what happens when you are in a position where you have to rush because you do not have any support and cannot carefully check what you have done because you are an independent researcher without institutional backing. I've had to carry this research to the point where it's at by myself. That includes a four month hiatus working for a startup where I built a real-time rendered pipeline in Vulkan and authored an 80 page R&D report which detailed the various tradeoffs and approaches to the digital twin they wanted. 

Right now, I'm at the point where I cannot afford to continue to do this much longer.  