import { LabView } from "../components/lab-view";
import { builds } from "../content/builds";

const buildingStatuses = new Set([
  "problem",
  "experiment",
  "prototype",
  "building",
  "beta",
]);

export default function BuildingPage() {
  const activeBuilds = builds.filter((build) =>
    buildingStatuses.has(build.status),
  );

  return (
    <LabView
      title="Currently Building"
      currentPath="/building"
      builds={activeBuilds}
      emptyMessage="No active Lab builds yet."
    />
  );
}
