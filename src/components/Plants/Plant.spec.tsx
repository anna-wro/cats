import React from 'react';
import { render, screen } from '@testing-library/react';
import Plant from './Plant';

describe('<Plant>', () => {
  test('renders correctly', () => {
    render(
      <Plant
        plant={{
          isSafe: false,
          slug: 'fiolek',
          name: { pl: ['Fiołek'], en: [], lat: '' },
        }}
      />,
    );

    expect(screen.getByText(/fiołek/i)).toBeInTheDocument();
  });
});
