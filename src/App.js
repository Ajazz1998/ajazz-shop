import './App.css';
import Home from './componets/Home/home';
// import SinglePage from './componets/Singlepage/singlepage';
import { ShopState } from "./Context/ShopContext";

function App() {
  return (
    <div className="App">
    <ShopState>

       <Home />

    </ShopState>
    </div>
  );
}

export default App;
