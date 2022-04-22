import { render, screen, within } from '@testing-library/react';
import CardList from './CardList';
import { mockGuardianResponse } from '../../tests/mockGuardianResponse';
import { MemoryRouter } from 'react-router-dom';

describe('Card item', () => {
  let list: HTMLElement;
  const testData = mockGuardianResponse().response.results;
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <CardList dataArr={testData} />
      </MemoryRouter>
    );
    list = screen.getByTestId('card-list');
  });

  it('should render component', () => {
    expect(list).toBeInTheDocument();
  });

  it('should render correct number of items', () => {
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(testData.length);
  });
});
