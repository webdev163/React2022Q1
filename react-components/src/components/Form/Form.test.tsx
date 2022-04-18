import { render, screen, waitFor } from '@testing-library/react';
import Form from './Form';
import userEvent from '@testing-library/user-event';
import { mockInvalidForm, mockValidForm } from '../../tests/mockForm';

describe('Form card item', () => {
  let form: HTMLElement;
  let name: HTMLInputElement;
  let date: HTMLInputElement;
  let delivery: HTMLSelectElement;
  let image: HTMLInputElement;
  let agree: HTMLInputElement;
  let modal: HTMLElement | null;
  let button: HTMLElement;
  const mockInvalid = mockInvalidForm();
  const mockValid = mockValidForm();

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
    button = screen.getByRole('button', { name: /оформить заказ/i });
  };

  it('should render component', () => {
    setup();
    expect(form).toBeInTheDocument();
  });

  it("shouldn't submit invalid form", async () => {
    setup();
    let data = mockInvalid[0];
    userEvent.type(name, data.name);
    userEvent.type(date, data.date);
    userEvent.selectOptions(delivery, data.delivery);
    userEvent.upload(image, new File([data.image], 'example.png'));
    userEvent.click(button);
    await waitFor(() => {
      expect(modal).not.toBeInTheDocument();
    });

    data = mockInvalid[1];
    name.value = '';
    userEvent.type(name, data.name);
    userEvent.clear(date);
    userEvent.selectOptions(delivery, data.delivery);
    userEvent.upload(image, new File([data.image], 'example.png'));
    userEvent.click(agree);
    userEvent.click(button);
    await waitFor(() => {
      expect(modal).not.toBeInTheDocument();
    });

    data = mockInvalid[2];
    userEvent.clear(name);
    userEvent.type(date, data.date);
    userEvent.selectOptions(delivery, data.delivery);
    userEvent.upload(image, new File([data.image], 'example.png'));
    userEvent.click(agree);
    userEvent.click(button);
    await waitFor(() => {
      expect(modal).not.toBeInTheDocument();
    });
  });

  it('should submit valid form', async () => {
    setup();
    const data = mockValid;
    userEvent.type(name, data.name);
    userEvent.type(date, data.date);
    userEvent.selectOptions(delivery, data.delivery);
    userEvent.upload(image, new File([data.image], 'example.png'));
    expect(image.files).toHaveLength(1);
    userEvent.click(agree);
    userEvent.click(button);
    await waitFor(() => {
      expect(screen.getByText(/Заказ успешно создан!/i)).toBeInTheDocument();
    });
  });
});
