import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './componets/Home/home';
import Nav from './componets/Navbar/navbar';
import Contact from './componets/Pages/contact';
import About from './componets/Pages/about';
import SinglePage from './componets/Singlepage/singlepage';
import { ShopState } from "./Context/ShopContext";
import './App.css';


const App = () => {
  return (
        <ShopState>

            <Router>
            <Nav />

                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/about" component={About} />
                    <Route path="/recipes/:id" component={SinglePage} />
                </Switch>

          </Router>

        </ShopState>
  );
}

export default App;
