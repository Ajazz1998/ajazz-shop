import './App.css';
import Home from './componets/Home/home';
import Contact from './componets/Contact/contact';
import About from './componets/About/about';
// import SinglePage from './componets/Singlepage/singlepage';
import { ShopState } from "./Context/ShopContext";

const App = () => {
  return (
    <div className="App">
    <ShopState>

       <Home />
       <Contact />
       <About />

    </ShopState>
    </div>
  );
}

export default App;
