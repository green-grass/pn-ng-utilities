(function () {

    'use strict';

    var module = angular.module('pnUtilities');

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

})();
