import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NameInput from './NameInput';

describe('Name input', () => {
  let input: HTMLInputElement;
  let errorsArr: string[] = [];

  const setup = () => {
    const mock = jest.fn();
    const ref = { current: {} } as React.RefObject<HTMLInputElement>;
    render(<NameInput forwardRef={ref} errorsArr={errorsArr} errReset={mock} />);
    input = screen.getByRole('textbox', { name: /имя:/i });
  };

  it('should render component', () => {
    setup();
    expect(input).toBeInTheDocument();
  });

  it('should input focus', () => {
    setup();
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });

  it('should input type', () => {
    setup();
    expect(input).toContainHTML('');
    userEvent.type(input, 'Test query');
    expect(input.value).toBe('Test query');
  });

  it('should show required message', () => {
    errorsArr = ['name'];
    setup();
    expect(screen.getByText(/это поле не может быть пустым/i)).toBeInTheDocument();
  });

  it('should show short name error message', () => {
    errorsArr = ['name:short'];
    setup();
    expect(screen.getByText(/это поле не может быть менее 3 символов/i)).toBeInTheDocument();
  });

  it('should show invalid name error message', () => {
    errorsArr = ['name:invalid'];
    setup();
    expect(screen.getByText(/поле содержит недопустимые символы или цифры/i)).toBeInTheDocument();
  });
});
