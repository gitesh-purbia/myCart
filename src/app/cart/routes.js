export function CartsRoutes($stateProvider) {
  'ngInject';
  $stateProvider
    .state('cart', {
      url: '/',
      templateUrl: 'app/cart/cart.html',
      controller: 'CartController',
      controllerAs: 'cartCtrl',
      data: {}
    })
    .state('detail', {
      url: '/detail',
      templateUrl: 'app/cart/detail/detail.html',
      controller: 'CartDetailController',
      controllerAs: 'CartDtlCtrl',
      params: {
        obj: null
      }
    });
}
