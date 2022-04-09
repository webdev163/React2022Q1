import { render, screen } from '@testing-library/react';
import FormModal from './FormModal';

describe('FormModal', () => {
  let modal: HTMLElement | null;
  let isActive = true;
  const setup = () => {
    const mock = jest.fn();
    render(<FormModal isActive={isActive} toggleModalActive={mock} />);
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
