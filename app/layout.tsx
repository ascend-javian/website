import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Ascend Jvian | Your everyday, connected', description: 'Discover Ascend Jvian: an app in development bringing payments, mobility, shopping, connectivity and entertainment together.' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
