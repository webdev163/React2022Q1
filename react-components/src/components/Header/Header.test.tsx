import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from '../../router/AppRouter';
import { Provider } from 'react-redux';
import { store } from '../../store';

describe('Header', () => {
  let mainLink: HTMLElement;
  let aboutLink: HTMLElement;
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <AppRouter />
        </MemoryRouter>
      </Provider>
    );
    mainLink = screen.getByTestId('main-link');
    aboutLink = screen.getByTestId('about-link');
  });

  it('should render component', () => {
    expect(mainLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });
});
