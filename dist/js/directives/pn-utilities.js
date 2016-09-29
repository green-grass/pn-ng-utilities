(function () {

    'use strict';

    var module = angular.module('pnUtilities');

    module.directive('pnDropdownPagination', function () {
        return {
            restrict: 'EA',
            replace: true,
            scope: {
                pageCount: '&',
                currentPage: '='
            },
            templateUrl: '/assets/_vendors/pn-ng-utilities/dist/templates/pn-dropdown-pagination.html'
        };
    });

    module.directive('pnButtonsPagination', function () {
        return {
            restrict: 'EA',
            replace: true,
            scope: {
                pageCount: '&',
                currentPage: '=',
                maxPageLength: '&',
                pageLabelFormat: '&'
            },
            templateUrl: '/assets/_vendors/pn-ng-utilities/dist/templates/pn-buttons-pagination.html',
            link: function (scope) {
                scope.goToPage = function (page) {
                    scope.currentPage = page;
                };
            }
        };
    });

    module.directive('pnCombinedPagination', ['$animate', function ($animate) {
        return {
            restrict: 'EA',
            replace: true,
            scope: {
                pageCount: '&',
                currentPage: '=',
                maxPageLength: '&',
                pageLabelFormat: '&'
            },
            templateUrl: '/assets/_vendors/pn-ng-dashboard/dist/templates/pn-combined-pagination.html',
            link: function (scope, element) {
                scope.showPageJumper = false;
            }
        };
    }]);

})();
