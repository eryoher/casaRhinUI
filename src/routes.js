import React from 'react';
import { Route , IndexRoute } from 'react-router';
import App from './components/app';
import HomePage from './components/homepage';
import Nosotros from './components/nosotros';
import Product from './components/product';
import Category from './components/category';
import Item from './components/item';
import Sensations from './components/sensations';
import Cocktail from './components/cocktail';
import Dealers from './components/dealers';
import Activities from './components/activities';
import Contact from './components/contact';



export default (
  <Route path="/" component={App} >
    <IndexRoute component={HomePage} />
    <Route path="nosotros" component={Nosotros} />
    <Route path="product/:id" component={Product} />
    <Route path="category/:id" component={Category} />
    <Route path="item/:id" component={Item} />
    <Route path="sensations" component={Sensations} />
    <Route path="cocktail/:id" component={Cocktail} />
    <Route path="dealers" component={Dealers} />
    <Route path="activities" component={Activities} />
    <Route path="contact" component={Contact} />
  </Route>
);
