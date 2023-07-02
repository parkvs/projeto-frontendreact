import React from 'react';
import { FilterDiv } from './FiltersStyle';

const Filters = ({ 
  minFilter,
  setMinFilter,
  maxFilter,
  setMaxFilter,
  searchFilter,
  setSearchFilter, 
  handleMinFilter,
  handleMaxFilter,
  handleSearchFilter
}) => {

  

  return (
    <>
      <FilterDiv>
        <h2>Filters</h2>
        <br />
        <form action="#">
          <label htmlFor="valorMinimo">Valor mínimo:</label>
          <br />
          <input type="number" id='valorMinimo' value={minFilter} onChange={handleMinFilter} />
          <br />
          <br />
          <label htmlFor="valorMaximo">Valor máximo:</label>
          <br />
          <input type="number" id='valorMaximo' value={maxFilter} onChange={handleMaxFilter} />
          <br />
          <br />
          <label htmlFor="buscaPorNome">Busca por nome:</label>
          <br />
          <input type="text" name="" id="buscaPorNome" value={searchFilter} onChange={handleSearchFilter} />
          <br />
          <br />
        </form>
      </FilterDiv>
    </>
  );
};

export default Filters;