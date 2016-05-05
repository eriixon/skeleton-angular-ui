angular.module('refresh')
    .component('lightsOutComponent',{
    templateUrl: 'app/components/lout/lights-out.html',
    controller: function(){
        debugger
        var vm = this;
        vm.test = " Some text ";
        
        vm.grid = [];
        
        function buildGrid(){
        // create a grid 5x5, each cell is object: x:number, y: number
        }
    }
})