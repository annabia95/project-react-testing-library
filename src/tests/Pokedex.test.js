import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Quinto Requisito', () => {
  it('A página contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);
    const heading = screen.getByRole('heading', { name: /encountered pokémons/i });
    expect(heading).toBeInTheDocument();
  });
  it('É exibido o próximo Pokémon da lista ao clicar no botão Próximo Pokémon', () => {
    renderWithRouter(<App />);
    const bttnNext = screen.getByRole('button', { name: /próximo pokémon/i });
    expect(bttnNext).toBeInTheDocument();
  });
  it('Teste se é mostrado apenas um Pokémon por vez.', () => {
    renderWithRouter(<App />);
    const pokemonName = screen.getAllByTestId('pokemon-name');
    expect(pokemonName).toHaveLength(1);
  });
  it('A Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);
    const filtersNumber = 7;
    const bttnFilter = screen.getAllByTestId('pokemon-type-button');
    expect(bttnFilter).toHaveLength(filtersNumber);

    const bttnFire = screen.getByRole('button', { name: 'Fire' });
    expect(bttnFire).toBeInTheDocument();

    userEvent.click(bttnFire);
    const pokemonFire = screen.getByText('Charmander');
    expect(pokemonFire).toBeInTheDocument();

    const bttnAll = screen.getByRole('button', { name: /all/i });
    expect(bttnAll).toBeInTheDocument();
  });
  it('A Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);
    const bttnAll = screen.getByRole('button', { name: /all/i });
    expect(bttnAll).toBeInTheDocument();

    userEvent.click(bttnAll);

    const pokemonName = screen.getByTestId('pokemon-name');
    expect(pokemonName).toHaveTextContent('Pikachu');
  });
});
