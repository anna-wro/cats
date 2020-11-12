import Head from 'next/head';
import Layout from '../components/Layout/Layout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cats</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>Hello fellows</h1>
        <p> Hello cats</p>
      </Layout>
    </div>
  );
}
