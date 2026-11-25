---
id: "stability"
number: "05"
eyebrow: "The Kadomtsev Connection and Shear-flow stabilization"
title: "Shear-flow Stabilization"
summary: "By linking the drift flow supporting the plasma current density with the center of mass flow a full integrable MHD equilibrium can be determined that is shear-flow stabilized in both ideal and non-ideal senses, as well as Kadomtsev stable"
mediaTitle: "STABILITY CRITERIA"
mediaCaption: "Future equation-by-equation interactive derivation"
mediaIcon: "∂"
mediaSlides:
  - src: /public/images/stability/normalized_profiles.png
    title: Normalized equilibrium profiles
    caption: Plots of the equilibrium profiles in a normalized basis using a normalized coordinate, $\phi = \frac{r}{C}$.
    credit: https://github.com/russellmatt66/Bennett-Vorticity/blob/main/cubic/basic_properties/cubic_equilibrium.py
---

## Solving the equilibrium

**Stabilization** of the Z-pinch hinges upon not just the aforementioned Kadomtsev criterion, but also the Shumlak-Hartman criterion. There is also a non-ideal criterion whose form is approximately rendered here,
$$
\frac{du_{z}}{dr} > \frac{L}{2\pi r_{p}}\frac{d\ln(p)}{d\ln(r)}
$$
This approximate version of the non-ideal criterion will not be considered here at the moment. 

In order to evaluate the Shumlak-Hartman, and Kadomtsev criteria, we first have to determine the rest of the magnetohydrodynamic equilibrium beyond the uniform density implied by the Bennett exchange procedure, and the cubic pureflow Bennett-Shumlak-Hartman vortex. This means determining the magnetic field, and the plasma pressure by solving some integrals.

The magnetic field for a stationary Z-pinch comes from Ampere's Law,
$$
B_{\theta} = \frac{\mu_{0}}{r}\int_{0}^{r}r'J_{z}(r')dr'
$$
and the plasma pressure comes from the force balance,
$$
\nabla p = \vec{J}\times\vec{B} = -J_{z}B_{\theta}
$$
with the boundary conditions
$$
\begin{aligned}
p(0) &= p_{0} = \int_{0}^{r_{p}}J_{z}B_{\theta}dr \\
p(r_{p}) &= 0
\end{aligned}
$$

If these integrals do not evaluate, or if the magnetic field that we obtain from Ampere's Law blows up at the origin, then the clever physics we have done is incoherent. However, fortunately that is not the case because the magnetic field can be integrated using u-substituion or a computer algebra system (CAS) like Wolfram Mathematica. In formulating the following equation we have assumed that the plasma current density for a singly-ionized hydrogen-electron plasma,
$$
\vec{J} = J_{z}\hat{e}_{z} = en_{0}u_{z,0}\frac{r^{2}}{(r + C)^{2}}\hat{e}_{z}
$$
depends on the exact same flow profile that we constructed for the center of mass MHD flow,
$$
\vec{u} = u_{z}\hat{e}_{z} = u_{z,0}\frac{r^{2}}{(r + C)^{2}}\hat{e}_{z}
$$
This leads to Ampere's Law being,
$$
\begin{aligned}
B_{\theta} &= \frac{en_{0}u_{z,0}\mu_{0}}{r}\int_{0}^{r}\frac{r'^{3}}{(r' + C)^{2}}dr' \\
&= en_{0}u_{z,0}\mu_{0}\frac{f(r,C)}{2r(r+C)}
\end{aligned}
$$
where,
$$
f(r,C) = r^{3} - 3r^{2}C - 6rC^{2}\bigg(1 + \ln(\frac{C}{r+C})\bigg)-6C^{3}\ln(\frac{C}{r+C})
$$
What's amazing about this function is that it has exactly the properties that we need for our procedure to be valid. Instead of blowing up at the origin we have,
$$
\lim_{r\rightarrow 0^{+}} f(r,C) = 0
$$

## Evaluating Shumlak-Hartman

To evaluate Shumlak-Hartman, we evaluate the following fraction,
$$
\frac{u_{z}'}{B_{\theta}} > 0.1\frac{2\pi}{L}\frac{1}{\sqrt{\rho \mu_{0}}}
$$
which becomes,
$$
4\frac{C}{en_{0}\mu_{0}}\frac{r^{2}}{(r + C)^{2}}\frac{1}{f(r,C)} > 0.1\frac{2\pi}{L}\frac{1}{\sqrt{\rho \mu_{0}}}
$$
Another critical property about the magnetic field "form function", $f(r,C)$, is that its first and second derivatives also go to zero approaching the origin,
$$
\lim_{r\rightarrow 0^{+}} f'(r,C) = 0 \\
\lim_{r\rightarrow 0^{+}} f''(r,C) = 0 \\
$$
This is important because what is most interesting about this mathematics is whether the shear-flow stabilization holds in an arbitrarily small space, i.e., what the fraction we are studying evaluates to for $\lim_{r\rightarrow 0^{+}}$ and $\lim_{r_{p}\rightarrow 0^{+}}$. We have to use L'Hopitals rule twice in this study, yielding,
$$
\begin{aligned}
    \lim_{r\rightarrow 0^{+}} \frac{4C}{en_{0}\mu_{0}}\lim_{r\rightarrow 0^{+}} \frac{2}{(r + C)^{2}f'' + 4(r+C)f' + 2f} = \infty
\end{aligned}
$$
Obviously, infinity is greater than
$$
0.1\frac{2\pi}{L}\frac{1}{\sqrt{\rho \mu_{0}}}
$$ 
unless there is no plasma density or zero length. However, that just means $L > 0$ is required, so the length of the plasma cylinder only has to be finite for this equilibrium to be shear-flow stabilized towards the axis. However, this does not determine what the properties are when the pinch radius shrinks to an infinitesimally small size. 

For that we start by considering a scaling relationship between the plasma radius, $r$, and the pinch radius, $r_{p}$,
$$
r = \alpha r_{p}
$$ 
where $\alpha$ is some fixed fraction. Then we have,
$$
\begin{aligned}
    \lim_{r_{p}\rightarrow 0 ^{+}} S(r) &= \frac{4}{en_{0}\mu_{0}}\tilde{C}\alpha^{2}\lim_{r_{p}\rightarrow 0^{+}} \frac{r_{p}^{3}}{(\tilde{C}r_{p}^{2} + \alpha)^{2}}\frac{1}{f(\alpha r_{p}, \tilde{C}r_{p}^{3})} \\
    &= \frac{4}{en_{0}\mu_{0}}\tilde{C}\alpha^{2} \lim_{r_{p}\rightarrow 0 ^{+}}\frac{r_{p}^{3}}{\alpha^{2}}\frac{1}{r^{3}} \\
    &= \frac{4}{en_{0}\mu_{0}}\frac{\tilde{C}}{\alpha^{3}}
\end{aligned}
$$
with,
$$
\begin{aligned}
C &= \tilde{C}r_{p}^{3} \\
S(r) &= \frac{u_{z}'}{B_{\theta}}
\end{aligned}
$$
so that the criterion is strongly-satisfied towards the axis in an arbitrarily small pinch! Meaning, $\alpha \rightarrow 0$ causes the shear structure to diverge to $\infty$. 

## The Kadomtsev Criterion

The Kadomtsev criterion can be written equivalently as,
$$
\frac{d}{dr}\ln\left(\frac{p}{\langle j_z\rangle^\gamma}\right) \leq 0
$$
where $\gamma$ is the adiabatic (polytropic) index, and where 
$$
\langle j_{z} \rangle = \frac{1}{\pi r^{2}}\int j_{z}dA 
$$ 
is area-averaged current density. The derivative here is a doozy, but we can evaluate it,
$$
\frac{d}{dr}\ln\left(\frac{p}{\langle j_z\rangle^\gamma}\right) = \frac{1}{F}\frac{d}{dr}F
$$
with, 
$$
F = \frac{p}{\langle j_{z} \rangle^{\gamma}}
$$
so that we have,
$$
\frac{1}{F}\frac{d}{dr}F = \frac{1}{F}\bigg(\frac{dp}{dr}\frac{1}{\langle j_{z} \rangle^{\gamma}} - \gamma \frac{p}{\langle j_{z} \rangle^{\gamma + 1}}\frac{d}{dr}\langle j_{z} \rangle\bigg)
$$
which becomes,
$$
\bigg(\frac{p'}{p} - \gamma\frac{\langle j_{z} \rangle'}{\langle j_{z} \rangle}\bigg) \leq 0
$$
For the equilibrium shown here we can prove that this is satisfied for all physically admissible parameter values of the positive-current pureflow vortex. This follows from the structure of the current density which can be seen to be always positive for any combination of plasma parameters and positive flow speed modulus squared. Then, the same can be said for the magnetic field via Ampere's Law as integrating this always positive current density will result in a magnetic field that has the same property.

Consequently, $p' = -J_{z}B_{\theta} < 0$ holds throughout the domain for any $C$, and $p > 0$ does as well because $p_{0} > \int_{0}^{r}J_{z}B_{\theta}dr, \forall r \ s.t. \ 0 < r < r_{p}$. Similarly, $\langle j_{z} \rangle > 0$ holds likewise, as the integrand is the same as for $B_{\theta}$. This leaves us with the need to prove that $\langle j_{z} \rangle' > 0$. Writing,
$$
    \langle j_{z} \rangle(r) = \frac{2}{r^{2}}G(r), \quad G(r) = \int_{0}^{r}j_{z}(r')r' dr'
$$		
we have,
$$
    \langle j_{z} \rangle' = \frac{2}{r}\left(j_{z} - \langle j_{z} \rangle \right)
$$
The current density here increases monotonically with radius because,
$$
    j_{z}'(r) = 2en_{0}u_{z,0}C \frac{r}{(r + C)^{3}} > 0
$$
so we have $j_{z}(s) < j_{z}(r)$ for any $s < r$ allowing us to write,
$$
    \int_{0}^{r} j_{z}(s)s ds < \int_{0}^{r} j_{z}(r)sds 
$$
but $j_{z}(r)$ can be pulled outside the RHS to give,
$$
    \int_{0}^{r} j_{z}(s)s ds < j_{z}(r) \frac{r^{2}}{2}
$$
which leaves us with,
$$
    j_{z}(r) > \frac{2}{r^{2}}\int_{0}^{r}j_{z}(s)s ds
$$
and this is precisely,
$$
    j_{z} > \langle j_{z} \rangle
$$
therefore, 
$$
    \langle j_{z} \rangle' > 0, \quad 0 < r < r_{p}
$$
so that we have the Kadomtsev-equivalent criterion satisfied.