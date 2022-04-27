import { render, screen } from '@testing-library/react';
import FormPage from './FormPage';
import { Provider } from 'react-redux';
import { store } from '../../store';

describe('Form page', () => {
  let form: HTMLElement;

  const setup = () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    form = screen.getByTestId('form-page');
  };

  it('should render page', () => {
    setup();
    expect(form).toBeInTheDocument();
  });
});
