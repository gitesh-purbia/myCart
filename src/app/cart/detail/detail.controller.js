export class CartDetailController {
  constructor($http, $state, AppConstants) {
    'ngInject';
    this.http = $http;
    this.AppConstants = AppConstants;
    this.state = $state;
  }

}
