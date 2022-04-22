import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
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
  let input: HTMLInputElement;

  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
    jest.clearAllMocks();
  });

  beforeEach(() => {
    render(
      <AppProvider>
        <MemoryRouter initialEntries={['/']}>
          <AppRouter />
        </MemoryRouter>
      </AppProvider>
    );
    window.scrollTo = jest.fn();
    input = screen.getByPlaceholderText(/Поиск/i);
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

  it('should open article page', async () => {
    await waitForElementToBeRemoved(() => screen.getByTestId('loader'));
    expect(input).toContainHTML('');
    userEvent.type(input, 'california');
    expect(input).toContainHTML('california');

    const button = screen.getByRole('button', {
      name: /find/i,
    });
    userEvent.click(button);
    const loader = await screen.findByTestId('loader');
    await waitForElementToBeRemoved(loader);
    const cards = await screen.findAllByRole('listitem');
    const card = cards[0];
    userEvent.click(card);

    let articlePage;

    await waitFor(() => {
      articlePage = screen.getByTestId('article-page');
    });

    expect(articlePage).toBeInTheDocument();

    expect(articlePage).toContainHTML(mockedResponse.response.results[0].fields.standfirst);
    expect(articlePage).toContainHTML(mockedResponse.response.results[0].fields.shortUrl);

    const goBackButton = screen.getByRole('button', {
      name: /go back/i,
    });

    userEvent.click(goBackButton);

    expect(await screen.findByTestId('main-page')).toBeInTheDocument();
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
