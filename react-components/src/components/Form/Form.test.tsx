import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';
import userEvent from '@testing-library/user-event';
import { mockInvalidForm } from '../../tests/mockForm';

describe('Form card item', () => {
  let form: HTMLElement;
  let name: HTMLInputElement;
  let date: HTMLInputElement;
  let delivery: HTMLSelectElement;
  let image: HTMLInputElement;
  let agree: HTMLInputElement;
  let modal: HTMLElement | null;
  const mockInvalid = mockInvalidForm();

  const setup = () => {
    const mock = jest.fn();
    render(<Form setFormState={mock} />);
    form = screen.getByTestId('form');
    name = screen.getByRole('textbox', { name: /имя:/i });
    date = screen.getByTestId('date-input');
    delivery = screen.getByRole('combobox');
    image = screen.getByTestId('file-input');
    agree = screen.getByTestId('agree-checkbox');
    modal = screen.queryByText(/заказ успешно создан/i);
  };

  it('should render component', () => {
    setup();
    expect(form).toBeInTheDocument();
  });

  it("shouldn't submit invalid form", () => {
    setup();
    let data = mockInvalid[0];
    userEvent.type(name, data.name);
    userEvent.type(date, data.date);
    delivery.value = data.delivery;
    image.value = data.image;
    agree.checked = data.agree;
    fireEvent.submit(form);
    expect(modal).not.toBeInTheDocument();

    data = mockInvalid[1];
    name.value = '';
    userEvent.type(name, data.name);
    userEvent.clear(date);
    delivery.value = data.delivery;
    image.value = data.image;
    userEvent.click(agree);
    fireEvent.submit(form);
    expect(modal).not.toBeInTheDocument();

    data = mockInvalid[2];
    userEvent.clear(name);
    userEvent.type(date, data.date);
    delivery.value = data.delivery;
    image.value = data.image;
    userEvent.click(agree);
    fireEvent.submit(form);
    expect(modal).not.toBeInTheDocument();
  });
});
