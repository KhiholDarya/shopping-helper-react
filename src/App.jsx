
import { useState } from 'react';
import ProductsList from './components/ProductsList/ProductsList';
import ShoppingList from './components/ShoppingList/ShoppingList';
import './App.css';
import AddProductForm from './components/AddProductForm/AddProductForm';
import { productsList } from './common/consts/produkty'

const App = () => {
	const [mergedPoductList, setMergedPoductList] = useState(productsList);
	const [shoppingList, setShoppingList] = useState([]);
	
	// const [mergedPoductList, setMergedPoductList] = useState(productsList.map((product) => { 
	// 	return {...product, id: Math.random()}
   // }));


  const addToShoppingList = (product) => {
   setShoppingList([...shoppingList, {...product, id: Math.random()}]);
  };

const removeFromShoppingList = (id) => {
   const updatedList = shoppingList.filter((product) =>  product.id !== id);
    setShoppingList(updatedList);
  };

  const addNewProduct = (newProduct) => {
   setMergedPoductList([...mergedPoductList, newProduct]);
  };

  return (
    <div className="app-container">
      <div className="column">
        <ProductsList products={mergedPoductList} onAddToShoppingList={addToShoppingList} />
		<hr />
        <AddProductForm onAddProduct={addNewProduct} />
      </div>
      <div className="column">
        <ShoppingList shoppingList={shoppingList} onRemoveFromShoppingList={removeFromShoppingList} />
      </div>
    </div>
  );
};

export default App;