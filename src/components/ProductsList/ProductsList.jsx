import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductsFilters from '../ProductsFilters/ProductsFilters';

const ProductsList = ({ products, onAddToShoppingList }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [categories, setCategories] = useState([]);

  const handleSearch = ({ name, category, foodProductsOnly }) => {
    let filteredList = products;

    if (name) {
      filteredList = filteredList.filter((product) =>
        product.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    if (category) {
      filteredList = filteredList.filter((product) => product.category === category);
    }

    if (foodProductsOnly) {
      filteredList = filteredList.filter((product) => product.foodProduct);
    }

    setFilteredProducts(filteredList);
  };

  useEffect(() => {
    // Extract unique categories from the product list
    const uniqueCategories = [...new Set(filteredProducts.map((product) => product.category))];
    setCategories(uniqueCategories);
  }, [filteredProducts]);

  useEffect(() => {
	setFilteredProducts(products)
 }, [products]);

  const handleClick = (product) => {
	product.id = Math.random();
    onAddToShoppingList(product);
  };

  return (
    <div>
      <h2>Available Products</h2>
        <hr />
        <ProductsFilters onSearch={handleSearch} categories={categories} />
      <ul>
        {filteredProducts.map((product) => (
          <li key={`${product.name}`} onClick={() => handleClick(product)}>
            {product.name}
          </li>
        ))}
      </ul>
    </div>
  );
};


ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
  onAddToShoppingList: PropTypes.func.isRequired,
};

export default ProductsList;