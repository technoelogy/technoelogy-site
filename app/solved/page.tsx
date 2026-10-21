import { LabView } from "../components/lab-view";
import { builds } from "../content/builds";

const solvedStatuses = new Set(["released", "product"]);

export default function SolvedPage() {
  const solvedBuilds = builds.filter((build) => solvedStatuses.has(build.status));

  return (
    <LabView
      title="Problems Solved"
      currentPath="/solved"
      builds={solvedBuilds}
      emptyMessage="No solved builds yet."
    />
  );
}
