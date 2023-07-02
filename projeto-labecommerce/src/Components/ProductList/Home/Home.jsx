import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import {
  DivNomeEProduct,
  ParagrafoEProduct,
  QuantidadeOrdenacao,
} from "./HomeStyle";

const Home = ({
  productList,
  ordination,
  setOrdination,
  handleOrdination,
  handleCart,
}) => {
  return (
    <>
      <ParagrafoEProduct>
        <QuantidadeOrdenacao>
          <p>Quantidade de Produtos:</p>
          <label htmlFor="ordenacao">
            Ordenação:
            <br />
            <select
              name="ordenacao"
              id="ordenacao"
              value={ordination}
              onChange={handleOrdination}
            >
              <option value="crescente">Crescente</option>
              <option value="decrescente">Decrescente</option>
            </select>
          </label>
        </QuantidadeOrdenacao>

        <DivNomeEProduct>
          {productList.map((item) => {
            return (
              <ProductCard
                key={item.cod}
                productList={item}
                handleCart={handleCart}
              />
            );
          })}
        </DivNomeEProduct>
      </ParagrafoEProduct>
    </>
  );
};

export default Home;
