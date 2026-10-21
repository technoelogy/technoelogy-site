import Link from "next/link";
import type { ReactNode } from "react";
import { LabNavigation } from "./lab-view";
import { SiteFooter } from "./site-footer";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="site-shell legal-page">
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Technoelogy home">
          Technoelogy<span aria-hidden="true">.</span>
        </Link>
        <LabNavigation />
      </header>
      <main className="legal-main">
        <header className="legal-heading">
          <p className="eyebrow">Technoelogy / Information</p>
          <h1>{title}</h1>
          <p className="legal-updated">Draft · Last updated {updated}</p>
        </header>
        <article className="legal-copy">{children}</article>
      </main>
      <SiteFooter />
    </div>
  );
}
