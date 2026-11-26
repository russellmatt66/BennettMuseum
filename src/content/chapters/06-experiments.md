---
id: "evidence"
number: "06"
eyebrow: "QUANTITATIVE COMPARISON"
title: "What do the experiments show?"
summary: "Physics needs to meet with experiment to test its validity"
mediaTitle: "EXPERIMENTAL COMPARISONS"
mediaCaption: "Future selectable data overlays and fit diagnostics"
mediaIcon: "⌁"
mediaSlides:
  - src: /images/evidence/frontwake_best_sweepsweep_GOODGOOD_RRMSE0pt1_Nr10e4.png
    title: Solution sweep of the MAST edge pedestal
    caption: Analytic solutions of the Bennett vortex equilibrium created using experimental data from the MAST edge pedestal. Every curve drawn is a calculated equilibrium with range-normalized relative root mean square error (RNRRMSE) < 10%.
    credit: https://github.com/russellmatt66/Bennett-Vorticity/blob/main/cubic/mast_2023/best.py
  
  - src: /images/evidence/diiid/DIIID_edgepedestal_rnrrmse_20_Nsweep100.png
    title: Solution sweep of the DIIID edge pedestal
    caption: Analytic solutions of the Bennett vortex equilibrium created using experimental data from the DIIID edge pedestal. Every curve drawn is a calculated equilibrium with range-normalized relative root mean square error (RNRRMSE) < 20%.
    credit: https://github.com/russellmatt66/Bennett-Vorticity/blob/main/cubic/dIIId/best_DIIID_positive.py

  - src: /images/evidence/diiid/Fig29_Ns25.png
    title: Solution sweep of the DIIID edge pedestal
    caption: Analytic solutions of the Bennett vortex equilibrium created using experimental data from the DIIID edge pedestal. Every curve drawn is a calculated equilibrium with range-normalized relative root mean square error (RNRRMSE) < 20%.
    credit: https://github.com/russellmatt66/Bennett-Vorticity/blob/main/cubic/dIIId/best_DIIID_plateau.py

  - src: /images/evidence/Figure_3_IzFits.png
    title: Analytic solution to the intensity of an air plasma streamer head
    caption: What is most striking about this solution is that the independent variable here is actually the axial coordinate, and not the plasma radius. A solution sweep has not been performed yet using this data. All four solutions defined by the quartic roots are shown. The needletip of the experiment also appears to have a vortex attached to it, perhaps even two.
    credit: https://github.com/russellmatt66/Bennett-Vorticity/blob/main/cubic/li_2021/li2021.py

  - src: /images/evidence/watermicrojet/basesweep/Figure_14.png
    title: Analytic solutions to a laser-driven shock in a water microjet
    caption: The code that this is produced from sweeps over the base and plateau points, and then sweeps over the edge velocities of the experiment based on the uncertainty in experimental expansion velocity. This is the most accurate sweep created from this procedure with an average R^{2} > 0.973.
    credit: https://github.com/russellmatt66/Bennett-Vorticity/blob/main/cubic/microvortex_2025/bellabasesweep.py

  - src: /images/evidence/zap2001/Root1_rp10mm_n04e21_Tp200eV_u0100kms.png
    title: Analytic solution to a shear-flow stabilized Z-pinch plasma
    caption: What is particularly interesting about this solution using experimental data from a 2001 shear-flow stabilized Z-pinch experiment is that it is based on a flow velocity root which is complex. Because of this the solution fails to localize the shear correctly so that outside of the interior of the plasma the accuracy of the idealized solution disappears. Yet inside there is evidently a very close match in the subtle structure of the profile. 
    credit: https://github.com/russellmatt66/Bennett-Vorticity/blob/main/cubic/zap_2001/zap2001.py

  - src: /images/evidence/tau_0pt16_swtcfit_root3.png
    title: Analytic sawtooth solution to a shear-flow stabilized Z-pinch plasma
    caption: The shear-flow stabilized property of the equilibrium is strongly satisfied in an arbitrarily small pinch radius so the highly turbulent environment of a real experiment, like the 2009 Zap experiments into shear-flow stabilized Z-pinch dynamics, provides a convenient test for whether this can be meaningfully applied to real world data. The solutions here are constructed by treating each cell as a separate physical problem whose roots are solved based on this idealized model.  
    credit: https://github.com/russellmatt66/Bennett-Vorticity/blob/main/cubic/zap_2009/zap2009_sawtoothchain.py
---

## Modelling real world systems with an idealized physics

**Solving the equilibrium** — on real world data requires extending the model to include a non-zero flow at the core of the device. Without it the model treats the problem as rising from stagnation when in reality experimental systems show shear layers that transition between smaller and larger flows / current densities / intensities. 

To solve the equilibrium we have to study the boundary conditions,
$$
\begin{aligned}
  u_{z}(0) &= u_{0} \\
  u_{z}(r_{p}) &= u_{edge}
\end{aligned}
$$
The mathematical function we are considering is,
$$
\begin{aligned}
  u_{z}(r) = u_{0} \pm u_{z,0}\frac{r^{2}}{(r + C)^{2}}
\end{aligned}
$$
which leads to the following fourth-order algebraic equation when we consider the edge of the plasma / magnetohydrodynamic fluid system,
$$
\begin{aligned}
	&r_{p}^{2}\bigg(u_{edge} - u_{0} \mp u_{z,0}\bigg) + \\
	&\qquad (u_{edge} - u_{0})C_{u}u_{z,0}^{2}\bigg(C_{u}u_{z,0}^{2} + 2r_{p}\bigg) = 0 \\
	C &= C_{u}u_{z,0}^{2}
\end{aligned}
$$
The roots of this equation are the physical $u_{z,0}$. They exist because the roots of fourth-order algebraic systems have a closed-form, and we can use existing mathematical libraries like Python's **numpy** to obtain them. That is what is done in this section, and the results are presented. The code for producing these results can be found in the caption of the respective figures.

To evaluate the accuracies, two different metrics are used. The first is range-normalized relative root mean square error (RNRRMSE),
$$
\begin{aligned}
RNRRMSE &= \frac{1}{max(\hat{J}_{\phi}) - min(\hat{J}_{\phi})}RRMSE(J, \hat{J}_{\phi}) \\
RRMSE &= \sqrt{\frac{1}{N}\sum_{i=1}^{N}(\hat{J}_{i} - J_{i})^{2}}
\end{aligned}
$$
and $R^{2}$,
$$
\begin{aligned}
R^{2} &= 1 - \frac{SS_{res}}{SS_{tot}} \\
SS_{res} &= \sum_{i=1}^{N} (y_{i} - \hat{y}_{i})^{2} \\
SS_{tot} &= \sum_{i=1}^{N}(y_{i}-\bar{y})^{2}
\end{aligned}
$$
The former is used to evaluate all of the applications except the laser-driven shock in a water microjet.

## Edge Pedestal
The edge pedestal is a confinement barrier that appears in tokamaks, a toroidal magnetic fusion energy concept, in the presence of an enhanced thermodynamic gradient. This equilibrium is both a confinement barrier, and one that appears in the presence of an enhanced thermodynamic gradient. Therefore, despite its cylindrical nature and idealized structure it is a test of the physics to see if it produces accurate solutions to this experimental system. 

MAST

A parameter sweep of the MAST edge pedestal across the span $n_{0} \in [10^{19}, 10^{20}] \ \mathrm{m^{-3}}$, $T_{p} \in [200, 300] \ \mathrm{eV}$ with $N = 25*25$ total value-pairs swept through is performed and shown in the figures to the right. Every band represents a solution obtained from the analytic model here with less than $10\%$ range-normalized relative root mean square error. The front region is to the right of the connection point, and the wake is to the left. The average core pressure of the wake solutions is calculated to be $<p_{0}> = 2.997 \ [\mathrm{kPa}]$ with a standard deviation, $ 2.481 [\mathrm{kPa}]$, and median $2.362 \ [\mathrm{kPa}]$.

DIII-D

The figures show a parameter sweep of the DIII-D edge pedestal across the span $n_{0} \in [10^{19}, 10^{20}] \ \mathrm{m^{-3}}$, $T_{p} \in [200, 700] \ \mathrm{eV}$ with $N = 25*25$ total value-pairs swept through. Every band represents a solution obtained from the analytic model here with less than $20\%$ range-normalized relative root mean square error. The front region is to the right of the connection point, and the wake is to the left. 

The plateau is also swept over so that every point within a tolerance of the maximum intensity is used in this process. 

## Air Plasma Streamer Head
To model the intensity of an air plasma streamer head, a linear discharge model is assumed to relate the observed intensity with the plasma current density,
$$
I_{z} = \alpha J_{z}
$$
This pits the nonlinear structure of the physics against the nonlinear structure of the experimental observations. If they do not match then this usage of a proportionality constant will not make them.

| Region    | Root | RNRRMSE (%) |
|:----------|:----:|------------:|
| Wake      | 3    | 21.34       |
| Wake      | 4    | 10.21       |
| Front     | 3    | 14.94       |
| Front     | 4    | 19.56       |
| Needletip | 4    | 8.46        |

*Table: Air plasma streamer head roots that satisfy the boundary conditions with real roots, along with their accuracy metric.*

## Laser-driven Shock in a Water Microjet
The same linear discharge model is employed here as was emplyed in the study of the air plasma streamer head.

| ibase | ir | Mean ($R^{2}$) | Median ($R^{2}$) | Stdev ($R^{2}$) | $N$ | $N_{.95}$ |
|:-----:|:--:|:--------------:|:----------------:|:---------------:|:---:|:---------:|
| 2     | 0  | 0.973          | 0.973            | 0.0001          | 625 | 625       |

*Table: Statistics for the most accurate coarse base sweep performed, which is shown in the accompanying figure. Two other pairs of base and edge points, $(2,1)$ and $(2,2)$, had every $R^{2}$ value above 0.95 as well, but they are not shown.*

<!-- $$
\begin{table}
	\centering
	\caption{Statistics for the most accurate coarse base sweep performed which is shown in Figure (\ref{fig:bella_basesweep_fig14}). Two other pairs of base and edge points, $(2,1)$ and $(2,2)$ had every $R^{2}$ value above 0.95 as well, but they are not shown.}
	\label{tab:bella_basesweep}
	\small
	\begin{tabular}{lcccccc}
		\hline
		ibase &
		ir & 
		mean($R^{2}$) & 
		median($R^{2}$) &
		stdev($R^{2}$) & 
		N &
		$N_{.95}$ \\
		\hline
		2 & 0 & 0.973 & 0.973 & 0.0001 & 625 & 625 \\
		\hline
	\end{tabular}
\end{table}
$$ -->

## Zap Shear-flow Stabilized Z-pinch Plasmas

**Zap 2001**

Single vortex solutions to the axial velocity profile from the 2001 Zap DD fusion plasma experiment are shown. Each pinch is calculated in the uncorrelated pinch basis, and the pinch midpoint is chosen as the connection point between the two. The flow roots for each vortex are complex-valued, $u_{z,0R} = 1.19027\times 10^{5} + j3.30410\times 10^{5} \ \mathrm{m/s}$ for the vortex on the right-hand side, and $u_{z,0L} = -1.19027\times 10^{5} + j3.30410\times 10^{5} \ \mathrm{m/s}$ for the left-hand side. The peak shear of the profiles is the same on both sides $S_{\mathrm{peak},+} = S_{\mathrm{peak},-} = 3.352\times 10^{6} \ [\mathrm{s^{-1}}]$. The peak shear obtained from amongst all the roots is $S_{\mathrm{peak}} = 1.4\times 10^{7} \ \mathrm{s^{-1}}$. The thermal lifetime is calculated to be $13.029 \ \mathrm{\mu s}$ for the negative vortex on the left, and $20.754 \ \mathrm{\mu s}$ for the positive vortex on the right

**Zap 2009** 

| $\tau$ ($\mu$s) | Root 1 (%) | Root 2 (%) | Root 3 (%) | Root 4 (%) |
|----------------:|-----------:|-----------:|-----------:|-----------:|
| 29.60           | 2.46       | 2.46       | **1.41**   | 4.93       |
| 38.40           | 4.68       | 4.68       | **3.28**   | 11.10      |
| 41.04           | 7.34       | 7.34       | **4.58**   | 15.81      |
| 48.96           | 4.65       | 4.65       | **3.43**   | 11.46      |
| 58.64           | 10.37      | 10.37      | **5.92**   | 20.61      |

*Table: Average RRMSE across all reconstructed segments for each root of the equilibrium at five experimental time points. The most accurate root at each time point is highlighted in bold.*

## Sources
[MAST edge pedestal](https://doi.org/10.1088/1361-6587/acd478)

[DIII-D edge pedestal](https://doi.org/10.13182/FST05-A1044)

[Air plasma streamer head](https://arxiv.org/abs/2106.00409)

[Laser-driven shock in a water microjet](https://www.nature.com/articles/s41467-025-67224-3)

[Zap 2001](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.87.205005)

[Zap 2009](https://iopscience.iop.org/article/10.1088/0029-5515/49/7/075039)
