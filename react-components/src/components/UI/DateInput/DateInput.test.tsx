import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DateInput from './DateInput';

describe('Date input', () => {
  let input: HTMLInputElement;
  let errorsArr: string[] = [];

  const setup = () => {
    const mock = jest.fn();
    const ref = { current: {} } as React.RefObject<HTMLInputElement>;
    render(<DateInput forwardRef={ref} errorsArr={errorsArr} errReset={mock} />);
    input = screen.getByTestId('date-input');
  };

  it('should render component', () => {
    setup();
    expect(input).toBeInTheDocument();
  });

  it('should select date', () => {
    setup();
    expect(input).toContainHTML('');
    userEvent.type(input, '2022-09-09');
    expect(input.value).toBe('2022-09-09');
  });

  it('should show required message', () => {
    errorsArr = ['date'];
    setup();
    expect(screen.getByText(/это поле не может быть пустым/i)).toBeInTheDocument();
  });

  it('should show invalid message', () => {
    errorsArr = ['date:invalid'];
    setup();
    expect(screen.getByText(/необходимо указать дату в будущем/i)).toBeInTheDocument();
  });
});
