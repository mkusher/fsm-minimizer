angular.module('app', [
    'ngRoute',
    'ui.bootstrap'
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
    .controller('MealyCtrl', function MealyCtrl($scope){
        var ctrl = this;
        this.numberOfA = 1;
        this.numberOfZ = 1;
        this.numberOfW = 1;
        this.a = [];
        this.z = [];
        this.w = [];
        this.$watchNumbers = function(numberCallback, collection, name){
            $scope.$watch(numberCallback, function(val){
                collection.splice(0, collection.length);
                for(var i = 0; i<val; ++i){
                    collection.push(name+(i+1));
                }
            });
        };
        this.$watchNumbers(function(){ return ctrl.numberOfA}, ctrl.a, 'a');
        this.$watchNumbers(function(){ return ctrl.numberOfZ}, ctrl.z, 'z');
        this.$watchNumbers(function(){ return ctrl.numberOfW}, ctrl.w, 'w');
    })
    .controller('MooreCtrl', function MooreCtrl(){

    });