import { render, screen } from '@testing-library/react';
import CardItem from './CardItem';
import { mockGuardianResponse } from '../../tests/mockGuardianResponse';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store';

describe('Card item', () => {
  let item: HTMLElement;
  const testData = mockGuardianResponse().response.results[0];
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <CardItem data={testData} />
        </MemoryRouter>
      </Provider>
    );
    item = screen.getByRole('listitem');
  });

  it('should render component', () => {
    expect(item).toBeInTheDocument();
  });

  it('should render props correctly', () => {
    const { headline } = testData.fields;
    expect(item).toHaveTextContent(headline);
  });
});
