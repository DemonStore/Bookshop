angular.module('booksShopApp', ['ui.router', 'ngResource', 'booksShopApp.controllers', 'booksShopApp.services']);

angular.module('booksShopApp').config(function ($stateProvider) {
    $stateProvider.state('books', {
        url: '/books',
        templateUrl: 'partials/book-list.html',
        controller: 'BookListController'
    })
    .state('newBook', {
        url: '/books/new',
        templateUrl: 'partials/book-add.html',
        controller: 'BookCreateController'
    })
    .state('viewBook', {
        url: '/books/:id/view',
        templateUrl: 'partials/book-view.html',
        controller: 'BookViewController'
    })
    .state('editBook', {
        url: '/books/:id/edit',
        templateUrl: 'partials/book-edit.html',
        controller: 'BookEditController'
    })
    .state('price', {
        url: '/price',
        templateUrl: 'partials/price-list.html',
        controller: 'PriceListController'
    })
    .state('editPrice', {
        url: '/price/:id/edit',
        templateUrl: 'partials/price-edit.html',
        controller: 'PriceEditController'
    })
    .state('stock', { // state for showing all movies
        url: '/stock',
        templateUrl: 'partials/stock-list.html',
        controller: 'StockListController'
    })
    .state('editStock', {
        url: '/stock/:id/edit',
        templateUrl: 'partials/stock-edit.html',
        controller: 'StockEditController'
    });
}).run(function($state) {
    $state.go('books');
});
