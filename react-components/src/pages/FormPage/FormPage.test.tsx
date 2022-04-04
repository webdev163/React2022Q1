import { render, screen } from '@testing-library/react';
import FormPage from './FormPage';

describe('Form page', () => {
  let form: HTMLElement;

  const setup = () => {
    render(<FormPage />);
    form = screen.getByTestId('form-page');
  };

  it('should render page', () => {
    setup();
    expect(form).toBeInTheDocument();
  });
});
