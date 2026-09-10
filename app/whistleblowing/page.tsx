import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = { title: 'Whistleblowing Policy | Ascend Jvian', description: 'Ascend Jvian whistleblowing policy and reporting guidance.' };

const sections: [string, ReactNode][] = [
  ['1. Purpose', <p key="purpose">Ascend Jvian is committed to conducting business with integrity. This policy provides a safe way for employees, directors, contractors, suppliers, customers and other stakeholders to raise concerns about suspected wrongdoing connected with the company.</p>],
  ['2. Concerns that may be reported', <><p>Reports may concern fraud, theft, bribery, corruption, conflicts of interest, misuse of company assets, falsification of records, serious breaches of law or company policy, threats to health or safety, retaliation, or deliberate concealment of wrongdoing.</p><p>Personal employment grievances should normally be raised through the appropriate management or human resources process unless they also involve misconduct covered by this policy.</p></>],
  ['3. How to make a report', <><p>You may submit a report by telephone or in writing. Provide the facts, people involved, relevant dates and any supporting material available to you. Reports may be sent to Ascend Jvian at the address below or raised by telephone.</p><div className="policy-contact"><strong>ASCEND JVIAN SDN. BHD.</strong><span>No. 3, Jalan Bangsar, KL Eco City, 59200 W.P. Kuala Lumpur, Malaysia</span><a href="tel:+60388893425">+603-8889 3425</a></div></>],
  ['4. Confidentiality and anonymous reports', <p key="confidentiality">We will handle reports as confidentially as reasonably possible, subject to a fair investigation and applicable law. Anonymous reports will be considered, although limited information may make investigation more difficult.</p>],
  ['5. Protection from retaliation', <p key="protection">A person who raises a concern honestly and in good faith must not be dismissed, disadvantaged, threatened or otherwise retaliated against for making the report. Knowingly false or malicious allegations may result in appropriate action.</p>],
  ['6. Review and investigation', <p key="investigation">Reports will be assessed promptly and referred to an appropriate independent reviewer where necessary. Investigations will be fair, objective and proportionate. Corrective, disciplinary or legal action may follow where a concern is substantiated.</p>],
  ['7. Records and policy review', <p key="records">The company will keep appropriate confidential records of reports and outcomes and will review this policy periodically. This policy may be updated when reporting channels or legal requirements change.</p>],
];

export default function Whistleblowing(){return <PolicyPage eyebrow="SPEAK UP WITH CONFIDENCE" title="Whistleblowing Policy" sections={sections}/>}

function PolicyPage({eyebrow,title,sections}:{eyebrow:string;title:string;sections:[string,ReactNode][]}){return <><header className="wrap header privacy-header"><a href="./" className="brand"><span className="mark">aj<span>↗</span></span><span>ascend<b>jvian</b></span></a><a className="back-link" href="./">← Back to home</a></header><main className="wrap policy-shell"><div className="policy-intro"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1></div><div className="policy-content">{sections.map(([heading,content])=><section key={heading}><h2>{heading}</h2>{content}</section>)}</div></main><PolicyFooter/></>}

function PolicyFooter(){return <footer><div className="wrap policy-footer-links"><a href="./privacy.html">Privacy Policy</a><a href="./whistleblowing.html">Whistleblowing Policy</a><a href="./anti-bribery.html">Anti-Bribery &amp; Corruption Policy</a></div><div className="wrap footer-bottom"><span>Copyright ©{new Date().getFullYear()} ASCEND JVIAN SDN. BHD. — Company No. 202601020555 (1682652-X)</span><span>All rights reserved.</span></div></footer>}
