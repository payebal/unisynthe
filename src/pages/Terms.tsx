import LegalPage, { H2, Ul } from "../components/LegalPage";

export default function Terms() {
  return (
    <LegalPage title="Terms of Service" updatedAt="March 1, 2026">
      <p>
        These Terms of Service ("Terms") govern your access to and use of the UniSynthe API
        platform and website (the "Service") operated by UniSynthe Inc. ("UniSynthe", "we", "us").
        By accessing or using the Service, you agree to be bound by these Terms.
      </p>

      <H2>1. Eligibility</H2>
      <p>
        The Service is available to businesses and developers who are at least 18 years old.
        By registering, you represent that you have the authority to bind your organization
        to these Terms.
      </p>

      <H2>2. Account Registration</H2>
      <Ul>
        <li>You must provide accurate and complete information during registration.</li>
        <li>You are responsible for maintaining the confidentiality of your API credentials.</li>
        <li>You are responsible for all activity under your account.</li>
        <li>Notify us immediately at <a href="mailto:support@unisynthe.com" className="text-primary hover:underline">support@unisynthe.com</a> if you suspect unauthorized access.</li>
      </Ul>

      <H2>3. Permitted Use</H2>
      <p>You may use the Service to:</p>
      <Ul>
        <li>Send transactional SMS and voice messages to end users who have provided explicit consent.</li>
        <li>Perform IP geolocation lookups and fraud risk assessments.</li>
        <li>Integrate our APIs into your applications in accordance with our documentation.</li>
      </Ul>

      <H2>4. Prohibited Use</H2>
      <p>
        You must comply with our <a href="/acceptable-use" className="text-primary hover:underline">Acceptable Use Policy</a> and{" "}
        <a href="/messaging-policy" className="text-primary hover:underline">Messaging Policy</a>.
        Prohibited activities include but are not limited to:
      </p>
      <Ul>
        <li>Sending unsolicited messages (spam), phishing attempts, or fraudulent communications.</li>
        <li>Using the Service for any illegal purpose.</li>
        <li>Exceeding rate limits or attempting to circumvent security controls.</li>
        <li>Reselling API access without prior written agreement.</li>
      </Ul>

      <H2>5. Rate Limits & Quotas</H2>
      <p>
        Default rate limits are 60 requests per second per API key. Higher limits are available
        on request. We may throttle or suspend access if usage patterns indicate abuse or
        negatively impact service quality for other customers.
      </p>

      <H2>6. Service Level</H2>
      <p>
        We target 99.9% monthly uptime for the API. Planned maintenance windows are communicated
        at least 48 hours in advance. This is a target, not a guarantee, unless a separate SLA
        has been agreed in writing.
      </p>

      <H2>7. Data Processing</H2>
      <p>
        When you use our messaging or geolocation APIs, you may submit end-user data (phone numbers,
        IP addresses). You are the data controller for this data. UniSynthe processes it on your
        behalf as a data processor, in accordance with our{" "}
        <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
      </p>

      <H2>8. Suspension & Termination</H2>
      <Ul>
        <li>We may suspend your account immediately if we detect abuse, fraud, or policy violations.</li>
        <li>Either party may terminate with 30 days written notice.</li>
        <li>Upon termination, your API access is revoked and account data is retained for 12 months per our retention policy.</li>
      </Ul>

      <H2>9. Limitation of Liability</H2>
      <p>
        To the maximum extent permitted by law, UniSynthe's total liability for any claim arising
        from these Terms or the Service shall not exceed the fees paid by you in the 12 months
        preceding the claim. We are not liable for indirect, incidental, or consequential damages.
      </p>

      <H2>10. Governing Law</H2>
      <p>
        These Terms are governed by the laws of the State of California, United States, without
        regard to conflict-of-law principles. Any disputes shall be resolved in the courts
        of San Francisco County, California.
      </p>

      <H2>11. Changes to Terms</H2>
      <p>
        We may update these Terms from time to time. Material changes will be communicated via
        email to account holders at least 30 days before taking effect. Continued use after
        changes constitutes acceptance.
      </p>

      <p className="pt-4 font-medium text-slate-900">
        Contact:{" "}
        <a href="mailto:support@unisynthe.com" className="text-primary hover:underline">support@unisynthe.com</a>
      </p>
    </LegalPage>
  );
}
