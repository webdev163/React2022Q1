import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchForm from './SearchForm';

describe('Search form', () => {
  let input: HTMLInputElement;
  beforeEach(() => {
    render(<SearchForm />);
    input = screen.getByPlaceholderText(/Поиск/i);
  });

  it('should render component', () => {
    expect(input).toBeInTheDocument();
  });

  it('should input focus', () => {
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });

  it('should input type', () => {
    expect(input).toContainHTML('');
    userEvent.type(input, 'Test query');
    expect(input).toContainHTML('Test query');
  });
});
