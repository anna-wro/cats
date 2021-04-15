import type { PlantType } from 'components/PlantFiche/PlantFiche';
import DesktopDetails from './DesktopDetails';
import MobileDetails from './MobileDetails';
import { useWindowSize } from 'utils/useWindowSize';

export type PlantDetailsType = Readonly<{ plant: PlantType }>;

export default function PlantDetailsFacade({ plant }: PlantDetailsType) {
  const { isMobile } = useWindowSize();

  return (
    <div className="bg-white fixed top-0 left-0 w-full h-screen z-10">
      {isMobile === false ? (
        <DesktopDetails plant={plant} />
      ) : (
        <MobileDetails plant={plant} />
      )}
    </div>
  );
}
