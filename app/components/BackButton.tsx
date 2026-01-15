'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="back-link"
      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
    >
      ← back
    </button>
  );
}
