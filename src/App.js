import './App.css';
import Products from './componets/Products/products';
import { ShopState } from "./Context/ShopContext";
function App() {
  return (
    <div className="App">
    <ShopState>

       <Products />

    </ShopState>
    </div>
  );
}

export default App;
