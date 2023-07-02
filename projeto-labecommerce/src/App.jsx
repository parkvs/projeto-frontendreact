import React, { useState } from "react";
import Filters from "./Components/Filters/Filters";
import Home from "./Components/ProductList/Home/Home";
import Cart from "./Components/ShoppingCart/Cart/Cart";
import GlobalStyle from "./GlobalStyle";
import { HomeRow, Main } from "./AppStyle";
import productList from "./assets/productsList";

const App = () => {
  const [minFilter, setMinFilter] = useState("");

  const [maxFilter, setMaxFilter] = useState("");

  const [searchFilter, setSearchFilter] = useState("");

  const [cart, setCart] = useState([]);

  const [amount, setAmount] = useState([]);

  const [ordination, setOrdination] = useState("");

  const handleMinFilter = (e) => {
    const newMinFilter = parseFloat(e.target.value);
    if (newMinFilter >= 0) {
      setMinFilter(newMinFilter);
    }
  };

  const handleMaxFilter = (e) => {
    const newMaxFilter = parseFloat(e.target.value);
    if (newMaxFilter >= 0) {
      setMaxFilter(newMaxFilter);
    }
  };

  const handleSearchFilter = (e) => {
    setSearchFilter(e.target.value);
  };



  const handleCart = (product) => {
    const existingItem = cart.find((item) => item.cod === product.cod);
    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.cod === product.cod
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
      }
    else{
      const newItem = {...product, quantity: 1};
      setCart([...cart, newItem])
    }
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleOrdination = (e) => {
    setOrdination(e.target.value);
  };

  return (
    <>
      <GlobalStyle />
      <Main>
        <Filters
          minFilter={minFilter}
          setMinFilter={setMinFilter}
          maxFilter={maxFilter}
          setMaxFilter={setMaxFilter}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
          handleMinFilter={handleMinFilter}
          handleMaxFilter={handleMaxFilter}
          handleSearchFilter={handleSearchFilter}
        />
        <HomeRow>
          <Home
            productList={productList}
            ordination={ordination}
            setOrdination={setOrdination}
            handleOrdination={handleOrdination}
            amount={amount}
            setAmount={setAmount}
            cart={cart}
            setCart={setCart}
            handleCart={handleCart}
          />
        </HomeRow>
        <Cart
          amount={amount}
          setAmount={setAmount}
          cart={cart}
          setCart={setCart}
        />
      </Main>
    </>
  );
};

export default App;
