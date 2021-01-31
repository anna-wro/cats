import Head from 'next/head';
import Footer from './Footer';

export default function Layout({
  children,
  title = 'This is the default title',
}) {
  return (
    <div className="flex flex-col min-h-screen font-main text-dark">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover, shrink-to-fit=no"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Montserrat:wght@300;400;500;600;700&family=Nunito:wght@900&display=swap"
          rel="stylesheet"
        />
      </Head>
      {children}
      <Footer />
    </div>
  );
}
