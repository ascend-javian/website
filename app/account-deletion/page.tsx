import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Account & Data Deletion | Ascend Jvian',
  description:
    'How to request deletion of an Ascend Jvian account and personal data.',
};

export default function AccountDeletion() {
  return (
    <>
      <a className="skip" href="#deletion-main">
        Skip to content
      </a>
      <Header />
      <main id="deletion-main" className="wrap policy-shell">
        <div className="policy-intro">
          <span className="eyebrow">YOUR PRIVACY CHOICES</span>
          <h1>Account &amp; Data Deletion</h1>
          <p>
            You may request deletion of your Ascend Jvian account and associated
            personal data.
          </p>
        </div>
        <div className="policy-content">
          <section>
            <h2>How to submit a request</h2>
            <ol>
              <li>
                Call{' '}
                <a className="policy-action" href="tel:+60388893425">
                  +603-8889 3425
                </a>{' '}
                from Monday–Friday, 8.00am–8.00pm; or
              </li>
              <li>
                Write to ASCEND JVIAN SDN. BHD., No. 3, Jalan Bangsar, KL Eco
                City, 59200 W.P. Kuala Lumpur, Malaysia.
              </li>
            </ol>
            <p>
              Include your name, registered mobile number and a clear request to
              delete your account. Do not send your password, PIN or one-time
              password.
            </p>
            <p>
              If the app offers account creation, an account deletion option
              will also be made available from within the app.
            </p>
          </section>
          <section>
            <h2>What happens next</h2>
            <p>
              We verify that the request comes from the account holder, review
              outstanding transactions or obligations, close the account where
              permitted, and delete or anonymise personal data that is no longer
              required. We will provide the request status and confirm the
              outcome through an appropriate contact channel.
            </p>
          </section>
          <section>
            <h2>What is deleted</h2>
            <p>
              Subject to legal and operational requirements, deletion covers
              account profile information, preferences and service records that
              are no longer needed to provide a service, resolve an issue or
              comply with law.
            </p>
          </section>
          <section>
            <h2>Information we may need to retain</h2>
            <p>
              Some records may be retained for periods required by applicable
              financial, anti-money-laundering, identity-verification, tax,
              accounting, fraud-prevention, dispute-resolution or other legal
              and regulatory obligations. Retained information is restricted to
              those purposes and deleted or anonymised when the applicable
              period ends.
            </p>
          </section>
          <section>
            <h2>Need help?</h2>
            <p>
              Visit{' '}
              <a className="policy-action" href="./support.html">
                Ascend Jvian Support
              </a>{' '}
              or read our{' '}
              <a className="policy-action" href="./privacy.html">
                Privacy Policy
              </a>
              .
            </p>
          </section>
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
