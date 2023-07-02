import React from 'react'
import { NomeItemDiv } from './NomeItemStyle';

const NomeItem = ({ productList, handleCart }) => {
  const addToCart = () =>{
    handleCart(productList)
  }

  return (
    <NomeItemDiv>
      <p>{productList.name}</p>
      <br />
      <br />
      <p>R$ {productList.value}</p>
      <br />
      <br />
      <button id='buttonCarrinho' onClick={addToCart}>
        Adicionar ao Carrinho
      </button>
    </NomeItemDiv>
  );
};


export default NomeItem