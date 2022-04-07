import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchMain from './SearchMain';

describe('Search form', () => {
  let wrapper: HTMLElement;
  let input: HTMLInputElement;
  beforeEach(() => {
    render(<SearchMain />);
    input = screen.getByPlaceholderText(/Поиск/i);
    wrapper = screen.getByTestId('main-page');
  });

  it('should render component', () => {
    expect(wrapper).toBeInTheDocument();
  });

  it('should input type', () => {
    expect(input).toContainHTML('');
    userEvent.type(input, 'Test query');
    expect(input).toContainHTML('Test query');
  });
});
