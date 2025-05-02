import 'react-app-polyfill/ie11';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const product = {
  id: '1',
  title: 'Coffee Mug - Card!',
  // img: './coffee-mug.png',
};
const App = () => {
  return (
    <>
      <ProductCard
        product={product}
        initialValue={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, count, maxCount, isMaxCountReached, increaseBy }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
