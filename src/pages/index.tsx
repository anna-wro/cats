import Head from 'next/head';
import Navigation from '../components/Navigation';
import PlantList from '../components/Plants/PlantList';
import fs from 'fs';
import path from 'path';

export default function Home({ plants }) {
  return (
    <div>
      <Head>
        <title>Hello cats</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div className="max-w-4xl mx-auto">
        <p className="text-xl text-green-500 mb-4">Hello cats</p>
        <PlantList plants={plants} />
      </div>
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
