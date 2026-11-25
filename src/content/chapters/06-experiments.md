---
id: "evidence"
number: "06"
eyebrow: "QUANTITATIVE COMPARISON"
title: "What do the experiments show?"
summary: "Theory becomes more useful when its profiles can be compared quantitatively with measured plasma behavior."
mediaTitle: "EXPERIMENTAL COMPARISONS"
mediaCaption: "Future selectable data overlays and fit diagnostics"
mediaIcon: "⌁"
mediaSlides:
  - src: /public/images/evidence/frontwake_best_sweepsweep_GOODGOOD_RRMSE0pt1_Nr10e4.png
    title: Solution sweep of the MAST edge pedestal
    caption: Analytic solutions of the Bennett vortex equilibrium created using experimental data from the MAST edge pedestal. Every curve drawn is a calculated equilibrium with range-normalized relative root mean square error (RNRRMSE) < 10%.
    credit: https://github.com/russellmatt66/Bennett-Vorticity/blob/main/cubic/mast_2023/best.py
  
  - src: /public/images/evidence/diiid/DIIID_edgepedestal_rnrrmse_20_Nsweep100.png
    title: Solution sweep of the DIIID edge pedestal
    caption: Analytic solutions of the Bennett vortex equilibrium created using experimental data from the DIIID edge pedestal. Every curve drawn is a calculated equilibrium with range-normalized relative root mean square error (RNRRMSE) < 20%.
    credit: https://github.com/russellmatt66/Bennett-Vorticity/blob/main/cubic/dIIId/best_DIIID_positive.py

  - src: /public/images/evidence/diiid/Fig29_Ns25.png
    title: Solution sweep of the DIIID edge pedestal
    caption: Analytic solutions of the Bennett vortex equilibrium created using experimental data from the DIIID edge pedestal. Every curve drawn is a calculated equilibrium with range-normalized relative root mean square error (RNRRMSE) < 20%.
    credit: https://github.com/russellmatt66/Bennett-Vorticity/blob/main/cubic/dIIId/best_DIIID_plateau.py

  - src: /public/images/evidence/Figure_3_IzFits.png
    title: Analytic solution to the intensity of an air plasma streamer head
    caption: What is most striking about this solution is that the independent variable here is actually the axial coordinate, and not the plasma radius. A solution sweep has not been performed yet using this data. All four solutions defined by the quartic roots are shown. The needletip of the experiment also appears to have a vortex attached to it, perhaps even two.
    credit: https://github.com/russellmatt66/Bennett-Vorticity/blob/main/cubic/li_2021/li2021.py

  - src: /public/images/evidence/watermicrojet/basesweep/Figure_14.png
    title: Analytic solutions to a laser-driven shock in a water microjet
    caption: The code that this is produced from sweeps over the base and plateau points, and then sweeps over the edge velocities of the experiment based on the uncertainty in experimental expansion velocity. This is the most accurate sweep created from this procedure with an average R^{2} > 0.973.
    credit: https://github.com/russellmatt66/Bennett-Vorticity/blob/main/cubic/microvortex_2025/bellabasesweep.py

  - src: /public/images/evidence/zap2001/Root1_rp10mm_n04e21_Tp200eV_u0100kms.png
    title: Analytic solution to a shear-flow stabilized Z-pinch plasma
    caption: What is particularly interesting about this solution using experimental data from a 2001 shear-flow stabilized Z-pinch experiment is that it is based on a flow velocity root which is complex. Because of this the solution fails to localize the shear correctly so that outside of the interior of the plasma the accuracy of the idealized solution disappears. Yet inside there is evidently a very close match in the subtle structure of the profile. 
    credit: https://github.com/russellmatt66/Bennett-Vorticity/blob/main/cubic/zap_2001/zap2001.py

  - src: /public/images/evidence/tau_0pt16_swtcfit_root3.png
    title: Analytic sawtooth solution to a shear-flow stabilized Z-pinch plasma
    caption: The shear-flow stabilized property of the equilibrium is strongly satisfied in an arbitrarily small pinch radius so the highly turbulent environment of a real experiment, like the 2009 Zap experiments into shear-flow stabilized Z-pinch dynamics, provides a convenient test for whether this can be meaningfully applied to real world data. The solutions here are constructed by treating each cell as a separate physical problem whose roots are solved based on this idealized model.  
    credit: https://github.com/russellmatt66/Bennett-Vorticity/blob/main/cubic/zap_2009/zap2009_sawtoothchain.py
---

## Exhibit notes

**CONTENT PLACEHOLDER** — Add Zap sawtooth, MAST, DIII-D, and BELLA comparisons. Present original data, fitted curves, uncertainties, parameter selection, and error metrics with source citations.

## Edge Pedestal

## Air Plasma Streamer Head

## Laser-driven Shock in a Water Microjet

## Zap Shear-flow Stabilized Z-pinch Plasmas

## Sources
[MAST edge pedestal](https://doi.org/10.1088/1361-6587/acd478)

[DIII-D edge pedestal](https://doi.org/10.13182/FST05-A1044)

[Air plasma streamer head](https://arxiv.org/abs/2106.00409)

[Laser-driven shock in a water microjet]()

[Zap 2001]()

[Zap 2009]()
