import type { Metadata } from 'next';
import { SkillOverview } from '@/components/skill-pages';

export const metadata: Metadata = { title: 'Reading: question types & strategies' };

export default function Page() {
  return <SkillOverview skill="reading" />;
}
