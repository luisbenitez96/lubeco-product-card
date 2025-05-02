import React from 'react';
import { ProductCard, ProductImage } from '../../src/components';
import { render } from '@testing-library/react';
import { product2 } from '../data/products';

describe('ProducImage', () => {
  test('debe mostrar el componente con la imagen del producto', () => {
    const wrapper = render(<ProductImage img="https://hola.jpg" />);

    expect(wrapper.container.innerHTML).toMatchSnapshot();
  });

  test('debe de mostrar el componente con el nombre del producto', () => {
    const wrapper = render(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );

    expect(wrapper.container.innerHTML).toMatchSnapshot();
  });
});
