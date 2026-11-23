---
id: "vortices"
number: "04"
eyebrow: "THE ANALYTIC CONSTRUCTION OF A KADOMTSEV STABLE SHEAR-FLOW STABILIZED Z-PINCH EQUILIBRIUM"
title: "A Cosmic Joke"
summary: "The universe has a sense of humor, because to find physics that provides the Z-pinch stability against the interchange, $m = 0$, mode you have to first exchange one around"
mediaTitle: "INTERACTIVE VELOCITY PROFILES"
mediaCaption: "Live demonstration included below"
mediaIcon: "∂"
mediaSlides:
  - src: /public/images/vortices/willard_bennett.jpg
    title: Willard H. Bennett
    caption: Willard Bennett thinking about one of the many advances in physics, and chemistry that he contributed to. 
    credit: https://www.invent.org/sites/default/files/styles/inductee_media/public/inductees/12-master_0.jpg?h=754009f3
---

## Willard H. Bennett and the Bennett Pinch

**Another godfather of plasma physics** — The American scientist Willard H. Bennett worked out the electrostatic theory of [magnetically self-focusing streams in 1934](https://journals.aps.org/pr/abstract/10.1103/PhysRev.45.890) where he used an approximate, self-similar argument to come up with the basis for a non-relativistic number density to describe these systems,
$$
\begin{aligned}
n(r) &= \frac{n_{0}}{(1 + \xi^{2}r^{2})^{2}} \\
\xi^{2} &= \frac{C_{B}n_{0}}{T} \\
C_{B} &= \frac{\mu_{0}e^{2}u_{z,0}^{2}}{16k_{B}}
\end{aligned}
$$

### The cubic pureflow Bennett-Shumlak-Hartman-Vortex
If you swap this with the uniform drift flow that he studied you'll get a new flow profile,
$$
u_{z}(r) = u_{z,0}\frac{T(r)^{2}}{(T(r) + C_{B}n_{0}r^{2})^{2}}
$$
Treating this also as the MHD flow that provides the stabilizing shear, in the ideal limit of an infinitely long plasma cylinder the Shumlak-Hartman criterion relaxes,
$$
u_{z}' > 0
$$
and with a power-law temperature profile,
$$
T(r) = \frac{T_{p}}{r_{p}^{n}}r^{n}
$$
it can be shown that $n > 2$ gives a sufficiently enhanced thermodynamic gradient for this flow to be shear-flow stabilized.


Inserting the minimum thermal energy shear-flow stabilized state, $n = 3$, leads to 
$$
u_z(r)=u_{z0}\frac{r^2}{(r+C)^2}
$$
which has the shear,
$$
\frac{du_z}{dr}=\frac{2u_{z0}Cr}{(r+C)^3}
$$
where
$$
C = \frac{\mu_{0}e^{2}}{16k_{B}}\frac{n_{0}u_{z,0}^{2}r_{p}^{3}}{T_{p}}
$$
localizes the shear layer. 

The interactive graph below evaluates these profiles.
