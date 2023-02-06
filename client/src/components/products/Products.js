import React, { useEffect, useState } from 'react';
import HttpService from '../../services/HttpService';
import { httpUrl } from '../../utils/consts';
import ProductItem from './helpers/price/ProductItem';
import './Products.scss';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    try {
      HttpService.get(httpUrl + '/products/getPriceByBundle/?bundle=*&currency=EUR', true).then(({ data }) => {
        setProducts(data);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <section className='wrap-prices-section'>
      <div className='container'>
        <div className='wrap-prices'>
          {products?.map((product, i) => {
            return (
              <ProductItem
                key={`${product.bundleName}-${i}`}
                bundleName={product.bundleName}
                productPricingInfo={product}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
