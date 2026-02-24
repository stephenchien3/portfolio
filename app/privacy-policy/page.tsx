import Link from 'next/link';
import BackButton from '../components/BackButton';

export const metadata = {
  title: 'Privacy Policy',
};

export default function PrivacyPolicy() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <span>privacy-policy</span>
      </div>

      <BackButton />

      <h1 className="page-title">privacy policy</h1>
      <p className="page-desc">last updated: february 24, 2026</p>

      <div className="detail-content">
        <p>
          This privacy policy applies to all mobile applications developed and published
          by Stephen Chien on the Apple App Store (collectively, &ldquo;the Apps&rdquo;).
          By using any of the Apps, you agree to this policy.
        </p>

        <h2>data collection</h2>
        <p>
          The Apps are designed to respect your privacy. Content you create within the
          Apps is stored locally on your device and is not transmitted to our servers
          unless explicitly required for a feature to function (e.g., AI text generation
          or other cloud-based features).
        </p>

        <h2>third-party services</h2>
        <p>
          Some Apps may use third-party services to provide functionality, such as AI
          providers for text generation or other processing. When you use these features,
          the content you submit may be sent to the third-party provider. We do not store
          this data on our own servers. These third-party services have their own privacy
          policies, and we encourage you to review them.
        </p>

        <h2>analytics</h2>
        <p>
          The Apps may collect anonymized, aggregated usage data (such as app launches or
          feature usage) through Apple&apos;s built-in analytics. This data cannot be used to
          identify you personally. We do not use any additional third-party analytics or
          tracking tools.
        </p>

        <h2>data storage and security</h2>
        <p>
          Your data is stored locally on your device and, if you have iCloud enabled,
          may be synced via Apple&apos;s iCloud services. We do not operate our own servers
          to store your personal data. We rely on Apple&apos;s platform security to protect
          data stored on your device and in iCloud.
        </p>

        <h2>children&apos;s privacy</h2>
        <p>
          The Apps are not directed at children under the age of 13. We do not knowingly
          collect personal information from children under 13. If you believe a child has
          provided personal information through the Apps, please contact us so we can
          take appropriate action.
        </p>

        <h2>your rights</h2>
        <p>
          Since your data is stored locally on your device, you have full control over
          it at all times. You can delete your data by deleting content within the App
          or by uninstalling the App. If you have any questions about your data, please
          contact us.
        </p>

        <h2>changes to this policy</h2>
        <p>
          We may update this privacy policy from time to time. Changes will be posted on
          this page with an updated revision date. Continued use of the Apps after changes
          constitutes acceptance of the revised policy.
        </p>

        <h2>contact</h2>
        <p>
          If you have any questions about this privacy policy, you can reach us
          at <a href="mailto:stephenchien@berkeley.edu">stephenchien@berkeley.edu</a>.
        </p>
      </div>
    </main>
  );
}
