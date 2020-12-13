import React from 'react';
import { render, screen } from '@testing-library/react';
import PlantFiche from './PlantFiche';

describe('<PlantFiche>', () => {
  test('renders correctly', () => {
    render(
      <PlantFiche
        plant={{
          isSafe: false,
          slug: 'fiolek',
          name: { pl: ['Fiołek'], en: [], lat: '' },
          thumbnailID: '256'
        }}
      />,
    );

    expect(screen.getByText(/fiołek/i)).toBeInTheDocument();
  });
});
