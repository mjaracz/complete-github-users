import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { SearchingPage } from '../SearchingPage';

describe('<SearchingPage />', () => {
  let testedGetBeTestId;
  beforeEach(() => {
    const { getByTestId } = render(
      <BrowserRouter>
        <SearchingPage />
      </BrowserRouter>
    );
    testedGetBeTestId = getByTestId;
  });
  test('should renders searching page component', () => {
    expect(testedGetBeTestId('searchingPage--container')).toBeInTheDocument();
  });
  test('should renders loader component', () => {
    expect(testedGetBeTestId('searchingPage__loader')).toBeInTheDocument();
  });
});
