import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use | Ascend Jvian',
  description:
    'Terms governing access to Ascend Jvian websites, applications and services.',
};

const sections = [
  [
    '1. Acceptance and scope',
    <p>
      These Terms govern your access to Ascend Jvian websites, applications and
      services. By using an available service, you agree to these Terms and any
      service-specific terms shown before you proceed.
    </p>,
  ],
  [
    '2. Eligibility and accounts',
    <p>
      You must provide accurate information, keep your credentials secure and
      notify us promptly of suspected unauthorised access. Eligibility, identity
      checks and age requirements may differ by service.
    </p>,
  ],
  [
    '3. Services and availability',
    <p>
      Features may be introduced, changed, suspended or limited by location,
      eligibility, partner availability or law. A description on this website
      does not guarantee that a service is currently available to every user.
    </p>,
  ],
  [
    '4. Financial and regulated services',
    <p>
      Where applicable, e-wallet, financing, instalment, earned wage access,
      wealth or other regulated services are provided by appropriately licensed
      or regulated third-party providers, including Anchor Capital Sdn Bhd for
      applicable financial services. The provider identity, eligibility rules,
      fees and applicable terms will be shown before you apply for or use the
      service. Ascend Jvian does not guarantee approval, returns or
      availability.
    </p>,
  ],
  [
    '5. Payments, fees and refunds',
    <p>
      Prices, fees, payment methods, billing terms and refund rules are shown in
      the relevant service flow or partner terms. You authorise applicable
      charges when you confirm a transaction.
    </p>,
  ],
  [
    '6. Acceptable use',
    <p>
      You must not misuse the services, commit fraud, interfere with security or
      systems, violate another person’s rights, submit unlawful content, or use
      the services contrary to applicable law.
    </p>,
  ],
  [
    '7. Third-party services',
    <p>
      Some services are supplied by merchants, mobility operators, financial
      institutions and other partners. Their additional terms and privacy
      notices may apply, and they are responsible for the services they provide.
    </p>,
  ],
  [
    '8. Intellectual property',
    <p>
      Ascend Jvian and its licensors retain their rights in the website,
      application, brand, software and content. You receive only the limited
      right to use available services in accordance with these Terms.
    </p>,
  ],
  [
    '9. Suspension and termination',
    <p>
      Access may be restricted or ended where reasonably necessary to protect
      users, prevent misuse, comply with law, manage risk or enforce applicable
      terms. You may request account deletion through our Account &amp; Data
      Deletion page.
    </p>,
  ],
  [
    '10. Liability',
    <p>
      To the extent permitted by law, liability is limited to loss directly
      caused by a breach of an applicable legal duty. Nothing in these Terms
      excludes rights or liabilities that cannot lawfully be excluded.
    </p>,
  ],
  [
    '11. Privacy',
    <p>
      Our Privacy Policy explains how personal data is handled and how you can
      exercise your privacy rights.
    </p>,
  ],
  [
    '12. Governing law and changes',
    <p>
      These Terms are governed by the laws of Malaysia. We may update them when
      services or legal requirements change and will publish the updated version
      with a new effective date.
    </p>,
  ],
];

export default function Terms() {
  return (
    <>
      <a className="skip" href="#terms-main">
        Skip to terms
      </a>
      <Header />
      <main id="terms-main" className="wrap policy-shell">
        <div className="policy-intro">
          <span className="eyebrow">ASCEND JVIAN SERVICES</span>
          <h1>Terms of Use</h1>
          <p>Effective date: 11 September 2026</p>
        </div>
        <div className="policy-content">
          {sections.map(([title, content]) => (
            <section key={String(title)}>
              <h2>{title}</h2>
              {content}
              {title === '9. Suspension and termination' && (
                <p>
                  <a className="policy-action" href="./account-deletion.html">
                    Account &amp; Data Deletion →
                  </a>
                </p>
              )}
              {title === '11. Privacy' && (
                <p>
                  <a className="policy-action" href="./privacy.html">
                    Privacy Policy →
                  </a>
                </p>
              )}
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
