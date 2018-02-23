import alertify from 'alertify.js';
import _ from 'lodash';
export class CartController {
  constructor($http, $state, $log, $window, $document, CartService) {
    'ngInject';
    this.http = $http;
    this.state = $state;
    this.log = $log;
    this.window = $window;
    this.document = $document;
    this.CartService = CartService;
    this.products = [];
    this.myCartProducts = [];
    this.isLoading = false;
    this.productsLazyLoad = {
      totalCount: 0,
      skip: 0,
      limit: 10
    };
    this.getData();
    this.window.onscroll = () => {
      if (!this.isLoading && this.products.length < this.productsLazyLoad.totalCount && angular.element(window).scrollTop() + angular.element(window).height() === angular.element(document).height()) {
        this.loadMoreProducts();
      }
    };
  }

  getData() {
    this.isLoading = true;
    this.CartService.getAllProducts().then(res => {
      this.isLoading = false;
      this.products = res.data.slice(0, 10);
      this.productsLazyLoad = {
        totalCount: res.data.length,
        skip: 10,
        limit: 10
      };
    }, err => {
      this.isLoading = false;
      this.log.debug(err);
    });
  }

  loadMoreProducts() {
    this.isLoading = true;
    this.CartService.getAllProducts().then(res => {
      this.isLoading = false;
      const newData = res.data.slice(this.productsLazyLoad.skip, (this.productsLazyLoad.skip + this.productsLazyLoad.limit));
      this.products = [...this.products, ...newData];
      this.productsLazyLoad = {
        totalCount: res.data.length,
        skip: this.productsLazyLoad.skip + this.productsLazyLoad.limit,
        limit: 10
      };
    }, err => {
      this.isLoading = false;
      this.log.debug(err);
    });
  }

  addToCart(p) {
    this.myCartProducts.push(p);
    alertify.log('Item Added to cart');
  }

  remoteCartProduct(index) {
    this.log.debug(index);
    this.myCartProducts.splice(index, 1);
  }

  getTotalAmount() {
    this.log.debug(this.myCartProducts);
    let totalAmount = 0;
    _.each(this.myCartProducts, _p => {
      totalAmount = totalAmount += _p.price;
    });
    return totalAmount;
  }

}
