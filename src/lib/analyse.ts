/* Automatic structural analysis of a Writing answer */

const LINKERS = ['however', 'moreover', 'furthermore', 'in addition', 'therefore', 'consequently', 'as a result', 'nevertheless', 'although', 'even though', 'whereas', 'while', 'despite', 'in spite of', 'on the other hand', 'for example', 'for instance', 'such as', 'in conclusion', 'to sum up', 'overall', 'firstly', 'secondly', 'finally', 'in contrast', 'by contrast', 'similarly', 'thus', 'hence', 'because', 'since', 'due to', 'owing to', 'admittedly', 'in particular', 'in other words', 'not only', 'what is more', 'meanwhile', 'subsequently', 'following this', 'once'];
const STOP = new Set('the a an and or but of to in on at for with by from is are was were be been being it its this that these those as which who whom whose what when where why how there their they them he she his her we our you your i my me not no so if than then also can could would should will may might must do does did have has had more most very such into over about between during after before because while'.split(' '));
const INFORMAL = ['kids', 'a lot of', 'lots of', 'gonna', 'wanna', 'stuff', 'things', 'ok', 'okay', 'guys', 'really', 'pretty much', 'etc'];
const CONTRACTIONS = /\b(don't|can't|won't|isn't|aren't|doesn't|didn't|wasn't|weren't|i'm|it's|they're|we're|you're|i've|we've|they've|wouldn't|shouldn't|couldn't|haven't|hasn't|there's|that's)\b/gi;
const PASSIVE = /\b(is|are|was|were|be|been|being)\s+(\w+ly\s+)?(\w+ed|built|made|done|taken|given|seen|known|shown|grown|sold|told|found|held|kept|left|paid|put|set|cut|brought|bought|taught|thought|written|chosen|driven|eaten|spoken|ground|frozen|drawn)\b/gi;
const COMPLEX = /\b(although|because|which|who|whereas|while|if|unless|since|when|that|whose|where|despite|even though|once|so that)\b/i;

export interface Analysis {
  words: number; sentences: number; paras: number; avg: number; complex: number; passive: number;
  linkersUsed: string[]; repeated: [string, number][]; advice: string[];
}

export function analyse(text: string, min: number, letter = false): Analysis {
  const words = text.trim() ? text.trim().split(/\s+/) : [];
  const lower = ' ' + text.toLowerCase().replace(/[^a-z'\s-]/g, ' ') + ' ';
  const trailing: string[] = text.trim() && !/[.!?]\s*$/.test(text.trim()) ? [text.trim().split(/[.!?]/).pop() || ''] : [];
  const sentences = ([...(text.match(/[^.!?]+[.!?]+/g) || [])] as string[]).concat(trailing).map(s => s.trim()).filter(s => s.split(/\s+/).length > 1);
  const paras = text.split(/\n+/).filter(p => p.trim().split(/\s+/).length > 3).length;
  const linkersUsed = LINKERS.filter(l => lower.includes(' ' + l + ' '));
  const complex = sentences.filter(s => COMPLEX.test(s)).length;
  const passive = (text.match(PASSIVE) || []).length;
  const contractions = text.match(CONTRACTIONS) || [];
  const informal = INFORMAL.filter(w => lower.includes(' ' + w + ' '));
  const freq: Record<string, number> = {};
  lower.split(/\s+/).filter(w => w.length > 3 && !STOP.has(w)).forEach(w => (freq[w] = (freq[w] || 0) + 1));
  const repeated = Object.entries(freq).filter(([, c]) => c >= 4).sort((a, b) => b[1] - a[1]).slice(0, 6);
  const avg = sentences.length ? Math.round(words.length / sentences.length) : 0;

  const advice: string[] = [];
  if (words.length < min) advice.push(`<b>Too short:</b> ${words.length}/${min} words. Under-length answers lose marks in Task Achievement/Response.`);
  if (min === 250 && paras < 4) advice.push('<b>Paragraphing:</b> aim for 4–5 paragraphs (introduction, 2–3 body paragraphs, conclusion). Leave a blank line between paragraphs.');
  if (min === 150 && paras < 3) advice.push(`<b>Paragraphing:</b> use at least ${letter ? '3–5 paragraphs (opening, one per bullet point, closing)' : '3–4 paragraphs (introduction, overview, two body paragraphs)'}.`);
  if (sentences.length && complex / sentences.length < 0.35) advice.push('<b>Grammatical range:</b> fewer than a third of your sentences are complex. Add clauses with although, which, because, if, whereas.');
  if (avg > 32) advice.push('<b>Long sentences:</b> your average sentence is very long, which increases errors. Mix in some shorter sentences.');
  if (linkersUsed.length < 4) advice.push('<b>Cohesion:</b> use a wider range of linking words (see Vocabulary → Linking words).');
  if (contractions.length && !letter) advice.push(`<b>Formality:</b> avoid contractions in academic writing: ${[...new Set(contractions.map(c => c.toLowerCase()))].join(', ')}.`);
  if (informal.length && !letter) advice.push(`<b>Informal words:</b> ${informal.join(', ')} – consider more academic alternatives (children, many / a great deal of, aspects / factors).`);
  if (repeated.length) advice.push(`<b>Repetition:</b> you repeat ${repeated.map(([w, c]) => `"${w}" (${c}×)`).join(', ')}. Use synonyms or pronouns.`);
  if (!advice.length) advice.push('No major structural issues detected. Now check accuracy and compare with the model answer.');
  return { words: words.length, sentences: sentences.length, paras, avg, complex, passive, linkersUsed, repeated, advice };
}
