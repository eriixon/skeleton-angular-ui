angular.module('game')
    .component('grid', {
        templateUrl: 'pages/grid.html',
        bindings: {
            rows: '<',
            cols: '<',
            cellClick: '<'   
        },
        controllerAs: 'vm',
        controller: function(){
            debugger
            var vm = this;
            vm.test = 'Am I alive?'
            vm.grid = [];
            function buildGrid() {
                for (var row = 0; row < vm.rows; row++) {
                    vm.grid[row] = [];
                    for (var col = 0; col < vm.cols; col++) {
                    vm.grid[row][col] = { row: row, col: col }
                    }
                }
            }
            buildGrid()
            console.log(vm.grid)
        }
    })
    
//******************************************************    
    .component('lightsOutComponent',{
    templateUrl: 'pages/lights-out.html',
    controllerAs: 'vm',
    controller: function(){

        var vm = this;
        
        vm.toggleCell = function (cell, grid){
            vm.grid = grid;
            cell.active = !cell.active;
            toggleNeighbors(cell);
        }
        
        function toggleCheck(cell, x, y){
           if(vm.grid[cell.row + x]){
               var cell = vm.grid[cell.row+x][cell.col+y];
               if(cell) cell.active = !cell.active;
           }
        }
        
        function toggleNeighbors(cell) {
            toggleCheck(cell,-1, 0)
            toggleCheck(cell, 1, 0)
            toggleCheck(cell, 0,-1)
            toggleCheck(cell, 0, 1)
            }
        }
})