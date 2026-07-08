import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'payswift — Next-Gen Payment Infrastructure', description: 'Next-Gen Payment Infrastructure' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang=\"en\"><body>{children}</body></html>;
}
