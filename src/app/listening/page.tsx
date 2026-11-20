import type { Metadata } from 'next';
import { SkillOverview } from '@/components/skill-pages';

export const metadata: Metadata = { title: 'Listening: question types & strategies' };

export default function Page() {
  return <SkillOverview skill="listening" />;
}
