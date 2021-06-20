import { useRouter } from 'next/router';
import FocusTrap from 'focus-trap-react';
import DesktopDetails from './DesktopDetails';
import MobileDetails from './MobileDetails';
import type { PlantType } from 'components/PlantFiche/PlantFiche';
import { useWindowSize } from 'utils/useWindowSize';

export type PlantDetailsType = Readonly<{
  plant: PlantType;
  onKeyDown?: (event: React.KeyboardEvent) => void;
}>;

export default function PlantDetailsFacade({ plant }: PlantDetailsType) {
  const { isMobile } = useWindowSize();
  const router = useRouter();

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Escape') {
      router.push('/');
    }
  }

  return (
    <FocusTrap active={isMobile !== undefined}>
      <div className="bg-white fixed top-0 left-0 w-full h-screen z-10">
        {isMobile === false ? (
          <DesktopDetails plant={plant} onKeyDown={handleKeyDown} />
        ) : (
          <MobileDetails plant={plant} />
        )}
      </div>
    </FocusTrap>
  );
}
