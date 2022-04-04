import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AgreeCheckbox from './AgreeCheckbox';

describe('Agree checkbox', () => {
  let checkbox: HTMLInputElement;
  let errorsArr: string[] = [];
  const setup = () => {
    const mock = jest.fn();
    const ref = { current: {} } as React.RefObject<HTMLInputElement>;
    render(<AgreeCheckbox forwardRef={ref} errorsArr={errorsArr} errReset={mock} />);
    checkbox = screen.getByRole('checkbox');
  };

  it('should render component', () => {
    setup();
    expect(checkbox).toBeInTheDocument();
  });

  it('should switch checked status', () => {
    setup();
    expect(checkbox.checked).toEqual(false);
    userEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
  });

  it('should show required message', () => {
    errorsArr = ['agree'];
    setup();
    expect(
      screen.getByText(/необходимо согласиться с обработкой персональных данных/i)
    ).toBeInTheDocument();
  });
});
