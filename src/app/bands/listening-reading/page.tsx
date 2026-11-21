import type { Metadata } from 'next';
import BandChapterPage from '@/components/BandChapterPage';

export const metadata: Metadata = { title: 'Listening and Reading by band' };
export default function Page() { return <BandChapterPage id="objective" />; }
