import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DeliverySelect from './DeliverySelect';

describe('Delivery select', () => {
  let select: HTMLSelectElement;
  let errorsArr: string[] = [];

  const setup = () => {
    const mock = jest.fn();
    const ref = { current: {} } as React.RefObject<HTMLSelectElement>;
    render(<DeliverySelect forwardRef={ref} errorsArr={errorsArr} errReset={mock} />);
    select = screen.getByRole('combobox');
  };

  it('should render component', () => {
    setup();
    expect(select).toBeInTheDocument();
  });

  it('should select option', () => {
    setup();
    expect(select.value).toBe('default');
    userEvent.selectOptions(select, screen.getByRole('option', { name: /самовывоз/i }));
    expect(select.value).toBe('самовывоз');
  });

  it('should show required message', () => {
    errorsArr = ['delivery'];
    setup();
    expect(screen.getByText(/это поле не может быть пустым/i)).toBeInTheDocument();
  });
});
