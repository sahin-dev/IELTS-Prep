import type { Metadata } from 'next';
import { PracticeList } from '@/components/practice-pages';

export const metadata: Metadata = { title: 'Listening practice' };

export default function Page() {
  return <PracticeList skill="listening" />;
}
