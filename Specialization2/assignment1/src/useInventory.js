import { useState } from 'react';

const initialProducts = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
  { id: 3, name: 'Product 3', price: 300 },
];

const useInventory = () => {
  const [products, setProducts] = useState(initialProducts);


  const fetchProducts = () => {
    return products;
  };


  const addProduct = (product) => {
    setProducts([...products, { ...product, id: products.length + 1 }]);
  };


  const removeProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return {
    products,
    fetchProducts,
    addProduct,
    removeProduct,
  };
};

export default useInventory;
