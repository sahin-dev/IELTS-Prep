import type { Metadata } from 'next';
import BandChapterPage from '@/components/BandChapterPage';

export const metadata: Metadata = { title: 'Speaking at every band' };
export default function Page() { return <BandChapterPage id="speaking" />; }
