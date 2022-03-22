import React from 'react';
import { screen } from '@testing-library/react';
import About from '../components/About';
import renderWithRouter from './renderWithRouter';

describe('Segundo Requisito', () => {
  it('A página contém um heading h2 com o texto About Pokédex.', () => {
    renderWithRouter(<About />);
    const title = screen.getByRole('heading', { name: /about pokédex/i });
    expect(title).toBeInTheDocument();
  });
  it('A página contém dois parágrafos com texto sobre a Pokédex.', () => {
    renderWithRouter(<About />);
    const firstParagrah = screen.getByText(/this application simulates a pokédex, a/i);
    expect(firstParagrah).toBeInTheDocument();
    const secondParagrah = screen.getByText(/one can filter Pokémons by type, and see/i);
    expect(secondParagrah).toBeInTheDocument();
  });
  it('A página contém a imagem de uma Pokédex:', () => {
    renderWithRouter(<About />);
    const img = screen.getByRole('img', { name: /pokédex/i });
    expect(img).toBeInTheDocument();
    expect(img.src).toContain('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
/* Referência para testar a URL: https://stackoverflow.com/questions/60509527/jestreact-native-testing-library-how-to-test-an-image-src */
