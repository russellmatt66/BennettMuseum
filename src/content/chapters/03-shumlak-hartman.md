---
id: "shear-flow-stabilization"
number: "03"
eyebrow: "Shear-flow stabilization and Kadomtsev Stability"
title: "Natural ways to stabilize the Z-pinch"
summary: "Sheared axial flow, and a logarithmically tailored plasma pressure profile, change the dynamics of perturbations and provide a route toward stabilizing Z-pinch configurations against both the sausage and kink modes."
mediaTitle: "SHEARED-FLOW VISUALIZATION"
mediaCaption: "Future radial velocity field and perturbation animation"
mediaIcon: "⇢"
mediaSlides:
  - src: /images/shear-flow-stabilization/bbkadomtsev.jpg
    title: Boris Borisovich Kadomtsev
    caption: Boris Borisovich Kadomtsev contemplating answers to deep questions in nonlinear plasma physics 
    credit: https://en.wikipedia.org/wiki/Boris_Kadomtsev#/media/File:RIAN_archive_151311_Russian_physicist_Boris_Kadomtsev.jpg
  
  - src: /images/shear-flow-stabilization/shumlak.jpg
    title: Uri Shumlak
    caption: The Jewish-American physicist Uri Shumlak, one of the pioneers of the shear-flow stabilization criterion, the scientific brains behind Kerbal Space Program, and probably the second best known Aggie behind Johnny Manziel
    credit: https://bpb-us-e1.wpmucdn.com/sites.uw.edu/dist/f/10876/files/2021/02/UriOut-square-1.jpg
---

## Scientific Miracles

**At the frontier** — Work on Z-pinch stabilization in the 60s experienced a major breakthrough when the Russian scientist B.B. Kadomtsev determined that a plasma pressure profile which satisfied the inequality,
$$
\begin{aligned}
    -\frac{d{\ln(p)}}{{d\ln(r)}} &\leq \frac{4\gamma}{2 + \gamma \beta} \\
    \beta &= \frac{\langle p \rangle }{B^{2}}2\mu_{0}
\end{aligned}
$$
will provide stabilization to an unsheared Z-pinch against the $m = 0$ mode. However, this did not address the kink mode, and in the late 70s, and early 80s, fusion energy researchers began to transition away from pinches, and towards toroidal systems that connected the ends of the pinch together to eliminate end losses and create systems that external magnetic fields could confine.

It wasn't until the mid-90s when two American researchers found a natural way to stabilize the $m = 1$ mode using sheared-flow of a sufficient magnitude. By dividing the axial shear by the Alfvenic shear the linearized equations of MHD could be solved numerically to determine how much shear was required for this stabilization. The result is the Shumlak-Hartman criterion,
$$
\begin{aligned}
    \frac{d u_{z}}{dr} &> 0.1 kV_{A} \\
    k &= \frac{2\pi}{L} \\
    V_{A} &= \frac{B}{\sqrt{\rho\mu_{0}}}
\end{aligned}
$$