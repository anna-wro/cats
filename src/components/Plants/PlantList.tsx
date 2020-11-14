type PlantType = {
  slug: string;
  name: {
    pl: string;
    lat: string;
  };
  isSafe: boolean;
  img: string;
};

type PlantGroupType = {
  [key: string]: PlantType;
};

export default function PlantList({ plants }: PlantGroupType) {
  // FIXME: Property 'map' does not exist on type 'PlantType'
  return (
    <>
      {plants.map((plant, index) => (
        <div key={index}>
          {plant.name.pl} - {plant.isSafe ? 'is safe' : 'is toxic'}
        </div>
      ))}
    </>
  );
}
