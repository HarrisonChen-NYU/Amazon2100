import React from 'react';
import './App.css';

let shoppingCartItems = [
  {
    item: 'War and Peace',
    image: 'https://images4.penguinrandomhouse.com/cover/9781400079988',
    description: 'War and Peace broadly focuses on Napoleon’s invasion of Russia in 1812 and follows three of the most well-known characters in literature',
    price: 100
  },

  {
    item: 'War and Peace',
    image: 'https://images4.penguinrandomhouse.com/cover/9781400079988',
    description: 'War and Peace broadly focuses on Napoleon’s invasion of Russia in 1812 and follows three of the most well-known characters in literature',
    price: 100
  },
  {
    item: 'War and Peace',
    image: 'https://images4.penguinrandomhouse.com/cover/9781400079988',
    description: 'War and Peace broadly focuses on Napoleon’s invasion of Russia in 1812 and follows three of the most well-known characters in literature',
    price: 100
  },
  {
    item: 'War and Peace',
    image: 'https://images4.penguinrandomhouse.com/cover/9781400079988',
    description: 'War and Peace broadly focuses on Napoleon’s invasion of Russia in 1812 and follows three of the most well-known characters in literature',
    price: 100
  },
]

function shoppingCartItems(thing) {
  return thing;
}

class App extends Component {
  render() {
    return (
      <div className="App-header">
        {shoppingCartItems.map(item)}
      </div>
    );
  }
}
function App() {
  return (
    <div className="App">
      <h1>Your Shopping Cart</h1>
     <SearchForm />
     <ShoppingCart />
    </div>
  );
}

function ShoppingCart() {
  return(
    <div className="cart">
      <Product />
    </div>
  );
}


function Product() {
  return(
    <div className="product">
      <img src={shoppingCartItems[0].image} width="100"/>
    </div>
  )
}

function SearchForm() {
  return(
    <form>
      <label>
        Search:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default App;