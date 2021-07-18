
import './App.css';
import Header from './components/Header';
import Products from './components/Products';
import Product from './components/Product'
import {BrowserRouter,Switch,Route} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
    <Switch>
      <Route path="/">
        <Products/>
      </Route>
      <Route path="products/:productId">
        <Product />
      </Route>
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
