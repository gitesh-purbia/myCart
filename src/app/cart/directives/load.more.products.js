export class LoadMoreProducts {
  constructor() {
    'ngInject';
    this.restrict = 'A';
    this.scope = {
      isLoading: '=',
      totalItems: '=',
      totalProducts: '=',
      infiniteScrollCallback: '&'
    };
  }
  link(scope, element) {
    element.bind('scroll', () => {
      if (scope.totalItems !== scope.totalProducts && !scope.isLoading && element.innerHeight() + element.scrollTop() >= element[0].scrollHeight) {
        scope.infiniteScrollCallback();
      }
    });
  }
}
