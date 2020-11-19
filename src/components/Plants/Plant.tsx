export type PlantType = {
  name: {
    pl: string;
    lat: string;
  };
  isSafe: boolean;
};

export default function PlantList({ plant }: { plant: PlantType }) {
  return (
    <div className="pb-3">
      {plant.name.pl} {plant.isSafe ? '✅' : '🍄'}
    </div>
  );
}