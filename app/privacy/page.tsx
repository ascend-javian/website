import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Ascend Jvian',
  description: 'How Ascend Jvian handles personal data.',
};

const sections = [
  [
    '1. Scope of this policy',
    <p>
      This Privacy Policy explains how ASCEND JVIAN SDN. BHD. (“Ascend Jvian”,
      “we”, “us” or “our”) collects, uses, discloses, retains and protects
      personal data when you visit our website, create an account or use an
      available Ascend Jvian service. Additional notices shown within a service
      form part of this policy.
    </p>,
  ],
  [
    '2. Personal data we collect',
    <>
      <p>
        The information we collect depends on the services and features you use.
        It includes, where relevant:
      </p>
      <ul>
        <li>identity, profile and contact information;</li>
        <li>account, security and identity-verification records;</li>
        <li>
          transaction, payment, financing and fraud-prevention information;
        </li>
        <li>
          employment and income information for Earned Wage Access, financing or
          eligibility checks;
        </li>
        <li>
          vehicle, mobility and location information for location-based
          services;
        </li>
        <li>purchase, ticketing, content, rewards and support activity; and</li>
        <li>
          technical information such as IP address, device identifiers, app
          version and diagnostic logs.
        </li>
      </ul>
    </>,
  ],
  [
    '3. How we collect personal data',
    <>
      <p>
        We collect personal data directly from you, automatically from your
        device when you use our services, and from participating merchants,
        service providers and permitted third parties such as employers, payment
        providers, identity-verification providers, credit-reporting agencies
        and public sources.
      </p>
      <p>
        This marketing website has no account, payment or contact form. Its
        hosting provider processes basic technical logs needed to deliver and
        secure the site.
      </p>
    </>,
  ],
  [
    '4. How we use personal data',
    <p>
      We use personal data to provide and improve requested services; create and
      secure accounts; verify identity; process transactions; assess
      applications where permitted; prevent fraud and misuse; provide support;
      personalise features; operate rewards; meet legal and regulatory duties;
      protect users and systems; and send marketing communications where you
      have a choice or consent is required.
    </p>,
  ],
  [
    '5. When we disclose personal data',
    <>
      <p>
        We disclose personal data only as needed for the stated purposes to
        group companies, payment networks, financial institutions, merchants,
        operational partners, technology providers, professional advisers,
        regulators, courts, law-enforcement bodies and a lawful corporate
        successor.
      </p>
      <p>
        Service providers acting for us must protect personal data and use it
        only for authorised purposes. Regulated services are provided by
        appropriately licensed or regulated third-party providers where
        applicable, including Anchor Capital Sdn Bhd for applicable financial
        services, and their privacy notices may also apply.
      </p>
    </>,
  ],
  [
    '6. Cross-border transfers',
    <p>
      Where a service provider processes personal data outside Malaysia, we use
      safeguards required by applicable law and take reasonable steps to ensure
      an appropriate level of protection.
    </p>,
  ],
  [
    '7. Security and retention',
    <>
      <p>
        We use reasonable administrative, technical and physical safeguards
        appropriate to the sensitivity of the data. No transmission or storage
        method is completely secure.
      </p>
      <p>
        We retain personal data only for as long as needed for the stated
        purposes, legal, accounting and regulatory requirements, and dispute
        resolution. We delete or anonymise it when it is no longer required.
      </p>
    </>,
  ],
  [
    '8. Your choices and rights',
    <>
      <p>
        Subject to applicable law, you may request access or correction,
        withdraw consent, limit certain processing, object to direct marketing,
        and request account or data deletion. We may verify your identity, and
        lawful retention duties may limit a request.
      </p>
      <p>
        <a className="policy-action" href="./account-deletion.html">
          View Account &amp; Data Deletion options →
        </a>
      </p>
    </>,
  ],
  [
    '9. Children’s privacy',
    <p>
      Our services are not intended for children unless a specific service
      expressly permits their use with appropriate parent or guardian
      involvement. Additional notices and safeguards apply where a service is
      offered to children.
    </p>,
  ],
  [
    '10. Changes to this policy',
    <p>
      We update this policy when our services or legal obligations change. The
      revised version will be published here with an updated effective date,
      with additional notice where required.
    </p>,
  ],
  [
    '11. Contact us',
    <div className="policy-contact">
      <strong>ASCEND JVIAN SDN. BHD.</strong>
      <span>
        No. 3, Jalan Bangsar, KL Eco City, 59200 W.P. Kuala Lumpur, Malaysia
      </span>
      <a href="mailto:support@ascendjvian.com">support@ascendjvian.com</a>
      <a href="tel:+60388893425">+603-8889 3425</a>
      <span>Monday–Friday, 8.00am–8.00pm</span>
    </div>,
  ],
];

export default function PrivacyPolicy() {
  return (
    <>
      <a className="skip" href="#privacy-main">
        Skip to policy
      </a>
      <Header />
      <main id="privacy-main" className="wrap policy-shell">
        <div className="policy-intro">
          <span className="eyebrow">PRIVACY AT ASCEND JVIAN</span>
          <h1>Privacy Policy</h1>
          <p>Effective date: 11 September 2026</p>
        </div>
        <div className="policy-content">
          {sections.map(([title, content]) => (
            <section key={String(title)}>
              <h2>{title}</h2>
              {content}
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
function Header() {
  return (
    <header className="wrap header privacy-header">
      <a href="./" className="brand">
        <span className="mark">aj</span>
        <span>
          ascend<b>jvian</b>
        </span>
      </a>
      <nav>
        <a href="./">Home</a>
        <a href="./support.html">Support</a>
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
          Copyright ©{new Date().getFullYear()} ASCEND JVIAN SDN. BHD.
        </span>
        <span>All rights reserved.</span>
      </div>
    </footer>
  );
}
