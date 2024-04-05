import './AddProductForm.css'

import { useState } from 'react';
import PropTypes from 'prop-types';

const AddProductForm = ({ onAddProduct }) => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [isFoodProduct, setIsFoodProduct] = useState(false);

  const handleAddProduct = () => {
    if (productName && category) {
      const newProduct = {
        name: productName,
        category: category,
        foodProduct: isFoodProduct,
      };

      // Pass the new product to the parent component
      onAddProduct(newProduct);

      // Clear form fields after adding the product
      setProductName('');
      setCategory('');
      setIsFoodProduct(false);
    }
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
      </div>
      <div>
        <label>Category:</label>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      </div>
      <div>
        <label>Food Product:</label>
        <input
          type="checkbox"
          checked={isFoodProduct}
          onChange={() => setIsFoodProduct(!isFoodProduct)}
        />
      </div>
      <button onClick={handleAddProduct}>Add</button>
    </div>
  );
};

AddProductForm.propTypes = {
  onAddProduct: PropTypes.func.isRequired,
};

export default AddProductForm;