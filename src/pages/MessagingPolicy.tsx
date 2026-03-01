import LegalPage, { H2, Ul } from "../components/LegalPage";

export default function MessagingPolicy() {
  return (
    <LegalPage title="Application Notification Policy" updatedAt="March 1, 2026">
      <p>
        This Notification Policy governs all application-generated notifications delivered through the
        UniSynthe platform, including verification codes, security alerts, and transactional
        system notifications. All customers must comply with this policy in addition to our
        Acceptable Use Policy and Terms of Service.
      </p>
      <p>
        UniSynthe is not a standalone notification delivery service. All notifications must
        be triggered by application events and tied to documented end-user consent.
      </p>

      <H2>1. Consent Requirements</H2>
      <p>
        All notifications delivered through UniSynthe must be based on explicit, documented consent
        from the end user. You must be able to demonstrate that each recipient has opted in to
        receive the specific type of notification being delivered.
      </p>
      <h3 className="font-semibold text-slate-800">Acceptable Consent Methods</h3>
      <Ul>
        <li>Web or mobile application form with clear disclosure (checkbox or button confirming consent).</li>
        <li>Account registration flow where the user provides contact information for verification purposes.</li>
        <li>In-application opt-in for specific notification categories (security alerts, account activity).</li>
      </Ul>

      <h3 className="font-semibold text-slate-800">Sample Consent Language</h3>
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm italic">
        "By creating an account and providing your phone number, you consent to receive
        verification codes, security alerts, and account notifications from [Your Application]
        powered by UniSynthe. Standard data rates may apply. Reply STOP to opt out at
        any time. Reply HELP for assistance."
      </div>

      <H2>2. Opt-Out (STOP) Compliance</H2>
      <Ul>
        <li>Every notification channel must support the STOP keyword for immediate opt-out.</li>
        <li>When a user replies STOP, no further notifications may be delivered to that recipient unless the user re-opts in.</li>
        <li>Opt-out processing must be automatic and immediate.</li>
        <li>Users who reply STOP must receive a single confirmation: "You have been unsubscribed. No further notifications will be sent. Reply HELP for assistance."</li>
      </Ul>

      <H2>3. HELP Keyword</H2>
      <p>
        All notification programs must respond to the HELP keyword with a response identifying:
      </p>
      <Ul>
        <li>The name of the application or organization.</li>
        <li>A support contact (email or phone number).</li>
        <li>Instructions for opting out (reply STOP).</li>
      </Ul>

      <H2>4. Notification Content Requirements</H2>
      <Ul>
        <li>Notifications must clearly identify the originating application or organization.</li>
        <li>Content must match the purpose for which consent was obtained (e.g., verification consent does not cover promotional use).</li>
        <li>Notifications must be triggered by a specific application event — not generated manually or on a schedule.</li>
      </Ul>

      <H2>5. Prohibited Notification Categories</H2>
      <p>The following are not permitted through UniSynthe under any circumstances:</p>
      <Ul>
        <li>Promotional or marketing communications of any kind.</li>
        <li>Unsolicited outreach or lead-generation notifications.</li>
        <li>Phishing, social engineering, or credential harvesting.</li>
        <li>Notifications promoting illegal products or services.</li>
        <li>Debt collection harassment or abusive language.</li>
        <li>Adult content or sexually explicit material.</li>
        <li>Political outreach (unless separately approved and legally compliant).</li>
        <li>High-risk financial promotions (payday loans, cryptocurrency schemes).</li>
      </Ul>

      <H2>6. Frequency & Rate Limiting</H2>
      <Ul>
        <li>Notifications must only be delivered when triggered by a user-initiated application event.</li>
        <li>Repeated delivery to the same recipient without a corresponding trigger event is prohibited.</li>
        <li>Excessive notification volume to a single recipient may be automatically rate-limited.</li>
      </Ul>

      <H2>7. Sender Registration</H2>
      <p>
        For US-based notification delivery, UniSynthe supports 10DLC (10-Digit Long Code) registration.
        Applications delivering notifications must complete brand and use-case registration through
        our onboarding process. Unregistered traffic may experience reduced throughput or
        carrier-level filtering.
      </p>

      <H2>8. Record Keeping</H2>
      <p>
        You must maintain records of end-user consent for at least 4 years, including:
      </p>
      <Ul>
        <li>How consent was obtained (registration form, in-app opt-in, etc.).</li>
        <li>The date and time of consent.</li>
        <li>The specific notification categories the user consented to.</li>
        <li>Opt-out records and dates.</li>
      </Ul>

      <H2>9. Enforcement</H2>
      <p>
        Violations of this Notification Policy are handled according to the enforcement procedures
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
