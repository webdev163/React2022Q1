import { render, screen, within } from '@testing-library/react';
import CardList from './CardList';
import data from '../../assets/data/db.json';

describe('Card list', () => {
  let list: HTMLElement;
  beforeEach(() => {
    render(<CardList />);
    list = screen.getByTestId('card-list');
  });

  it('should render component', () => {
    expect(list).toBeInTheDocument();
  });

  it('should render correct number of items', () => {
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(data.length);
  });
});
