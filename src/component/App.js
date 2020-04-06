import React from 'react';
import CarList from './CarList';
import {BrowserRouter , Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Cart from './Cart';


const App = () => {

    return (
        <div>
         
            <BrowserRouter>
            <Header/>
            <div>
                <Route path="/" exact component={Home}></Route>
                <Route path="/cars" component={CarList}></Route>
                <Route path="/cart" component={Cart}></Route>
               
                </div></BrowserRouter>
           
        </div>
    );
}

export default App;