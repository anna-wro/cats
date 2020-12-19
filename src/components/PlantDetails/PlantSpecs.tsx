import type { PlantType } from 'components/PlantFiche/PlantFiche';
import { makeStartCase } from 'utils/text';

type PlantDetailsType = Readonly<{ plant: PlantType }>;

export default function PlantSpecs({ plant }: PlantDetailsType) {
  return (
    <div>
      {plant.symptoms && (
        <div className="mb-4">
          <div className="section-name">Objawy</div>
          <div className="section-content">{makeStartCase(plant.symptoms)}</div>
        </div>
      )}
      {plant.note && (
        <div className="mb-4">
          <div className="section-name">Info</div>
          <div className="section-content">{makeStartCase(plant.note)}</div>
        </div>
      )}
      <div className="mb-4">
        <div className="section-name">PL</div>
        {plant.name.pl.map((name) => {
          return (
            <div key={name} className="section-content">
              {makeStartCase(name)}
            </div>
          );
        })}
      </div>
      <div className="mb-4">
        <div className="section-name">EN</div>
        {plant.name.en.map((name) => {
          return (
            <div key={name} className="section-content">
              {makeStartCase(name)}
            </div>
          );
        })}
      </div>
      <div className="mb-4">
        <div className="section-name">LAT</div>
        <div className="section-content">{makeStartCase(plant.name.lat)}</div>
      </div>
    </div>
  );
}
