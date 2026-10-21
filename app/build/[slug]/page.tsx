import Link from "next/link";
import { notFound } from "next/navigation";
import { LabNavigation } from "../../components/lab-view";
import { SiteFooter } from "../../components/site-footer";
import { builds } from "../../content/builds";

export function generateStaticParams() {
  return builds.map((build) => ({ slug: build.slug }));
}

export default async function BuildPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const build = builds.find((item) => item.slug === slug);

  if (!build) {
    notFound();
  }

  return (
    <div className="site-shell build-page">
      <header className="site-header">
        <Link className="wordmark" href="/#home" aria-label="Technoelogy home">
          Technoelogy<span aria-hidden="true">.</span>
        </Link>
        <LabNavigation />
      </header>

      <main className="build-detail-main">
        <header className="build-detail-hero">
          <p className="eyebrow">Build record</p>
          <h1>{build.title}</h1>
          <p className="build-status">
            <span>Status</span>
            <strong>{build.status}</strong>
          </p>
          <p className="build-detail-intro">
            This build is in the problem stage. Its approach and implementation
            will take shape through discovery.
          </p>
        </header>

        <div className="build-detail-sections">
          <section className="detail-section" aria-labelledby="problem-heading">
            <p className="detail-marker">01 / Problem</p>
            <div>
              <h2 id="problem-heading">The problem</h2>
              <p>{build.problem}</p>
            </div>
          </section>

          {build.context.trim() && (
            <section className="detail-section" aria-labelledby="context-heading">
              <p className="detail-marker">02 / Context</p>
              <div>
                <h2 id="context-heading">Context</h2>
                <p>{build.context}</p>
              </div>
            </section>
          )}

          {build.hypothesis.trim() && (
            <section className="detail-section" aria-labelledby="hypothesis-heading">
              <p className="detail-marker">03 / Hypothesis</p>
              <div>
                <h2 id="hypothesis-heading">Hypothesis</h2>
                <p>{build.hypothesis}</p>
              </div>
            </section>
          )}

          {build.questions.length > 0 && (
            <section className="detail-section" aria-labelledby="questions-heading">
              <p className="detail-marker">04 / Questions</p>
              <div>
                <h2 id="questions-heading">What we&apos;re trying to understand</h2>
                <ul>
                  {build.questions.map((question) => (
                    <li key={question}>{question}</li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {build.constraints.length > 0 && (
            <section className="detail-section" aria-labelledby="constraints-heading">
              <p className="detail-marker">05 / Constraints</p>
              <div>
                <h2 id="constraints-heading">Constraints</h2>
                <ul>
                  {build.constraints.map((constraint) => (
                    <li key={constraint}>{constraint}</li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {build.solutionApproach.length > 0 && (
            <section className="detail-section" aria-labelledby="approach-heading">
              <p className="detail-marker">06 / Approach</p>
              <div>
                <h2 id="approach-heading">Solution approach</h2>
                <ul>
                  {build.solutionApproach.map((approach) => (
                    <li key={approach}>{approach}</li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {build.technologySelected.length > 0 && (
            <section className="detail-section" aria-labelledby="technology-heading">
              <p className="detail-marker">07 / Technology</p>
              <div>
                <h2 id="technology-heading">Technology selected</h2>
                <ul>
                  {build.technologySelected.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {build.whatWasBuilt.trim() && (
            <section className="detail-section" aria-labelledby="built-heading">
              <p className="detail-marker">08 / Built</p>
              <div>
                <h2 id="built-heading">What was built</h2>
                <p>{build.whatWasBuilt}</p>
              </div>
            </section>
          )}

          {build.evidence.length > 0 && (
            <section className="detail-section" aria-labelledby="evidence-heading">
              <p className="detail-marker">09 / Evidence</p>
              <div>
                <h2 id="evidence-heading">Evidence / results</h2>
                <ul>
                  {build.evidence.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {build.learning.trim() && (
            <section className="detail-section" aria-labelledby="learning-heading">
              <p className="detail-marker">10 / Learning</p>
              <div>
                <h2 id="learning-heading">Learning</h2>
                <p>{build.learning}</p>
              </div>
            </section>
          )}

          {build.nextStep.trim() && (
            <section className="detail-section next-step" aria-labelledby="next-step-heading">
              <p className="detail-marker">11 / Next step</p>
              <div>
                <h2 id="next-step-heading">Next step</h2>
                <p>{build.nextStep}</p>
              </div>
            </section>
          )}
        </div>

        <Link className="back-link bottom-back-link" href="/building">
          <span aria-hidden="true">←</span> Back to Building
        </Link>
      </main>

      <SiteFooter />
    </div>
  );
}
