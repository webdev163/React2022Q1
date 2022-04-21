import { render, screen } from '@testing-library/react';
import SearchForm from './SearchForm';

describe('Search form', () => {
  let input: HTMLInputElement;
  beforeEach(() => {
    const mock = jest.fn();
    render(<SearchForm setQuery={mock} setSorting={mock} />);
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
});
