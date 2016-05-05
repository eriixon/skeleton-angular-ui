angular.module('refresh').config(function($stateProvider){
    
    $stateProvider
    .state('home',{
        url: '',
        templateUrl: 'pages/home.html'
    })
    .state('lights-out',{
        url: '/lights-out',
        templateUrl: '<lights-out-component></lights-out-component>',
    })
})
