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

      <H2>3. Integration Approval</H2>
      <p>
        Access to UniSynthe APIs is granted only for an approved application integration.
      </p>
      <p>
        Before issuing production credentials, UniSynthe may review the applicant&apos;s
        application, use case, and implementation details. Use of the platform is
        limited to the approved functionality described during the integration request.
      </p>
      <p>
        Any material change in application purpose, traffic pattern, or event types
        requires a new approval.
      </p>
      <p>
        UniSynthe may decline an integration request at its sole discretion.
      </p>
      <p>
        UniSynthe may suspend or restrict API access immediately if activity differs
        from the approved integration or presents operational, security, or compliance risk.
      </p>

      <H2>4. Event Origination Responsibility</H2>
      <p>
        The integrating application is responsible for the events submitted to
        UniSynthe. The platform does not accept arbitrary or user-directed event
        submissions.
      </p>
      <p>
        All events must be tied to a legitimate application workflow initiated by
        the application&apos;s own user activity.
      </p>
      <p>
        The platform may not be used to process events for users who did not directly
        interact with the integrating application.
      </p>
      <p>
        Integrating applications are responsible for obtaining and maintaining end-user
        consent where required by law. UniSynthe may suspend event processing for
        integrations that do not demonstrate appropriate consent practices.
      </p>

      <H2>5. Permitted Use</H2>
      <p>You may use the Service to:</p>
      <Ul>
        <li>Process application events and trigger user notifications for end users who have provided explicit consent.</li>
        <li>Perform IP geolocation lookups and security risk signal checks.</li>
        <li>Integrate our APIs into your applications in accordance with our documentation.</li>
      </Ul>

      <H2>6. Prohibited Use</H2>
      <p>
        You must comply with our <a href="/acceptable-use" className="text-primary hover:underline">Acceptable Use Policy</a> and{" "}
        <a href="/messaging-policy" className="text-primary hover:underline">Notification Policy</a>.
        Prohibited activities include but are not limited to:
      </p>
      <Ul>
        <li>Using the platform for unsolicited, promotional, or user-initiated event submissions.</li>
        <li>Reselling API access or event processing capacity without prior written agreement.</li>
        <li>Using the Service for any illegal purpose.</li>
        <li>Exceeding rate limits or attempting to circumvent security controls.</li>
      </Ul>

      <H2>7. Rate Limits & Quotas</H2>
      <p>
        Default rate limits are 60 requests per second per API key. Higher limits are available
        on request. We may throttle or suspend access if usage patterns indicate abuse or
        negatively impact service quality for other customers.
      </p>

      <H2>8. Service Level</H2>
      <p>
        We target 99.9% monthly uptime for the API. Planned maintenance windows are communicated
        at least 48 hours in advance. This is a target, not a guarantee, unless a separate SLA
        has been agreed in writing.
      </p>

      <H2>9. Data Processing</H2>
      <p>
        When you use our APIs, you submit application event data that may include
        end-user identifiers required to process authentication and notification events.
        You are the data controller for this data. UniSynthe processes it on your
        behalf as a data processor, in accordance with our{" "}
        <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
      </p>

      <H2>10. Immediate Suspension & Termination</H2>
      <Ul>
        <li>We may immediately suspend event processing, API access, or specific integrations without prior notice to protect platform integrity.</li>
        <li>We may immediately suspend access to comply with infrastructure provider requirements, legal obligations, or to prevent suspected abuse.</li>
        <li>Service restoration may require additional verification or implementation changes.</li>
        <li>Either party may terminate with 30 days written notice.</li>
        <li>Upon termination, your API access is revoked and account data is retained for 12 months per our retention policy.</li>
      </Ul>

      <H2>11. Limitation of Liability</H2>
      <p>
        To the maximum extent permitted by law, UniSynthe's total liability for any claim arising
        from these Terms or the Service shall not exceed the fees paid by you in the 12 months
        preceding the claim. We are not liable for indirect, incidental, or consequential damages.
      </p>

      <H2>12. Governing Law</H2>
      <p>
        These Terms are governed by the laws of the State of California, United States, without
        regard to conflict-of-law principles. Any disputes shall be resolved in the courts
        of San Francisco County, California.
      </p>

      <H2>13. Changes to Terms</H2>
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
