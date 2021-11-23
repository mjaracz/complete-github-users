import { AutoComplete } from '../AutoComplete';
import { render } from '@testing-library/react';

describe('<AutoComplete/>', () => {
  let testedBaseElement;
  let testedGetBeTestId;
  beforeEach(() => {
    const { baseElement, getByTestId } = render(
      <AutoComplete options={[{ login: 'exmaple' }]} optionKey="login" />
    );
    testedBaseElement = baseElement;
    testedGetBeTestId = getByTestId;
  });
  it('should match the snapshot', () => {
    expect(testedBaseElement).toMatchSnapshot();
  });
  it('should render autoComplete', () => {
    expect(testedGetBeTestId('autoComplete')).toBeInTheDocument();
  });
  it('should render textField', () => {
    expect(testedGetBeTestId('autoComplete__textField')).toBeInTheDocument();
  });
});
