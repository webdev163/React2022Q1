import { render, screen, within } from '@testing-library/react';
import FormCardList from './FormCardList';
import { mockValidForm } from '../../tests/mockForm';
import { FormData } from '../../utils/types';

describe('Form card list', () => {
  const simgleRequest = mockValidForm() as FormData;
  const multipleRequest = new Array(3).fill(simgleRequest) as FormData[];
  let list: HTMLElement;
  let statesArr: FormData[] = [simgleRequest];

  const setup = () => {
    render(<FormCardList statesArr={statesArr} />);
    list = screen.getByTestId('form-card-list');
  };

  it('should render component', () => {
    setup();
    expect(list).toBeInTheDocument();
  });

  it('should render correct number of items', () => {
    statesArr = multipleRequest;
    setup();
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(statesArr.length);
  });
});
