The "Shopping helper" application is a helper in planning and carrying out purchases. It consists of 4 sections:

Section for adding available products - "AddProducts" component
Available products filtering section - "ProductsFilters" component
Left column - displaying available products - "ProductsList" component
Right column - displaying products added to the shopping list - "ShopingList"
The application contains a defined list of products in the src/common/consts/produkty.js file, and an example structure of a single product looks like below

{
     name: 'milk',
     category: 'dairy',
     foodproduct: true,
}

Task no. 1 (obligatory) - 3 points
The left column (available products) should display a list of products from the products.js file as an unnumbered list (we only display the name)
Left-clicking on one of the products adds it to the 'shopping list'
The right column displays the current shopping list, so at first it will be empty, but after clicking on any product from the list of available products, it will appear on the shopping list (the selected item does not disappear from the list of available products)
It should be possible to select the same product multiple times, to do this, simply select the item from the list on the left again, after which it should appear as the next item on the right
Right-clicking on any item from the shopping list should remove it from the list (this simulates a situation where someone threw the product into the shopping cart and removed it from the shopping list)

Task no. 2 - Filtering the list of "available products" (0.5 points)
The list on the left (available products) may be very long, so it should be filterable to quickly find the product you are interested in. The filter section should have 2 types of filters:

after the name (or part of it) - case sensitive (input type text)
by category - it should be possible to select any category from among the existing ones (drop down list)
the section should also have a "Search" button that will filter the results based on the selected values
Task no. 2a - Extended filters (0.5 points)
Modify the filters section to include the following improvements:

add a "Food products only" filter, which will be a checkbox input
filtering should be done without using the search button - (after each change of any filter, the list of "suggested products" should be filtered
when searching by name, the letters should not be case sensitive


Task no. 3 - Adding new products to the list of "available products" (0.5 points)
By default, the list of "available products" is displayed based on data from the products.js file. The purpose of this task is to allow the user to add additional products to the list on the left. The data should be complete, so the task should include the following elements:

text field - name
text field - category - you can add products with new categories
"checkbox" input - food product
"Add" button which will add the product to the list of "suggested products"
Newly added products should be fully interactive, i.e. they should work in accordance with tasks 1 and 2. In the case of task 2, new categories should be visible in the drop-down list.

Task no. 4 - Deselecting "bought" products (0.5 points)
After completing task 1, clicking on a product from the shopping list (right column) causes it to disappear. The purpose of this task is to extend this functionality with the following:

right-clicking on an element causes it to be crossed out
right-clicking on a crossed-out element again causes it to become non-crossthrough again
clicking the left mouse button should remove an item from the list (the same behavior as the right button in task 1)
For the task you will need some style modification for the elemen, unfortunately, as part of our classes so far, we have not dealt with styling, so the ready-made example is below


"<li style={{"text-decoration": `${product.category === "dairy" ? "line-through" : "auto" }`}}> Cheese </li>"


Copy the above style, i.e. style={{ ... }}, paste it into your application where the shopping list is displayed and check whether dairy products have been crossed out, if so, you can start the actual part of the task.
