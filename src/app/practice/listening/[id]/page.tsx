import type { Metadata } from 'next';
import { PracticeTest, setParams, setTitle } from '@/components/practice-pages';

type Params = { params: Promise<{ id: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return setParams('listening'); }
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  return { title: setTitle('listening', id) };
}

export default async function Page({ params }: Params) {
  const { id } = await params;
  return <PracticeTest skill="listening" id={id} />;
}
