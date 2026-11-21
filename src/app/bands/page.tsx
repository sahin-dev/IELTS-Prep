import type { Metadata } from 'next';
import BandChapterPage from '@/components/BandChapterPage';

export const metadata: Metadata = { title: 'Band levels from 4 to 9' };
export default function Page() { return <BandChapterPage id="overview" />; }
