export class CartService {
  constructor($http, $q) {
    'ngInject';
    this.http = $http;
    this.q = $q;
  }

  getAllProducts() {
    return this.http.get('../../assets/sample/product.json');
  }

}
