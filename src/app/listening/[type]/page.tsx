import type { Metadata } from 'next';
import { QuestionTypePage, typeParams, typeTitle } from '@/components/skill-pages';

type Params = { params: Promise<{ type: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return typeParams('listening'); }
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { type } = await params;
  return { title: `${typeTitle('listening', type)} – Listening` };
}

export default async function Page({ params }: Params) {
  const { type } = await params;
  return <QuestionTypePage skill="listening" id={type} />;
}
