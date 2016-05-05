angular.module('refresh').config(function($stateProvider){
    
    $stateProvider
    .state('home',{
        url: '',
        templateUrl: 'pages/home.html'
    })
    .state('pageone',{
        url: '/pageone',
        templateUrl: 'pages/pageone.html',
        controller: 'pageOneController',
        controllerAs: 'poc'
    })
})
