import LegalPage, { H2, Ul } from "../components/LegalPage";

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updatedAt="March 1, 2026">
      <p>
        UniSynthe Inc. ("UniSynthe", "we", "us", "our") operates the website unisynthe.com
        and the UniSynthe API platform (collectively, the "Service"). This Privacy Policy explains
        how we collect, use, disclose, and protect your information.
      </p>

      <H2>1. Data Controller</H2>
      <p>
        UniSynthe Inc. is the data controller for the personal data processed through our Service.
        For privacy inquiries, contact{" "}
        <a href="mailto:compliance@unisynthe.com" className="text-primary hover:underline">compliance@unisynthe.com</a>.
      </p>

      <H2>2. Information We Collect</H2>
      <Ul>
        <li><strong>Account information:</strong> Company name, contact name, email address, and website URL when you register or submit a request.</li>
        <li><strong>API usage data:</strong> Request logs (timestamps, endpoints called, response codes, source IP addresses) for operational and billing purposes.</li>
        <li><strong>IP addresses:</strong> Addresses submitted to the geolocation API by your application for resolution. We process these on your behalf.</li>
        <li><strong>Phone numbers:</strong> Numbers provided by your application for SMS delivery or voice calls. We act as a processor; you are the controller of end-user data.</li>
        <li><strong>Contact form submissions:</strong> Name, email, and message content when you reach out via our website.</li>
      </Ul>

      <H2>3. Legal Basis for Processing (GDPR)</H2>
      <Ul>
        <li><strong>Contract performance:</strong> Processing account data and API requests to provide the Service.</li>
        <li><strong>Legitimate interest:</strong> Security monitoring, fraud prevention, abuse detection, and service improvement.</li>
        <li><strong>Consent:</strong> Marketing communications (if any) are sent only with explicit opt-in.</li>
      </Ul>

      <H2>4. How We Use Your Information</H2>
      <Ul>
        <li>To provide, maintain, and improve the Service.</li>
        <li>To process API requests (message delivery, geolocation lookups) on your behalf.</li>
        <li>To respond to support inquiries and communicate about your account.</li>
        <li>To detect and prevent abuse, fraud, and violations of our Acceptable Use Policy.</li>
        <li>To comply with legal obligations and enforce our terms.</li>
      </Ul>

      <H2>5. Subprocessors</H2>
      <p>We use the following third-party services to deliver core functionality:</p>
      <Ul>
        <li><strong>Telnyx LLC</strong> — SMS delivery, voice calls, and phone number provisioning. Telnyx processes phone numbers and message content on our behalf. <a href="https://telnyx.com/privacy-policy" className="text-primary hover:underline" target="_blank" rel="noopener">Telnyx Privacy Policy</a>.</li>
        <li><strong>MaxMind Inc.</strong> — IP geolocation database and fraud detection services. MaxMind processes IP addresses submitted through our API. <a href="https://www.maxmind.com/en/privacy-policy" className="text-primary hover:underline" target="_blank" rel="noopener">MaxMind Privacy Policy</a>.</li>
      </Ul>
      <p>We require all subprocessors to maintain appropriate security measures and process data only as instructed.</p>

      <H2>6. Data Retention</H2>
      <Ul>
        <li><strong>Account data:</strong> Retained for the duration of your account plus 12 months after termination.</li>
        <li><strong>API request logs:</strong> Retained for 90 days for debugging and abuse detection, then deleted.</li>
        <li><strong>Message content:</strong> Not stored by UniSynthe after successful delivery. Delivery metadata (timestamps, status codes) retained for 90 days.</li>
        <li><strong>Contact form submissions:</strong> Retained for 24 months, then deleted.</li>
        <li><strong>IP geolocation queries:</strong> Query logs retained for 30 days. IP addresses are not linked to identifiable individuals by UniSynthe.</li>
      </Ul>

      <H2>7. Security Measures</H2>
      <Ul>
        <li>TLS 1.2+ encryption for all data in transit.</li>
        <li>AES-256 encryption for sensitive data at rest (credentials, API keys).</li>
        <li>API authentication via bearer tokens with automatic expiration.</li>
        <li>Rate limiting and anomaly detection on all endpoints.</li>
        <li>Access controls enforced via role-based permissions for internal systems.</li>
        <li>Regular security reviews and dependency audits.</li>
      </Ul>

      <H2>8. International Data Transfers</H2>
      <p>
        Our infrastructure is hosted in the United States. If you are located outside the US,
        your data will be transferred to and processed in the US. We rely on Standard Contractual
        Clauses (SCCs) where required by applicable law to ensure adequate protection for
        international transfers.
      </p>

      <H2>9. Your Rights</H2>
      <p>Depending on your jurisdiction, you may have the right to:</p>
      <Ul>
        <li>Access the personal data we hold about you.</li>
        <li>Request correction of inaccurate data.</li>
        <li>Request deletion of your data ("right to be forgotten").</li>
        <li>Object to or restrict certain processing activities.</li>
        <li>Data portability (receive your data in a structured format).</li>
        <li>Withdraw consent at any time (where processing is based on consent).</li>
      </Ul>
      <p>
        To exercise any of these rights, contact{" "}
        <a href="mailto:compliance@unisynthe.com" className="text-primary hover:underline">compliance@unisynthe.com</a>.
        We will respond within 30 days.
      </p>

      <H2>10. SMS Messaging</H2>
      <p>
        If you or your end users receive SMS messages through our platform: message and data
        rates may apply. Reply STOP to opt out of future messages. Reply HELP for assistance.
        We only send messages when explicit consent has been provided by the end user.
      </p>

      <H2>11. Changes to This Policy</H2>
      <p>
        We may update this Privacy Policy from time to time. Material changes will be communicated
        via email to account holders. Continued use of the Service after changes constitutes acceptance.
      </p>

      <p className="pt-4 font-medium text-slate-900">
        Contact:{" "}
        <a href="mailto:compliance@unisynthe.com" className="text-primary hover:underline">compliance@unisynthe.com</a>
      </p>
    </LegalPage>
  );
}
