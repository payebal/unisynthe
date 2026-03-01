import LegalPage, { H2, Ul } from "../components/LegalPage";

export default function MessagingPolicy() {
  return (
    <LegalPage title="Messaging Policy" updatedAt="March 1, 2026">
      <p>
        This Messaging Policy governs all SMS, MMS, and voice communications sent through the
        UniSynthe platform. All customers must comply with this policy in addition to our
        Acceptable Use Policy and Terms of Service.
      </p>

      <H2>1. Consent Requirements</H2>
      <p>
        All messages sent through UniSynthe must be based on explicit, documented consent from
        the end user. You must be able to demonstrate that each recipient has opted in to receive
        the specific type of message being sent.
      </p>
      <h3 className="font-semibold text-slate-800">Acceptable Consent Methods</h3>
      <Ul>
        <li>Web form with clear disclosure (checkbox or button confirming consent).</li>
        <li>Keyword opt-in (user texts a keyword to a short code or long code).</li>
        <li>Paper form with signature (for in-person collection).</li>
        <li>Verbal consent with documented recording (for voice channels).</li>
      </Ul>

      <h3 className="font-semibold text-slate-800">Sample Consent Language</h3>
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm italic">
        "By providing your phone number and clicking 'Submit', you consent to receive
        transactional messages from [Your Company] via UniSynthe, including one-time passwords
        and account notifications. Message and data rates may apply. Reply STOP to opt out at
        any time. Reply HELP for assistance."
      </div>

      <H2>2. Opt-Out (STOP) Compliance</H2>
      <Ul>
        <li>Every SMS message must support the STOP keyword for immediate opt-out.</li>
        <li>When a user replies STOP, no further messages may be sent to that number unless the user re-opts in.</li>
        <li>Opt-out processing must be automatic and immediate.</li>
        <li>Users who reply STOP must receive a single confirmation message: "You have been unsubscribed. No further messages will be sent. Reply HELP for assistance."</li>
      </Ul>

      <H2>3. HELP Keyword</H2>
      <p>
        All messaging programs must respond to the HELP keyword with a message identifying:
      </p>
      <Ul>
        <li>The name of the sending organization.</li>
        <li>A support contact (email or phone number).</li>
        <li>Instructions for opting out (reply STOP).</li>
      </Ul>

      <H2>4. Message Content Requirements</H2>
      <Ul>
        <li>Messages must clearly identify the sender (company name or brand).</li>
        <li>Content must match the purpose for which consent was obtained.</li>
        <li>Messages must not exceed the scope of the user's opt-in (e.g., OTP consent does not cover promotional messages).</li>
      </Ul>

      <H2>5. Prohibited Message Categories</H2>
      <p>The following message types are not permitted through UniSynthe under any circumstances:</p>
      <Ul>
        <li>Unsolicited marketing or promotional messages.</li>
        <li>Phishing, smishing, or social engineering attempts.</li>
        <li>Messages promoting illegal products or services.</li>
        <li>Debt collection harassment or abusive language.</li>
        <li>Adult content or sexually explicit material.</li>
        <li>Political campaign messages (unless separately approved and compliant with FCC rules).</li>
        <li>Cannabis, CBD, or controlled substance promotions.</li>
        <li>High-risk financial promotions (payday loans, cryptocurrency schemes).</li>
      </Ul>

      <H2>6. Message Frequency & Rate Limiting</H2>
      <Ul>
        <li>Do not send more messages than the user has consented to receive.</li>
        <li>Transactional messages (OTP, alerts) should be sent only when triggered by a user action.</li>
        <li>Excessive messaging to the same number may be automatically rate-limited by our platform.</li>
      </Ul>

      <H2>7. 10DLC & Sender Registration</H2>
      <p>
        For US-based messaging, UniSynthe supports 10DLC (10-Digit Long Code) registration.
        Customers sending application-to-person (A2P) messages must complete brand and campaign
        registration through our onboarding process. Unregistered traffic may experience
        reduced throughput or blocking by carriers.
      </p>

      <H2>8. Record Keeping</H2>
      <p>
        You must maintain records of end-user consent for at least 4 years, including:
      </p>
      <Ul>
        <li>How consent was obtained (web form, keyword, etc.).</li>
        <li>The date and time of consent.</li>
        <li>The specific messaging program the user consented to.</li>
        <li>Opt-out records and dates.</li>
      </Ul>

      <H2>9. Enforcement</H2>
      <p>
        Violations of this Messaging Policy are handled according to the enforcement procedures
        described in our <a href="/acceptable-use" className="text-primary hover:underline">Acceptable Use Policy</a>.
        Severe or repeated violations may result in immediate account suspension.
      </p>

      <p className="pt-4 font-medium text-slate-900">
        Contact:{" "}
        <a href="mailto:compliance@unisynthe.com" className="text-primary hover:underline">compliance@unisynthe.com</a>
      </p>
    </LegalPage>
  );
}
