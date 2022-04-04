import { render, screen } from '@testing-library/react';
import Modal from './Modal';

describe('Modal', () => {
  let modal: HTMLElement | null;
  let isActive = true;
  const setup = () => {
    const mock = jest.fn();
    render(<Modal isActive={isActive} toggleModalActive={mock} />);
    modal = screen.queryByText(/заказ успешно создан/i);
  };

  it('should render component', () => {
    setup();
    expect(modal).toBeInTheDocument();
  });

  it("shouldn't render component while inactive", () => {
    isActive = false;
    setup();
    expect(modal).not.toBeInTheDocument();
  });
});
