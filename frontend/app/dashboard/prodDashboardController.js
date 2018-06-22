(function(){
  angular.module('primeiraApp').controller('ProducaoTotal', [
    '$http',
    'consts',
    ProdDashboardController
  ])

  function ProdDashboardController($http, consts) {
    const vm = this
    vm.getSummary = function() {
      const url = `${consts.apiUrl}/producaoSummary`;
      $http.get(url).then(function(response) {
        const {produzido = 0, demanda = 0} = response.data
        vm.produzido = produzido
        vm.demanda = demanda
        vm.total = produzido - demanda
      })
    }

    vm.getSummary()
  }
})()
