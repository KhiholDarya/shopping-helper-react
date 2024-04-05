import './ProductsFilters.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

const ProductsFilters = ({ onSearch, categories }) => {
  const [filter, setFilter] = useState({
    name: '',
    category: '',
    foodProductsOnly: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: type === 'checkbox' ? checked : value,
    }));

    onSearch({
      ...filter,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <div>
      <label>
        Filter by Name:
        <input type="text" name="name" value={filter.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Filter by Category:
        <select name="category" value={filter.category} onChange={handleChange}>
          <option value="">All</option>
          {categories.map((category) => (
            <option key={`${category}`} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Food Products Only:
        <input
          type="checkbox"
          name="foodProductsOnly"
          checked={filter.foodProductsOnly}
          onChange={handleChange}
        />
      </label>
		<hr />
    </div>
  );
};

ProductsFilters.propTypes = {
  onSearch: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductsFilters;