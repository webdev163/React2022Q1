import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import mockLocalStorage from './tests/mockLocalStorage';
import { AppProvider } from './context/AppContext';

const { getItemMock, setItemMock } = mockLocalStorage();

import { mockGuardianResponse } from './tests/mockGuardianResponse';

import { rest } from 'msw';
import { setupServer } from 'msw/node';

const mockedResponse = mockGuardianResponse();

describe('App', () => {
  const server = setupServer(
    rest.get(`https://content.guardianapis.com/search`, (req, res, ctx) => {
      return res(ctx.json(mockedResponse));
    })
  );

  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  beforeEach(() => {
    render(
      <AppProvider>
        <MemoryRouter initialEntries={['/']}>
          <AppRouter />
        </MemoryRouter>
      </AppProvider>
    );
  });

  afterEach(() => {
    server.resetHandlers();
  });

  it('should render app component', () => {
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });

  it('should change pages', async () => {
    await waitForElementToBeRemoved(() => screen.getByTestId('loader'));
    const mainLink = screen.getByTestId('main-link');
    const aboutLink = screen.getByTestId('about-link');
    userEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
    userEvent.click(mainLink);
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });
});

describe('Error page', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/wrong-url']}>
        <AppRouter />
      </MemoryRouter>
    );
  });

  it('should show error 404 page', () => {
    expect(screen.getByTestId('error-page')).toBeInTheDocument();
  });
});

describe('Local storage', () => {
  let input: HTMLInputElement;
  const key = 'webdev163-search-query';
  const value = 'Test query';

  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppRouter />
      </MemoryRouter>
    );
    input = screen.getByPlaceholderText(/Поиск/i);
  });

  it('should save/read input value to/from localstorage', () => {
    expect(input).toContainHTML('');
    userEvent.type(input, value);
    expect(input).toContainHTML(value);
    const aboutLink = screen.getByTestId('about-link');
    const button = screen.getByRole('button', {
      name: /find/i,
    });
    userEvent.click(button);
    userEvent.click(aboutLink);
    expect(setItemMock).toHaveBeenCalledWith(key, value);

    const mainLink = screen.getByTestId('main-link');
    userEvent.click(mainLink);
    expect(getItemMock).toHaveBeenCalledWith(key);
  });
});
