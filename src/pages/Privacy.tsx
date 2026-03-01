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

      <H2>2. Service Data Processing</H2>
      <p>
        UniSynthe operates as application infrastructure used by software systems. We do not
        interact directly with end users of our customers&apos; applications.
      </p>
      <p>
        The platform processes structured application events provided by integrating applications,
        such as authentication attempts, account recovery requests, and system-generated
        notifications.
      </p>
      <p>
        Technical identifiers (such as IP address or device metadata) may be transmitted to
        UniSynthe by the integrating application as part of these events. UniSynthe processes
        this information solely to perform the requested platform function and return the result
        to the originating application.
      </p>
      <p>
        For certain application events, the event workflow may include a user-facing notification
        (such as a login alert or account recovery notice). In such cases, contact identifiers
        (such as a phone number or email address) are provided by the integrating application
        as part of the event payload and used solely to complete the requested event.
      </p>
      <p>
        UniSynthe does not independently collect user data from the public, track individuals
        across services, or build user profiles.
      </p>

      <H2>3. Information We Collect</H2>
      <Ul>
        <li><strong>Account information:</strong> Company name, contact name, email address, and website URL provided by API customers.</li>
        <li><strong>Application event data:</strong> Structured events sent by integrating applications; event payloads may include technical identifiers such as IP address or device metadata.</li>
        <li><strong>API usage data:</strong> Request logs (timestamps, endpoints called, response codes, source IP addresses) for operational and security purposes.</li>
        <li><strong>Contact form submissions:</strong> Name, email, and message content when you reach out via our website.</li>
      </Ul>

      <H2>4. Legal Basis for Processing (GDPR)</H2>
      <Ul>
        <li><strong>Contract performance:</strong> Processing account data and API requests to provide the Service.</li>
        <li><strong>Legitimate interest:</strong> Security monitoring, fraud prevention, abuse detection, and service improvement.</li>
        <li><strong>Consent:</strong> Contact form submissions and any optional communications.</li>
      </Ul>

      <H2>5. How We Use Your Information</H2>
      <Ul>
        <li>To provide, maintain, and improve the Service.</li>
        <li>To process API requests (application event processing and risk signal lookups) on your behalf.</li>
        <li>To respond to support inquiries and communicate about your account.</li>
        <li>To detect and prevent abuse, fraud, and violations of our Acceptable Use Policy.</li>
        <li>To comply with legal obligations and enforce our terms.</li>
      </Ul>

      <H2>6. Subprocessors</H2>
      <p>We use the following third-party services to deliver core functionality:</p>
      <Ul>
        <li><strong>Telnyx LLC</strong> — Communications infrastructure provider. When an application event includes a user-facing notification, Telnyx may be used to complete that notification on our behalf. <a href="https://telnyx.com/privacy-policy" className="text-primary hover:underline" target="_blank" rel="noopener">Telnyx Privacy Policy</a>.</li>
        <li><strong>MaxMind Inc.</strong> — IP geolocation and risk signal services. MaxMind processes IP addresses submitted as part of application events through our API. <a href="https://www.maxmind.com/en/privacy-policy" className="text-primary hover:underline" target="_blank" rel="noopener">MaxMind Privacy Policy</a>.</li>
      </Ul>
      <p>We require all subprocessors to maintain appropriate security measures and process data only as instructed.</p>

      <H2>7. Data Retention</H2>
      <Ul>
        <li><strong>Event metadata:</strong> Retained for 30 days.</li>
        <li><strong>Security logs:</strong> Retained for 90 days.</li>
        <li><strong>Billing and account records:</strong> Retained for 1 year.</li>
        <li><strong>Contact form submissions:</strong> Retained for 24 months, then deleted.</li>
      </Ul>

      <H2>8. Security Measures</H2>
      <Ul>
        <li>TLS 1.2+ encryption for all data in transit.</li>
        <li>AES-256 encryption for sensitive data at rest (credentials, API keys).</li>
        <li>API authentication via bearer tokens with automatic expiration.</li>
        <li>Rate limiting and anomaly detection on all endpoints.</li>
        <li>Access controls enforced via role-based permissions for internal systems.</li>
        <li>Regular security reviews and dependency audits.</li>
      </Ul>

      <H2>9. International Data Transfers</H2>
      <p>
        Our infrastructure is hosted in the United States. If you are located outside the US,
        your data will be transferred to and processed in the US. We rely on Standard Contractual
        Clauses (SCCs) where required by applicable law to ensure adequate protection for
        international transfers.
      </p>

      <H2>10. Your Rights</H2>
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
        If you are an end user of an application that uses UniSynthe, please contact that
        application directly regarding your personal data. UniSynthe acts as a data processor
        on behalf of the application operator (the data controller) and processes end-user data
        only as instructed by the integrating application. UniSynthe assists data controllers
        with deletion and access requests where applicable under our data processing agreements.
      </p>
      <p>
        To exercise any of these rights, contact{" "}
        <a href="mailto:compliance@unisynthe.com" className="text-primary hover:underline">compliance@unisynthe.com</a>.
        We will respond within 30 days.
      </p>

      <H2>11. Application Event Processing</H2>
      <p>
        UniSynthe processes application events on behalf of integrating applications.
        Event processing is initiated only by the integrating application and is governed
        by the terms of the applicable integration agreement. End-user opt-out and
        preference management are addressed in our{" "}
        <a href="/messaging-policy" className="text-primary hover:underline">Notification Policy</a>.
      </p>

      <H2>12. Changes to This Policy</H2>
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
