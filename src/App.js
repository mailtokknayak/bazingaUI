import React, {Component} from "react";
import {Provider} from "react-redux";
import Products from "./components/Products";
import Header from "./components/Header";
import Cart from "./components/Cart";
import store from "./store";
import "./App.css";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <hr/>
                    <div className="row">
                        <div className="col-md-9">
                            <Header/>
                            <hr/>
                            <Products/>
                        </div>
                        <div className="col-md-3">
                            <Cart/>
                        </div>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
