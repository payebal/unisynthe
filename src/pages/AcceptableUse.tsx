import LegalPage, { H2, Ul } from "../components/LegalPage";

export default function AcceptableUse() {
  return (
    <LegalPage title="Acceptable Use Policy" updatedAt="March 1, 2026">
      <p>
        This Acceptable Use Policy ("AUP") applies to all users of the UniSynthe API platform.
        By using our Service, you agree to comply with this policy. Violations may result in
        immediate suspension or termination of your account.
      </p>

      <H2>1. General Principles</H2>
      <Ul>
        <li>Use the Service only for lawful purposes and in accordance with our Terms of Service.</li>
        <li>Ensure all messaging is consent-based and complies with applicable laws (TCPA, GDPR, CCPA).</li>
        <li>Maintain accurate records of end-user consent for all communications.</li>
        <li>Respond promptly to opt-out requests and abuse complaints.</li>
      </Ul>

      <H2>2. Prohibited Activities</H2>
      <p>The following activities are strictly prohibited:</p>

      <h3 className="font-semibold text-slate-800">2.1 Spam & Unsolicited Messaging</h3>
      <Ul>
        <li>Sending unsolicited bulk messages (SMS, voice, or any channel).</li>
        <li>Sending messages to recipients who have not provided explicit prior consent.</li>
        <li>Purchasing or using third-party contact lists for outbound messaging.</li>
        <li>Lead-generation messaging without documented consent from each recipient.</li>
      </Ul>

      <h3 className="font-semibold text-slate-800">2.2 Fraud & Deception</h3>
      <Ul>
        <li>Phishing — impersonating another organization to collect credentials or personal data.</li>
        <li>Smishing — SMS-based social engineering or credential harvesting.</li>
        <li>Spoofing sender identities, caller IDs, or origination numbers.</li>
        <li>Using the Service to facilitate financial fraud, identity theft, or scams.</li>
      </Ul>

      <h3 className="font-semibold text-slate-800">2.3 High-Risk & Prohibited Content</h3>
      <Ul>
        <li>Illegal controlled substances, firearms, or regulated goods.</li>
        <li>Gambling or lottery services (unless properly licensed and disclosed).</li>
        <li>Adult or sexually explicit content.</li>
        <li>Debt collection harassment or threats.</li>
        <li>Content that promotes violence, hate speech, or discrimination.</li>
        <li>Cryptocurrency/investment schemes or "get rich quick" promotions.</li>
      </Ul>

      <h3 className="font-semibold text-slate-800">2.4 Technical Abuse</h3>
      <Ul>
        <li>Attempting to bypass rate limits, authentication, or security controls.</li>
        <li>Using the geolocation API to track, surveil, or stalk individuals.</li>
        <li>Reverse-engineering, scraping, or redistributing our data or APIs.</li>
        <li>Interfering with the operation of the Service or other customers' use.</li>
      </Ul>

      <H2>3. Enforcement</H2>
      <Ul>
        <li>We monitor traffic for patterns consistent with abuse (high bounce rates, complaint rates, unusual volumes).</li>
        <li>First violation: warning and temporary rate-limiting.</li>
        <li>Repeated or severe violations: immediate account suspension without notice.</li>
        <li>We reserve the right to report illegal activity to law enforcement.</li>
      </Ul>

      <H2>4. Reporting Abuse</H2>
      <p>
        If you believe our platform is being used in violation of this policy, please report it to{" "}
        <a href="mailto:abuse@unisynthe.com" className="text-primary hover:underline">abuse@unisynthe.com</a>.
        We investigate all reports within 24 hours.
      </p>

      <p className="pt-4 font-medium text-slate-900">
        Contact:{" "}
        <a href="mailto:abuse@unisynthe.com" className="text-primary hover:underline">abuse@unisynthe.com</a>
      </p>
    </LegalPage>
  );
}
