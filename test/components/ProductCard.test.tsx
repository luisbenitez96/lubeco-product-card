import React from 'react';
import { ProductCard } from '../../src/components';
import { fireEvent, render } from '@testing-library/react';
import { product1 } from '../data/products';

describe('ProducImage', () => {
  test('debe mostrar el componente con la imagen del producto', () => {
    const wrapper = render(
      <ProductCard product={product1}>
        {() => <h1>Peroduct Card</h1>}
      </ProductCard>
    );

    expect(wrapper.container.innerHTML).toMatchSnapshot();
  });

  test('debe incrementar el contador', () => {
    const wrapper = render(
      <ProductCard product={product1}>
        {({ count, increaseBy }) => (
          <>
            <h1>Product Card</h1>
            <span>{count}</span>
            <button onClick={() => increaseBy(1)}></button>
          </>
        )}
      </ProductCard>
    );

    let tree = wrapper.container.innerHTML;
    expect(tree).toMatchSnapshot();

    const button = wrapper.getByRole('button');
    fireEvent.click(button);
    tree = wrapper.container.innerHTML;
    expect(tree.match(/<span>(\d+)<\/span>/)?.[1]).toBe('1');

    // extrae solo el numero dentro del span, la funcion match devuelve un array, el
    //  primer elemento es el string completo y el segundo es el grupo que le
    //  pasamos entre parentesis, (\d+) es el grupo que queremos extraer, que es el
    //  numero dentro del span, el ? significa que el grupo es opcional, si no hay
    //  coincidencia devuelve null
  });
});
