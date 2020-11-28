import usePlantPics from './usePlantPics';

export type PlantType = {
  name: {
    pl: string[];
    en: string[];
    lat: string;
  };
  isSafe: boolean;
};

export default function Plant({ plant }: { plant: PlantType }) {
  const photos = usePlantPics(plant.name.en[0]);
  console.log(photos);

  return (
    <div className="pb-3">
      {plant.name.pl[0]} {plant.isSafe ? '✅' : '🍄'}
    </div>
  );
}
