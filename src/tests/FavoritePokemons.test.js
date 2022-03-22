import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { FavoritePokemons } from '../components';
import renderWithRouter from './renderWithRouter';

describe('Terceiro Requisito', () => {
  it('É exibido na tela a mensagem No favorite pokemon found', () => {
    renderWithRouter(<FavoritePokemons />);
    const paragraph = screen.getByText(/no favorite pokemon/i);
    expect(paragraph).toBeInTheDocument();
  });
  it('É exibido todos os cards de pokémons favoritados.', () => {
    renderWithRouter(<App />);
    const maisDetalhes = screen.getByRole('link', { name: /more details/i });
    userEvent.click(maisDetalhes);
    const checkbox = screen.getByRole('checkbox');
    userEvent.click(checkbox);
    const linkFavorite = screen.getByRole('link', { name: /favorite pokémons/i });
    userEvent.click(linkFavorite);
    const pokemonName = screen.getByTestId('pokemon-name');
    expect(pokemonName).toBeInTheDocument();
  });
});
