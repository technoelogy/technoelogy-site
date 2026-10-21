import type { Metadata } from "next";
import { LegalPage } from "../components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy | Technoelogy",
  description:
    "A preliminary draft explaining how Technoelogy handles information shared through its website contact links.",
};

const CONTACT_EMAIL = "noelgtesla@gmail.com";

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="21 October 2026">
      <p>
        This is a preliminary draft for the Technoelogy website, not legal
        certification or a guarantee of compliance. It describes the website
        functionality verified in the project code. The site owner should
        review and complete the marked items before treating this as final.
      </p>

      <h2>Who operates this site</h2>
      <p>
        This website is presented as Technoelogy. The legal name and contact
        address of the person or entity operating it have not been provided.
        <strong> TODO: add the operator&apos;s legal name and a suitable postal
        address.</strong>
      </p>
      <p>
        For privacy questions, contact{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>Information you choose to share</h2>
      <p>
        The website has no contact form. Its contact pop-up links to Outlook and
        Gmail email composition, a WhatsApp conversation, and a Google Calendar
        page. If you use these services, you may share your name, contact
        details, business challenge, messages, and any information you include
        in your communication or appointment activity.
      </p>
      <p>
        The website itself does not provide a form or database for collecting
        these messages. Email, WhatsApp, and Google Calendar are operated by
        their respective providers, and their own privacy terms apply when you
        use them. The project uses Next.js&apos;s font integration for Geist; it
        does not add a separate analytics or tracking integration.
      </p>

      <h2>How information may be used</h2>
      <p>
        Information you send may be used to respond to your inquiry, understand
        the business challenge you describe, and coordinate a conversation or
        appointment. Do not include sensitive or confidential information
        unless you have agreed with Technoelogy on an appropriate way to share
        it.
      </p>

      <h2>Analytics, cookies, and site data</h2>
      <p>
        No Google Analytics, Google Tag Manager, cookie banner, tracking pixel,
        contact form, or browser storage use was found in the application code
        during this review. This statement is limited to the code inspected;
        hosting or infrastructure may process technical request information.
        <strong> TODO: confirm hosting-level logs and any operational tools
        before publication.</strong>
      </p>

      <h2>Retention and security</h2>
      <p>
        No fixed retention period or specific security process is established
        in the project. Email, WhatsApp, and Calendar providers may retain
        information under their own policies. <strong> TODO: document how
        Technoelogy handles and retains copies of inquiries, and describe any
        security practices that are actually in place.</strong>
      </p>

      <h2>Your choices and requests</h2>
      <p>
        You can choose whether to contact Technoelogy and what information to
        include. You may email the address above to ask a privacy question or
        request access to, correction of, or deletion of information you have
        shared. The response and any rights available depend on applicable law
        and on information held by the relevant service providers.
      </p>

      <h2>Updates to this policy</h2>
      <p>
        Updates will be published on this page with a revised date. No separate
        notification process is currently specified.
      </p>
    </LegalPage>
  );
}
