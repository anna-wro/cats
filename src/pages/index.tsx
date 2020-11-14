import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import Navigation from '../components/Navigation';
import PlantList from '../components/Plants/PlantList';
import fs from 'fs';
import path from 'path';

export default function Home({ plants }) {
  return (
    <div>
      <Head>
        <title>Cats</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Layout>
        <h1>Hello fellows</h1>
        <p> Hello cats</p>
        <PlantList plants={plants} />
      </Layout>
    </div>
  );
}

const DATA_PATH = path.join(process.cwd(), 'src/data/plants');
const dataFilePaths = fs
  .readdirSync(DATA_PATH)
  .filter((path) => /\.json?$/.test(path));

export function getStaticProps() {
  const plants = dataFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(DATA_PATH, filePath));
    const obj = JSON.parse(source.toString());
    return obj;
  });
  return { props: { plants } };
}
