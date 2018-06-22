(function(){
  angular.module('primeiraApp').controller('ProducaoCtrl',[
    '$http',
    'msgs',
    'tabs',
    ProducaoController
  ])

  function ProducaoController($http, msgs, tabs){
    const vm = this
    const url = 'http://localhost:3003/api/producao'

    vm.refresh = function(){
      $http.get(url).then(function(response){
        vm.producao = {produzidos: [{}], demandas: [{}]}
        vm.producao = response.data
        //vm.calculateValues()
        tabs.show(vm, {tabList: true, tabCreate: true})
      })
    }

    vm.create = function(){
      $http.post(url, vm.producao).then(function(response){
        vm.refresh()
        msgs.addSuccess('Operação realizada com sucesso !!!')
      }).catch(function(response){
        msgs.addError(response.data.errors)
      })
    }

    vm.showTabUpdate = function(producao){
      vm.producao = producao
      vm.calculateValues()
      tabs.show(vm, {tabUpdate: true})
    }

    vm.showTabDelete = function(producao){
      vm.producao = producao
      vm.calculateValues()
      tabs.show(vm, {tabDelete: true})
    }

    vm.update = function(){
      const updateUrl = `${url}/${vm.producao._id}`
      $http.put(updateUrl, vm.producao).then(function(response){
        vm.refresh()
        msgs.addSuccess('Operação realizada com sucesso!')
      }).catch(function(response){
        msgs.addError(response.data.errors)
      })
    }

    vm.delete = function(){
        const deleteUrl = `${url}/${vm.producao._id}`
        $http.delete(deleteUrl, vm.billingCycle).then(function(response){
          vm.refresh()
          msgs.addSuccess('Operação realizada com sucesso!')
        }).catch(function(response){
          msgs.addError(response.data.errors)
        })
    }

    vm.addProduzido = function(index){
      vm.producao.produzidos.splice(index + 1, 0, {})
    }

    vm.cloneProduzido = function(index, {produto, quantidade}){
      vm.producao.produzidos.splice(index + 1, 0, {produto, quantidade})
      vm.calculateValues()
    }

    vm.deleteProduzido = function(index){
      if(vm.producao.produzidos.length > 1){
        vm.producao.produzidos.splice(index, 1)
        vm.calculateValues()
      }
    }

    vm.addDemanda = function(index){
      vm.producao.demandas.splice(index + 1, 0, {})
    }

    vm.cloneDemanda = function(index, {produto, quantidade, status}){
      vm.producao.demandas.splice(index + 1, 0, {produto, quantidade, status})
      vm.calculateValues()
    }

    vm.deleteDemanda = function(index){
      if(vm.producao.demandas.length > 1){
        vm.producao.demandas.splice(index, 1)
        vm.calculateValues()
      }
    }

    vm.calculateValues = function(){
      vm.produzido = 0
      vm.demanda = 0

      if(vm.producao){
        vm.producao.produzidos.forEach(function({value}){
          vm.produzido += !value || isNaN(value) ? 0 : parseFloat(value)
        })

        vm.producao.demandas.forEach(function({value}){
          vm.demanda += !value || isNaN(value) ? 0 : parseFloat(value)
        })
      }

      vm.total = vm.produzido - vm.demanda
    }

    vm.refresh()
  }
})()
