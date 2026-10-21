import Link from "next/link";

const CONTACT_EMAIL = "noelgtesla@gmail.com";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link className="wordmark" href="/" aria-label="Technoelogy home">
        Technoelogy<span aria-hidden="true">.</span>
      </Link>
      <p>Ideas become systems.</p>
      <nav className="site-footer-links" aria-label="Legal and contact">
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms of Use</Link>
        <a href={`mailto:${CONTACT_EMAIL}`}>Contact</a>
      </nav>
      <Link className="site-footer-home" href="/">
        Home ↑
      </Link>
    </footer>
  );
}
