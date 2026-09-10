import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Anti-Bribery & Corruption Policy | Ascend Jvian', description: 'Ascend Jvian policy against bribery and corruption.' };

const sections = [
  ['1. Our commitment', <p key="commitment">Ascend Jvian has zero tolerance for bribery and corruption. We expect directors, employees and anyone acting for or on behalf of the company to conduct business honestly, fairly and in compliance with applicable Malaysian anti-corruption laws.</p>],
  ['2. Prohibited conduct', <><p>No person acting for Ascend Jvian may offer, promise, give, request or accept anything of value to improperly influence a decision, obtain an unfair advantage, reward improper conduct or misuse a position of trust.</p><p>This prohibition applies to dealings with public officials, customers, suppliers, business partners and private individuals. Facilitation payments and payments made through third parties are also prohibited.</p></>],
  ['3. Gifts, hospitality and expenses', <p key="gifts">Gifts, meals, entertainment, travel or hospitality must be reasonable, infrequent, transparent and connected to a legitimate business purpose. They must never be offered or accepted to influence a decision. Cash and cash-equivalent gifts are prohibited.</p>],
  ['4. Donations, sponsorships and political activity', <p key="donations">Charitable donations and sponsorships must be properly approved, documented and used only for legitimate purposes. Company funds or resources must not be used for political contributions unless specifically authorized and lawful.</p>],
  ['5. Third parties and business partners', <p key="third-parties">We will take proportionate steps to understand the integrity of agents, consultants, suppliers and other business partners. Payments must reflect legitimate services, follow written terms and be supported by accurate records.</p>],
  ['6. Books, records and controls', <p key="records">All transactions must be recorded accurately and completely. Undisclosed accounts, false descriptions, fabricated invoices and other attempts to conceal a payment or benefit are prohibited.</p>],
  ['7. Raising concerns', <><p>Anyone who suspects bribery, corruption or a breach of this policy should report the concern promptly under the Whistleblowing Policy. Reports made honestly and in good faith will be handled without retaliation.</p><p><a className="policy-action" href="./whistleblowing.html">Read the Whistleblowing Policy →</a></p></>],
  ['8. Responsibility and review', <p key="responsibility">Breaches may lead to disciplinary action, termination of a business relationship or referral to the relevant authorities. The company will review this policy periodically and improve its controls when needed.</p>],
];

export default function AntiBribery(){return <PolicyPage/>}

function PolicyPage(){return <><header className="wrap header privacy-header"><a href="./" className="brand"><span className="mark">aj<span>↗</span></span><span>ascend<b>jvian</b></span></a><a className="back-link" href="./">← Back to home</a></header><main className="wrap policy-shell"><div className="policy-intro"><span className="eyebrow">INTEGRITY IN EVERY DECISION</span><h1>Anti-Bribery &amp;<br/>Corruption Policy</h1></div><div className="policy-content">{sections.map(([heading,content])=><section key={heading as string}><h2>{heading}</h2>{content}</section>)}</div></main><PolicyFooter/></>}

function PolicyFooter(){return <footer><div className="wrap policy-footer-links"><a href="./privacy.html">Privacy Policy</a><a href="./whistleblowing.html">Whistleblowing Policy</a><a href="./anti-bribery.html">Anti-Bribery &amp; Corruption Policy</a></div><div className="wrap footer-bottom"><span>Copyright ©{new Date().getFullYear()} ASCEND JVIAN SDN. BHD. — Company No. 202601020555 (1682652-X)</span><span>All rights reserved.</span></div></footer>}
