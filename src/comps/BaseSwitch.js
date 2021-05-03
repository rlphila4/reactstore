import React from "react";
import { Switch, Route } from "react-router-dom";
import Checkout from "../pages/Checkout";
import Home from '../pages/Home'
import NotFound from "../pages/NotFound";
import Product from '../pages/Product'

const BaseSwitch = props => (
      <main style={{height:'100%'}}>
        <Switch>
          <Route exact path="/" render={() => <Home {...props} title="React Store" />} />
          <Route path="/products" render={() => <Product {...props} title="Products" />} />
          <Route path="/checkout" render={() => <Checkout {...props} title="Checkout" />} />
          <Route component={NotFound} />
        </Switch>
      </main>
);

export default BaseSwitch;
