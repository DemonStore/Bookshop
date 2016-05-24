angular.module('booksShopApp.controllers', [])
    .controller('BookListController', function ($scope, $state, $stateParams, Book, Price, Stock, popupService) {
        Book.query().$promise.then(function (data) {
            $scope.books = data;

            $scope.books.forEach(function (book, i, arr) {
                Price.get({id: book._id}).$promise.then(function (data) {
                    book.price = data.price;
                });
                Stock.get({id: book._id}).$promise.then(function (data) {
                    book.stock = data.number;
                });
            });
        });

        $scope.deleteBook = function (book) {
            if (popupService.showPopup('Really delete this?')) {
                book.$delete(function () {
                    $state.go('books');
                });
            }
        };
    })
    .controller('BookCreateController', function ($scope, $state, $stateParams, Book){
        $scope.book = new Book();

        $scope.addBook = function () {
            $scope.book.$save(function () {
                $state.go('books');
            });
        }
    })
    .controller('BookViewController', function ($scope, $stateParams, Book) {
        $scope.book = Book.get({id: $stateParams.id});
    })
    .controller('BookEditController', function ($scope, $state, $stateParams, Book) {
        $scope.updateBook = function () {
            $scope.book.$update(function () {
                $state.go('books');
            });
        };

        $scope.loadBook = function () {
            $scope.book = Book.get({id: $stateParams.id});
        };

        $scope.loadBook();
    })
    .controller('PriceListController', function ($scope, $state, $stateParams, Price) {
        $scope.prices = Price.query();
    })
    .controller('PriceEditController', function ($scope, $state, $stateParams, Price) {
        $scope.updatePrice = function () {
            $scope.price.$update(function () {
                $state.go('price');
            });
        };

        $scope.loadPrice = function () {
            $scope.price = Price.get({id: $stateParams.id});
        };

        $scope.loadPrice();
    })
    .controller('StockListController', function ($scope, $state, $stateParams, Stock) {
        $scope.stock = Stock.query();
    })
    .controller('StockEditController', function ($scope, $state, $stateParams, Stock) {
        $scope.updateStock = function () {
            $scope.stock.$update(function () {
                $state.go('stock');
            });
        };

        $scope.loadStock = function () {
            $scope.stock = Stock.get({id: $stateParams.id});
        };

        $scope.loadStock();
    });
