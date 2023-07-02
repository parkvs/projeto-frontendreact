import React from 'react';
import { ProductDiv, ProductENomeColumn } from './ProductCardStyle';
import NomeItem from './NomeItem/NomeItem';

const ProductCard = ({ productList, handleCart}) => {

  const ProductName = 'ProductCard';


  return (
    <>
      <ProductENomeColumn>
        <ProductDiv>
          <img src={productList.imageUrl} alt="foto" />
        </ProductDiv>
        <NomeItem productList={productList} handleCart={handleCart}/>
      </ProductENomeColumn>



    </>
  );
};

export default ProductCard;