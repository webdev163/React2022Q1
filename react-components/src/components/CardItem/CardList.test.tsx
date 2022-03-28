import { render, screen } from '@testing-library/react';
import CardItem from './CardItem';
import data from '../../assets/data/db.json';

describe('Card list', () => {
  let item: HTMLElement;
  const testData = data[0];
  beforeEach(() => {
    render(
      <CardItem
        id={testData.id}
        title={testData.title}
        ingredients={testData.ingredients}
        price={testData.price}
        weight={testData.weight}
        ccal={testData.ccal}
      />
    );
    item = screen.getByRole('listitem');
  });

  it('should render component', () => {
    expect(item).toBeInTheDocument();
  });
});
