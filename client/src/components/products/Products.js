import React, { useEffect, useState } from 'react';
import HttpService from '../../services/HttpService';
import { httpUrl } from '../../utils/consts';
import ProductItem from './helpers/price/ProductItem';
import './Products.scss';

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    HttpService.get(httpUrl + '/products/getPriceByBundle/?bundle=*&currency=usd').then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <section className='wrap-prices-section'>
      <div className='container'>
        <div className='wrap-prices'>
          {products?.map((product, i) => {
            return (
              <ProductItem
                key={product.bundleName + '-' + i}
                bundleName={product.bundleName}
                productPricingInfo={product}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
