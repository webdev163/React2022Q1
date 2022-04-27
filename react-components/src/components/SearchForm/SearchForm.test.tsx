import { render, screen } from '@testing-library/react';
import SearchForm from './SearchForm';
import { Provider } from 'react-redux';
import { store } from '../../store';

describe('Search form', () => {
  let input: HTMLInputElement;
  beforeEach(() => {
    const mock = jest.fn();
    render(
      <Provider store={store}>
        <SearchForm setQuery={mock} setSorting={mock} setPage={mock} setItemsPerPage={mock} />
      </Provider>
    );
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
