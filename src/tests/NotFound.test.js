import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../components/NotFound';
import renderWithRouter from './renderWithRouter';

describe('Quarto Requisito', () => {
  it('A página contém um heading h2 com o texto Page requested not found', () => {
    renderWithRouter(<NotFound />);
    const title = screen.getByRole('heading', { name: /Page requested not found/i });
    expect(title).toBeInTheDocument();
  });
  it('A página página mostra a imagem ', () => {
    renderWithRouter(<NotFound />);
    const img = screen.getByRole('img', { name: /Pikachu crying because the page/i });
    expect(img).toBeInTheDocument();
    expect(img.src).toContain('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
