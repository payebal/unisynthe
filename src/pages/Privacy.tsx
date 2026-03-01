export default function Privacy() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="mb-2 text-3xl font-bold text-slate-900">Privacy Policy</h1>
        <p className="mb-10 text-sm text-slate-500">Last updated: March 1, 2026</p>

        <div className="prose-slate space-y-6 text-slate-600 leading-relaxed">
          <p>
            UniSynthe ("we", "us", "our") operates unisynthe.com (the "Service").
          </p>
          <p>
            We are committed to protecting your privacy. This Privacy Policy explains what information
            we collect, how we use it, and your rights.
          </p>

          <h2 className="text-lg font-semibold text-slate-900">1. Information We Collect</h2>
          <ul className="list-disc space-y-1 pl-6">
            <li>Contact information (name, email) when you submit forms.</li>
            <li>IP addresses for geolocation demos and analytics.</li>
            <li>Phone numbers only if you explicitly provide them for testing purposes.</li>
          </ul>

          <h2 className="text-lg font-semibold text-slate-900">2. How We Use Your Information</h2>
          <ul className="list-disc space-y-1 pl-6">
            <li>To respond to inquiries and provide support.</li>
            <li>To improve our services and demonstrate API capabilities.</li>
          </ul>

          <h2 className="text-lg font-semibold text-slate-900">3. Third-Party Services</h2>
          <p>We use:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Telnyx for messaging and voice capabilities.</li>
            <li>MaxMind for IP geolocation services.</li>
          </ul>
          <p>
            Their privacy policies apply when you interact with those integrated services.
          </p>

          <h2 className="text-lg font-semibold text-slate-900">
            4. SMS Messaging (if applicable)
          </h2>
          <p>
            Message &amp; data rates may apply. To opt-out reply STOP. We only send messages with your
            explicit consent.
          </p>

          <h2 className="text-lg font-semibold text-slate-900">5. Data Retention &amp; Security</h2>
          <p>
            We retain data only as long as necessary. We use industry-standard security measures.
          </p>

          <h2 className="text-lg font-semibold text-slate-900">6. Your Rights</h2>
          <p>
            You may request access, correction, or deletion of your data by contacting{" "}
            <a
              href="mailto:support@unisynthe.com"
              className="text-primary hover:underline"
            >
              support@unisynthe.com
            </a>
            .
          </p>

          <h2 className="text-lg font-semibold text-slate-900">7. Changes to Policy</h2>
          <p>We may update this policy. Continued use constitutes acceptance.</p>

          <p className="pt-4 font-medium text-slate-900">
            Contact:{" "}
            <a
              href="mailto:support@unisynthe.com"
              className="text-primary hover:underline"
            >
              support@unisynthe.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
