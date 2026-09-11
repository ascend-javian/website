import type { Metadata } from 'next';
import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Ascend Jvian',
  description: 'Contact Ascend Jvian for company and general enquiries.',
};

export default function Contact() {
  return (
    <>
      <a className="skip" href="#contact-main">
        Skip to content
      </a>
      <header className="wrap header privacy-header">
        <a href="./" className="brand" aria-label="Ascend Jvian home">
          <span className="mark">
            aj<span>↗</span>
          </span>
          <span>
            ascend<b>jvian</b>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="./">Home</a>
          <a href="./about.html">About Us</a>
          <a href="./support.html">Support</a>
          <a className="nav-cta" href="./contact.html" aria-current="page">
            Contact Us <ArrowUpRight size={18} />
          </a>
        </nav>
      </header>
      <main id="contact-main">
        <section className="subpage-hero contact-hero">
          <div className="wrap">
            <h1>Let’s connect.</h1>
            <p>
              Find our company contact information and operating hours below.
            </p>
          </div>
        </section>
        <section className="wrap contact-grid">
          <article>
            <div className="contact-icon">
              <MapPin size={27} />
            </div>
            <span>Visit us</span>
            <h2>Business address</h2>
            <address>
              No. 3, Jalan Bangsar,
              <br />
              KL Eco City, 59200,
              <br />
              W.P. Kuala Lumpur, Malaysia
            </address>
          </article>
          <article>
            <div className="contact-icon">
              <Clock3 size={27} />
            </div>
            <span>Working hours</span>
            <h2>Office hours</h2>
            <p>
              <strong>Monday–Friday</strong>
              <br />
              Working days only
              <br />
              9.00am–5.00pm
            </p>
          </article>
          <article>
            <div className="contact-icon">
              <Phone size={27} />
            </div>
            <span>Call us</span>
            <h2>Phone number</h2>
            <p>
              <a className="phone-link" href="tel:+60388893425">
                +603-8889 3425
              </a>
              <br />
              <small>Monday–Friday, 8.00am–8.00pm</small>
            </p>
          </article>
          <article>
            <div className="contact-icon">
              <Mail size={27} />
            </div>
            <span>Email us</span>
            <h2>Customer support</h2>
            <p>
              <a className="email-link" href="mailto:support@ascendjvian.com">
                support@ascendjvian.com
              </a>
            </p>
          </article>
        </section>
        <section className="wrap contact-note">
          <strong>ASCEND JVIAN SDN. BHD.</strong>
          <span>Company No. 202601020555 (1682652-X)</span>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function SiteFooter() {
  return (
    <footer>
      <div className="wrap footer-top">
        <a href="./" className="brand">
          <span className="mark">
            aj<span>↗</span>
          </span>
          <span>
            ascend<b>jvian</b>
          </span>
        </a>
        <div className="company-details">
          <strong>ASCEND JVIAN SDN. BHD.</strong>
          <span>202601020555 (1682652-X)</span>
        </div>
        <div className="footer-links">
          <a href="./about.html">About Us</a>
          <a href="./contact.html">Contact Us</a>
          <a href="./privacy.html">Privacy Policy</a>
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
