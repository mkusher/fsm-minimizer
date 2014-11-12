angular.module('app', [
    'ngRoute'
])
    .config(function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'templates/mealy.html',
                controller: 'MealyCtrl',
                controllerAs: 'mealy'
            })
            .when('/moore', {
                templateUrl: 'templates/moore.html',
                controller: 'MooreCtrl',
                controllerAs: 'moore'
            });
    })
    .controller('NavCtrl', function NavCtrl(){
    })
    .controller('MealyCtrl', function MealyCtrl(){

    })
    .controller('MooreCtrl', function MooreCtrl(){

    });