export const dynamic = 'force-dynamic';

import { Suspense } from 'react';
import ArtistsPageClient from './ArtistsPageClient';

export default function ArtistsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ArtistsPageClient />
    </Suspense>
  );
}