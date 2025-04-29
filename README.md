# Lubeco-Product-Card

Este es un paquete de despliegue NPM

### Luis Benitez

# Ejemplo

```

import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'lubeco-product-card'

```

```
 <ProductCard

        product={product}
        initialValue={{
          count: 4,
          maxCount: 10,
        }}>
        {({ reset, count, maxCount, isMaxCountReached, increaseBy }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
```
