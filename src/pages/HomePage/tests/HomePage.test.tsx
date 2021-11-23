import React from 'react';
import { render } from '@testing-library/react';
import { HomePage } from '../HomePage';
import { BrowserRouter } from 'react-router-dom';

describe('<HomePage />', () => {
  let testedGetBeTestId;
  beforeEach(() => {
    const { getByTestId } = render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    testedGetBeTestId = getByTestId;
  });
  test('should renders home page component', () => {
    expect(testedGetBeTestId('home')).toBeInTheDocument();
  });
  test('should renders header component', () => {
    expect(testedGetBeTestId('home__header')).toBeInTheDocument();
  });
  test('should renders logo component', () => {
    expect(testedGetBeTestId('header__logo')).toBeInTheDocument();
  });
  test('should renders link component', () => {
    expect(testedGetBeTestId('header__link')).toBeInTheDocument();
  });
});
