import React from 'react';
import { render, screen } from '@testing-library/react';
import PlantFiche from './PlantFiche';

describe('<PlantFiche>', () => {
  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  test('renders correctly', () => {
    render(
      <PlantFiche
        plant={{
          danger: 0,
          slug: 'fiolek',
          name: { pl: ['Fiołek'], en: [], lat: '' },
          imageID: ['256'],
        }}
      />,
    );

    expect(screen.getByText(/fiołek/i)).toBeInTheDocument();
  });
});
