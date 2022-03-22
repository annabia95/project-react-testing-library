import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Primeiro Requisito', () => {
  it('O topo da aplicação contém um conjunto fixo de links de navegação', () => {
    renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', { name: /home/i });
    const linkAbout = screen.getByRole('link', { name: /about/i });
    const linkFavorite = screen.getByRole('link', { name: /favorite pokémons/i });
    expect(linkHome).toBeDefined();
    expect(linkAbout).toBeDefined();
    expect(linkFavorite).toBeDefined();
  });
  it('A aplicação é redirecionada para a página inicial ao clicar no link Home', () => {
    const { history } = renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', { name: /home/i });
    userEvent.click(linkHome);
    expect(history.location.pathname).toBe('/');
  });
  it('A aplicação é redirecionada para a página sobre ao clicar no link About', () => {
    const { history } = renderWithRouter(<App />);
    const linkAbout = screen.getByRole('link', { name: /about/i });
    userEvent.click(linkAbout);
    expect(history.location.pathname).toBe('/about');
  });
  it('A aplicação é redirecionada para a página inicial ao clicar no link Home', () => {
    const { history } = renderWithRouter(<App />);
    const linkFavorite = screen.getByRole('link', { name: /favorite pokémons/i });
    userEvent.click(linkFavorite);
    expect(history.location.pathname).toBe('/favorites');
  });
});
