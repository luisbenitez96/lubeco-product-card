import React from 'react';
import { ProductTitle, ProductCard } from '../../src/components';
import { render } from '@testing-library/react';
import { product1 } from '../data/products';

describe('ProducTitle', () => {
  test('debe mostrar el componente con el título personalizado', () => {
    const wrapper = render(<ProductTitle title="Hola mundo" />);

    expect(wrapper.container.innerHTML).toMatchSnapshot();
  });

  test('debe de mostrar el componente con el nombre del producto', () => {
    const wrapper = render(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );

    expect(wrapper.container.innerHTML).toMatchSnapshot();
  });
});
