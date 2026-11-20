import type { Metadata, Viewport } from 'next';
import AppShell from '@/components/AppShell';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'IELTS Prep Studio', template: '%s | IELTS Prep Studio' },
  description: 'Complete IELTS preparation: every question type explained, original practice and mock tests, vocabulary, grammar, writing feedback and a speaking simulator.',
  icons: { icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='14' fill='%232563eb'/><text x='32' y='43' font-size='30' font-family='Arial' font-weight='bold' fill='white' text-anchor='middle'>IE</text></svg>" }
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1 };

// Applies the saved (or system) colour theme before the first paint.
const themeScript = `try{var t=localStorage.getItem('ielts:theme');t=t?JSON.parse(t):(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='light'}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body><AppShell>{children}</AppShell></body>
    </html>
  );
}
