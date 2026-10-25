// Canonical order of the flow, used for the progress bar and back/next routing.
// Branches (non-smoker skip, smoker full path) are handled in-page via navigate(),
// this list is just for displaying "step x of y".
export const STEP_PATHS = [
  "/profile/basic",
  "/profile/location",
  "/profile/demo",
  "/smoker/gate",
  "/survey/origin",
  "/survey/usage",
  "/survey/spend",
  "/dependence/1",
  "/dependence/2",
  "/readiness",
  "/result",
];

export function progressFor(pathname: string) {
  const idx = STEP_PATHS.indexOf(pathname);
  if (idx === -1) return 0;
  return Math.round((idx / (STEP_PATHS.length - 1)) * 100);
}
