export type PlantType = {
    slug: string;
    name: {
      pl: string;
      lat: string;
    };
    isSafe: boolean;
    img: string;
  };
  
  export default function PlantList({plant} : {plant: PlantType}) {
    return (
          <div className="pb-3">
            {plant.name.pl} {plant.isSafe ? '✅' : '🍄'}
          </div>
    );
  }
  