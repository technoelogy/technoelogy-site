"use client";

import { useRef } from "react";
import { LabNavigation } from "./components/lab-view";
import { SiteFooter } from "./components/site-footer";

// Replace these placeholders with the real contact details and booking URL.
const CONTACT_EMAIL = "noelgtesla@gmail.com";
const WHATSAPP_PHONE = "919930824773";
const WHATSAPP_MESSAGE = "Hi Technoelogy, I'd like to discuss a business challenge.";
const APPOINTMENT_URL = "https://calendar.google.com/calendar/u/0/r";

export default function Home() {
  const contactDialog = useRef<HTMLDialogElement>(null);

  return (
    <div className="home-page" id="home">
      <main className="site-shell">
        <section className="hero-panel" aria-labelledby="hero-heading">
          <header className="site-header">
            <a className="wordmark" href="#home" aria-label="Technoelogy home">
              technoelogy
            </a>
            <p className="hero-signature">
              IDEAS <span aria-hidden="true">→</span> SYSTEMS
            </p>
          </header>

          <section className="hero">
            <p className="eyebrow hero-context">
              Built from inside Consumer Health, OTC, and pharma marketing
            </p>
            <h1 id="hero-heading">
              What problem are
              <br />
              <em>we trying to solve?</em>
            </h1>
            <div className="hero-bottom">
              <p className="hero-description">
                Bring us your business challenge. Let&apos;s build a practical
                solution that moves your business forward.
              </p>
              <div className="hero-actions">
                <button
                  className="button button-primary"
                  type="button"
                  aria-haspopup="dialog"
                  onClick={() => contactDialog.current?.showModal()}
                >
                  Tell us your problem <span aria-hidden="true">↗</span>
                </button>
                <a className="button button-quiet" href="/building">
                  Explore voice agents
                </a>
              </div>
            </div>
            <div className="hero-panel-footer">
              AI × DATA × AUTOMATION × SOFTWARE
            </div>
          </section>
        </section>

        <div className="home-navigation">
          <LabNavigation />
        </div>
      </main>

      <SiteFooter />

      <dialog
        className="contact-dialog"
        ref={contactDialog}
        aria-labelledby="contact-dialog-title"
      >
        <div className="contact-dialog-card">
          <div className="contact-dialog-heading">
            <div>
              <p className="contact-dialog-kicker">Start a conversation</p>
              <h2 id="contact-dialog-title">Build with Technoelogy.</h2>
            </div>
            <button
              className="dialog-close"
              type="button"
              onClick={() => contactDialog.current?.close()}
              aria-label="Close contact options"
            >
              ×
            </button>
          </div>
          <div className="contact-options">
            <a
              href={`https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(CONTACT_EMAIL)}`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-option-copy">
                <strong>Outlook</strong>
                <small>Email us your business challenge.</small>
              </span>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-option-copy">
                <strong>Gmail</strong>
                <small>Email us your business challenge.</small>
              </span>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-option-copy">
                <strong>Reach out to Technoelogy</strong>
                <small>Connect with us for your business challenge.</small>
              </span>
              <span aria-hidden="true">↗</span>
            </a>
            <a href={APPOINTMENT_URL} target="_blank" rel="noreferrer">
              <span className="contact-option-copy">
                <strong>Book a discovery call.</strong>
                <small>Discuss a business challenge.</small>
              </span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </dialog>
    </div>
  );
}
