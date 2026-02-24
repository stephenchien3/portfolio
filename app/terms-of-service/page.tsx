import Link from 'next/link';
import BackButton from '../components/BackButton';

export const metadata = {
  title: 'Terms of Service',
};

export default function TermsOfService() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <span>terms-of-service</span>
      </div>

      <BackButton />

      <h1 className="page-title">terms of service</h1>
      <p className="page-desc">last updated: february 24, 2026</p>

      <div className="detail-content">
        <p>
          These terms of service govern your use of all mobile applications developed and
          published by Stephen Chien on the Apple App Store (collectively,
          &ldquo;the Apps&rdquo;). By downloading or using any of the Apps, you agree to
          these terms.
        </p>

        <h2>license</h2>
        <p>
          We grant you a limited, non-exclusive, non-transferable, revocable license to
          use the Apps for personal, non-commercial purposes, subject to these terms and
          the Apple Media Services Terms and Conditions.
        </p>

        <h2>acceptable use</h2>
        <p>
          You agree not to misuse the Apps. This includes but is not limited to:
          reverse-engineering, decompiling, or disassembling the Apps; using the Apps for
          any unlawful purpose; attempting to gain unauthorized access to any part of the
          Apps or their related systems; or redistributing or reselling the Apps or their
          content.
        </p>

        <h2>intellectual property</h2>
        <p>
          The Apps and their original content, features, and functionality are owned by
          Stephen Chien and are protected by copyright and other intellectual property
          laws. Content you create within the Apps remains yours.
        </p>

        <h2>ai-generated content</h2>
        <p>
          Some Apps may use artificial intelligence to generate content. AI-generated
          content is provided &ldquo;as is&rdquo; and may not always be accurate,
          appropriate, or error-free. You are solely responsible for reviewing and using
          any AI-generated content. We make no guarantees about the quality, accuracy, or
          suitability of AI-generated output.
        </p>

        <h2>disclaimer of warranties</h2>
        <p>
          The Apps are provided on an &ldquo;as is&rdquo; and &ldquo;as
          available&rdquo; basis without warranties of any kind, either express or implied,
          including but not limited to implied warranties of merchantability, fitness for a
          particular purpose, or non-infringement. We do not warrant that the Apps will be
          uninterrupted, error-free, or free of harmful components.
        </p>

        <h2>limitation of liability</h2>
        <p>
          To the fullest extent permitted by applicable law, Stephen Chien shall not be
          liable for any indirect, incidental, special, consequential, or punitive damages,
          or any loss of profits or revenues, whether incurred directly or indirectly, or
          any loss of data, use, goodwill, or other intangible losses resulting from your
          use of the Apps.
        </p>

        <h2>termination</h2>
        <p>
          We may terminate or suspend your access to the Apps at any time, without prior
          notice, for conduct that we believe violates these terms or is harmful to other
          users, us, or third parties. Upon termination, your right to use the Apps will
          cease immediately.
        </p>

        <h2>changes to these terms</h2>
        <p>
          We may update these terms from time to time. Changes will be posted on this page
          with an updated revision date. Continued use of the Apps after changes
          constitutes acceptance of the revised terms.
        </p>

        <h2>contact</h2>
        <p>
          If you have any questions about these terms, you can reach us
          at <a href="mailto:stephenchien@berkeley.edu">stephenchien@berkeley.edu</a>.
        </p>
      </div>
    </main>
  );
}
