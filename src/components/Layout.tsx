import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import { copy } from 'consts/copy';

export default function Layout({
  children,
  title = copy.title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex flex-col min-h-screen font-main text-dark">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover, shrink-to-fit=no"
        />
        <meta
          name="google-site-verification"
          content="zvDdSyW4U7kvunGhvL_U2pq0tjfLcz8m9QW079aSubk"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      {children}
      <Footer />
    </div>
  );
}
