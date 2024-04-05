import { useState } from 'react';
import './ShoppingList.css';
import PropTypes from 'prop-types';


const ShoppingList = ({ shoppingList, onRemoveFromShoppingList }) => {
	const [crossedOutItems, setCrossedOutItems] = useState([]);

	const handleCrossFromShoppingList = (event, id) => {
		event.preventDefault();

		setCrossedOutItems((prevCrossedOutItems) => {
			const updatedCrossedOutItems = { ...prevCrossedOutItems };
			updatedCrossedOutItems[id] = !updatedCrossedOutItems[id];
			return updatedCrossedOutItems;
			});
	};

return (
    <div>
      <h2>Shopping List</h2>
      <hr />
      <ul>
        {shoppingList.map((product) => (
          <li
            key={product.id}
            onClick={() => onRemoveFromShoppingList(product.id)}
            onContextMenu={(event) =>
              handleCrossFromShoppingList(event, product.id,)
            }
            style={{
              textDecoration: crossedOutItems[product.id]
                ? 'line-through'
                : 'auto',
            }}
          >
            {product.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

ShoppingList.propTypes = {
  shoppingList: PropTypes.array.isRequired,
  onRemoveFromShoppingList: PropTypes.func.isRequired,
};

export default ShoppingList;