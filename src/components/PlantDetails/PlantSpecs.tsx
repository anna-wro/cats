import type { PlantType } from 'components/PlantFiche/PlantFiche';
import SafetyBadge from 'components/SafetyBadge/SafetyBadge';
import { makeStartCase } from 'utils/text';

type PlantDetailsType = Readonly<{ plant: PlantType }>;

export default function PlantSpecs({ plant }: PlantDetailsType) {
  const accentColor =
    plant.danger === 0 ? 'blue' : plant.danger === 3 ? 'red' : 'orange';

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className={`mr-8 section-headline--${accentColor}`}>
          <div className="text-dark text-2xl">
            {makeStartCase(plant.name.pl[0])}
          </div>
          <div className={`text-sm text-${accentColor} font-bold`}>
            Ta roślina jest {plant.danger === 0 ? 'bezpieczna' : 'trująca'}
          </div>
        </div>
        <SafetyBadge danger={plant.danger} />
      </div>
      <div className="mb-4 mt-7">
        <div className="section-name">Zagrożenie</div>
        <img src={`/chart-${plant.danger}.svg`} />
      </div>
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
