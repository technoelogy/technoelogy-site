import type { Metadata } from "next";
import { LegalPage } from "../components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Use | Technoelogy",
  description:
    "Preliminary terms for using the Technoelogy website, content, experiments, and demonstrations.",
};

const CONTACT_EMAIL = "noelgtesla@gmail.com";

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="21 October 2026">
      <p>
        These terms are a preliminary draft for the Technoelogy website. They
        are not legal certification or a guarantee of compliance and should be
        reviewed by the site operator before final publication.
      </p>

      <h2>Using the website</h2>
      <p>
        You may browse this website and use its links for lawful purposes. Do
        not interfere with the website, attempt unauthorized access, or use it
        in a way that disrupts other visitors or services.
      </p>

      <h2>Content and ownership</h2>
      <p>
        Unless stated otherwise, the Technoelogy name and branding, website
        design, original writing, software, and other materials are owned by or
        used with permission by their respective rights holders. You may view
        the content and share links to it. Other reproduction or commercial use
        requires permission unless applicable law allows it.
      </p>
      <p>
        Contacting Technoelogy or describing an idea does not transfer
        ownership of your idea or other material to Technoelogy. Please avoid
        sending confidential material through ordinary email or messaging
        unless an appropriate arrangement has been made.
      </p>

      <h2>Experiments and demonstrations</h2>
      <p>
        Build records, experiments, prototypes, and demonstrations may be
        exploratory, incomplete, or subject to change. Their appearance on this
        site does not by itself mean that a product or service is generally
        available or suitable for a particular purpose.
      </p>

      <h2>Accuracy and availability</h2>
      <p>
        We aim to keep website information useful and current, but content may
        change and may contain omissions. The site or individual pages may
        occasionally be unavailable. If you spot an issue, please let us know.
      </p>

      <h2>External services</h2>
      <p>
        Contact and appointment links open services provided by third parties,
        including Outlook, Gmail, WhatsApp, and Google Calendar. Those services
        have their own terms and privacy practices; Technoelogy does not control
        their operation.
      </p>

      <h2>Questions</h2>
      <p>
        For questions about these terms, email{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. The legal name
        and postal address of the website operator have not been provided.
        <strong> TODO: add the operator&apos;s legal name and suitable address,
        and confirm any applicable governing-law terms before publication.</strong>
      </p>
    </LegalPage>
  );
}
