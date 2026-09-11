import type { Metadata } from 'next';
import { Clock3, HelpCircle, MapPin, Phone, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'App Support | Ascend Jvian',
  description: 'Support and contact information for the Ascend Jvian app.',
};

const faqs = [
  [
    'Account and login',
    'For access or verification issues, call our support line. Never share your password, PIN or one-time password with anyone.',
  ],
  [
    'Payments and e-wallet',
    'Keep the transaction reference and time available when reporting a payment or wallet issue.',
  ],
  [
    'Orders and services',
    'For an order, ticket, delivery or mobility issue, have the relevant booking or order reference ready.',
  ],
  [
    'Privacy',
    'Read how we handle personal data and how to exercise your privacy rights in our Privacy Policy.',
  ],
];

export default function Support() {
  return (
    <>
      <a className="skip" href="#support-main">
        Skip to content
      </a>
      <Header />
      <main id="support-main">
        <section className="subpage-hero contact-hero">
          <div className="wrap">
            <span className="eyebrow">APP HELP &amp; SUPPORT</span>
            <h1>How can we help?</h1>
            <p>
              Contact Ascend Jvian about account access, payments, orders, app
              services or general feedback.
            </p>
          </div>
        </section>
        <section className="wrap support-grid">
          <article className="support-primary">
            <div className="contact-icon">
              <Phone size={27} />
            </div>
            <span>Call our support line</span>
            <h2>
              <a className="phone-link" href="tel:+60388893425">
                +603-8889 3425
              </a>
            </h2>
            <p>Monday–Friday, 8.00am–8.00pm</p>
          </article>
          <article>
            <Clock3 size={25} />
            <h2>Office hours</h2>
            <p>
              Monday–Friday, working days only
              <br />
              9.00am–5.00pm
            </p>
          </article>
          <article>
            <MapPin size={25} />
            <h2>Write to us</h2>
            <address>
              No. 3, Jalan Bangsar, KL Eco City, 59200 W.P. Kuala Lumpur,
              Malaysia
            </address>
          </article>
        </section>
        <section className="wrap faq-section">
          <span className="eyebrow">FREQUENTLY ASKED QUESTIONS</span>
          <h2>Find the right next step.</h2>
          <div className="faq-grid">
            {faqs.map(([title, answer]) => (
              <article key={title}>
                <HelpCircle size={23} />
                <h3>{title}</h3>
                <p>{answer}</p>
                {title === 'Privacy' && (
                  <a href="./privacy.html">View Privacy Policy →</a>
                )}
              </article>
            ))}
            <article>
              <ShieldCheck size={23} />
              <h3>Delete an account</h3>
              <p>
                Learn how to request deletion of your account and personal data.
              </p>
              <a href="./account-deletion.html">View deletion options →</a>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="wrap header privacy-header">
      <a href="./" className="brand" aria-label="Ascend Jvian home">
        <span className="mark">aj</span>
        <span>
          ascend<b>jvian</b>
        </span>
      </a>
      <nav aria-label="Main navigation">
        <a href="./">Home</a>
        <a href="./about.html">About Us</a>
        <a href="./support.html" aria-current="page">
          Support
        </a>
        <a className="nav-cta" href="./contact.html">
          Contact Us
        </a>
      </nav>
    </header>
  );
}
function Footer() {
  return (
    <footer>
      <div className="wrap footer-top">
        <a href="./" className="brand">
          <span className="mark">aj</span>
          <span>
            ascend<b>jvian</b>
          </span>
        </a>
        <div className="company-details">
          <strong>ASCEND JVIAN SDN. BHD.</strong>
          <span>202601020555 (1682652-X)</span>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>
          Copyright ©{new Date().getFullYear()} ASCEND JVIAN SDN. BHD. — Company
          No. 202601020555 (1682652-X)
        </span>
        <span>All rights reserved.</span>
      </div>
    </footer>
  );
}
