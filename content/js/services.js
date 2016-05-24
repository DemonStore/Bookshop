angular.module('booksShopApp.services', [])
    .factory('Book', function ($resource) {
        return $resource('http://localhost:8080/api/books/:id', { id: '@_id' }, {
            update: {
                method: 'PUT'
            }
        });
    })
    .factory('Price', function ($resource) {
        return $resource('http://localhost:8080/api/price/:id', { id: '@_bookId' }, {
            update: {
                method: 'PUT'
            }
        });
    })
    .factory('Stock', function ($resource) {
        return $resource('http://localhost:8080/api/stock/:id', { id: '@_bookId' }, {
            update: {
                method: 'PUT'
            }
        });
    })
    .service('popupService', function ($window) {
        this.showPopup = function (message) {
            return $window.confirm(message);
        }
    });
