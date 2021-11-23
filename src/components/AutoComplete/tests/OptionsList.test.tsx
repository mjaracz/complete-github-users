import { render } from '@testing-library/react';
import { OptionsList } from '../OptionsList';

describe('<OptionsList />', () => {
  let testedGetBeTestId;
  beforeEach(() => {
    const { getByTestId } = render(
      <OptionsList
        options={[{ login: 'example' }]}
        showOptions={true}
        optionKey="login"
        onClickOption={jest.fn}
      />
    );
    testedGetBeTestId = getByTestId;
  });
  it('should render options list ul element', () => {
    expect(testedGetBeTestId('autoComplete__optionsList')).toBeInTheDocument();
  });
  it('should render options item li element', () => {
    expect(testedGetBeTestId('optionsList__item')).toBeInTheDocument();
  });
});
