import { LabView } from "../components/lab-view";
import { builds } from "../content/builds";

export default function ProblemsPage() {
  const problemBuilds = builds.filter((build) => build.status === "problem");

  return (
    <LabView
      title="Problems Worth Solving"
      currentPath="/problems"
      builds={problemBuilds}
      emptyMessage="No problems are listed here yet."
    />
  );
}
