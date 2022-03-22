import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Sexto Requisito', () => {
  it('É renderizado um card com as informações de determinado pokémon', () => {
    renderWithRouter(<App />);
    const pokemonName = screen.getByTestId('pokemon-name');
    expect(pokemonName).toHaveTextContent('Pikachu');
    const pokemonType = screen.getByTestId('pokemon-type');
    expect(pokemonType).toHaveTextContent('Electric');
    const pokemonWeight = screen.getByTestId('pokemon-weight');
    expect(pokemonWeight).toHaveTextContent('Average weight: 6.0 kg');
    const img = screen.getByAltText(/sprite/i);
    expect(img).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });
  it('O card contém um link de navegação para exibir detalhes', () => {
    const { history } = renderWithRouter(<App />);
    const maisDetalhes = screen.getByRole('link', { name: /more details/i });
    userEvent.click(maisDetalhes);
    expect(history.location.pathname).toBe('/pokemons/25');
  });
  it('Existe um ícone de estrela nos Pokémons favoritados.', () => {
    renderWithRouter(<App />);
    const maisDetalhes = screen.getByRole('link', { name: /more details/i });
    userEvent.click(maisDetalhes);
    const checkbox = screen.getByRole('checkbox');
    userEvent.click(checkbox);
    const img = screen.getByAltText(/is marked as favorite/i);
    expect(img).toHaveAttribute('src', '/star-icon.svg');
  });
});
