import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';
import '@testing-library/jest-dom';

describe('Sétimo Requisito', () => {
  it('As informações detalhadas do Pokémon selecionado são mostradas na tela.', () => {
    renderWithRouter(<App />);
    const maisDetalhes = screen.getByRole('link', { name: /more details/i });
    userEvent.click(maisDetalhes);

    const pokemonDetail = screen.getByRole('heading', { name: /details/i });
    expect(pokemonDetail).toHaveTextContent('Pikachu Details');

    expect(maisDetalhes).not.toBeInTheDocument();

    const summary = screen.getByRole('heading', { name: /summary/i });
    expect(summary).toHaveTextContent('Summary');

    const details = screen.getByText(/this intelligent pokémon roasts hard berries with/i)
    expect(details).toBeInTheDocument();
  });
  it('Existe na página uma seção com os mapas', () => {
    renderWithRouter(<App />);
    const maisDetalhes = screen.getByRole('link', { name: /more details/i });
    userEvent.click(maisDetalhes);

    const pokemonLocation = screen.getByRole('heading', { name: /Game Locations of/i });
    expect(pokemonLocation).toHaveTextContent('Game Locations of Pikachu');

    const locations = screen.getAllByAltText(/location/i);
    expect(locations.length).toBe(2);
    expect(locations[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(locations[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  });
  it('O usuário pode favoritar um pokémon através da página de detalhes.', () => {
    renderWithRouter(<App />);
    const maisDetalhes = screen.getByRole('link', { name: /more details/i });
    userEvent.click(maisDetalhes);

    const checkbox = screen.getByRole('checkbox');
    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();

    const checkboxText = screen.getByLabelText(/Pokémon favoritado?/i);
    expect(checkboxText).toBeInTheDocument();
  });
});
