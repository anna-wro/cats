import Head from 'next/head';
import Navigation from '../components/Navigation';
import PlantsFacade from '../components/Plants/PlantsFacade';

export default function Home({ plants }) {
  return (
    <div>
      <Head>
        <title>Rośliny dla kota</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div className="max-w-7xl mx-auto px-20 pb-24">
        <PlantsFacade />
      </div>
    </div>
  );
}
