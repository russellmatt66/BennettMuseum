/** Illustrative normalized Bennett vortex flow. Replace/extend with vetted model equations. */
export function velocity(r, C = 1, u0 = 1) {
  return u0 * r * r / ((r + C) ** 2);
}
export function shear(r, C = 1, u0 = 1) {
  return 2 * u0 * C * r / ((r + C) ** 3);
}
export function sampleProfiles(C = 1, u0 = 1, rMax = 6, n = 180) {
  return Array.from({ length: n + 1 }, (_, i) => {
    const r = rMax * i / n;
    return { r, velocity: velocity(r, C, u0), shear: shear(r, C, u0) };
  });
}
