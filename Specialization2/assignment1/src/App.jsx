import React from 'react';
import ProductList from './ProductList';
import NewProductForm from './NewProductForm';
import useInventory from './useInventory';

const App = () => {
  const inventory = useInventory();

  return (
    <div className="App">
      <ProductList />
      <NewProductForm />
    </div>
  );
};

export default App;
