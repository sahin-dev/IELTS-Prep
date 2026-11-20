import type { Metadata } from 'next';
import { PracticeTest, setParams, setTitle } from '@/components/practice-pages';

type Params = { params: Promise<{ id: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return setParams('reading'); }
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  return { title: setTitle('reading', id) };
}

export default async function Page({ params }: Params) {
  const { id } = await params;
  return <PracticeTest skill="reading" id={id} />;
}
