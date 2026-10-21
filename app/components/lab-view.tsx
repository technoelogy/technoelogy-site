import Link from "next/link";
import type { BuildRecord } from "../content/builds";
import { SiteFooter } from "./site-footer";

const labViews = [
  { path: "/problems", href: "/building", label: "Problems" },
  { path: "/building", href: "/building", label: "Building" },
  { path: "/solved", href: "/building", label: "Solved" },
] as const;

type LabViewPath = (typeof labViews)[number]["path"];

export function LabNavigation({ currentPath }: { currentPath?: LabViewPath }) {
  return (
    <nav aria-label="Lab navigation">
      <ul className="nav-list">
        {labViews.map((view) => (
          <li key={view.label}>
            <Link
              href={view.href}
              aria-current={currentPath === view.path ? "page" : undefined}
            >
              {view.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function LabView({
  title,
  currentPath,
  builds,
  emptyMessage,
}: {
  title: string;
  currentPath: LabViewPath;
  builds: BuildRecord[];
  emptyMessage: string;
}) {
  return (
    <div className="site-shell lab-page">
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Technoelogy home">
          Technoelogy<span aria-hidden="true">.</span>
        </Link>
        <LabNavigation currentPath={currentPath} />
      </header>

      <main className="lab-view-main">
        <header className="lab-view-heading">
          <p className="eyebrow">Technoelogy / Lab</p>
          <h1>{title}</h1>
        </header>

        {builds.length > 0 ? (
          <ul className="build-records lab-build-list">
            {builds.map((build) => (
              <li key={build.slug}>
                <article className="build-record">
                  <p className="lab-build-status">{build.status}</p>
                  <h2>
                    <Link href={`/build/${build.slug}`}>{build.title}</Link>
                  </h2>
                  <p>{build.problem}</p>
                </article>
              </li>
            ))}
          </ul>
        ) : (
          <p className="lab-empty-state">{emptyMessage}</p>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
