import angular from 'angular';

import 'angular-ui-router';
import routesConfig from './routes';

import './index.scss';
import 'angular-ui-bootstrap';

import {
  CartController
} from './app/cart/cart.controller';

import {
  CartDetailController
} from './app/cart/detail/detail.controller';

import {
  LoadMoreProducts
} from './app/cart/directives/load.more.products';

import {
  CartService
} from './app/cart/cart.service';

import {
  config
} from './index.config';

import {
  CartsRoutes
} from './app/cart/routes';

angular
  .module('myCart', ['ui.router', 'ui.bootstrap'])
  .config(routesConfig)
  .config(config)
  .config(CartsRoutes)
  .controller('CartController', CartController)
  .controller('CartDetailController', CartDetailController)
  .directive('loadMoreProducts', () => new LoadMoreProducts())
  .service('CartService', CartService);
