import '../public/styles/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/providers/theme-providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'companion',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('bg-secondary/50', inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
