angular.module('game').config(function($stateProvider){

    $stateProvider
    .state('home',{
        url: '',
        templateUrl: 'pages/home.html'
    })
    .state('lights-out',{
        url: '/lights-out',
        template: '<lights-out-component></lights-out-component>'
    })
})
