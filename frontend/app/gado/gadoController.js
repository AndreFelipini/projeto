(function(){
  angular.module('primeiraApp').controller('GadoCtrl',[
    '$http',
    'msgs',
    'tabs',
    GadoController
  ])

  function GadoController($http, msgs, tabs){
    const vm = this
    const url = 'http://localhost:3003/api/gados'

    vm.refresh = function(){
      $http.get(url).then(function(response){
        vm.gado = {animals: [{}]}
        vm.gados = response.data
        //vm.calculateValues()
        tabs.show(vm, {tabList: true, tabCreate: true})
      })
    }

    vm.create = function(){
      $http.post(url, vm.gado).then(function(response){
        vm.refresh()
        msgs.addSuccess('Operação realizada com sucesso !!!')
      }).catch(function(response){
        msgs.addError(response.data.errors)
      })
    }

    vm.showTabUpdate = function(gado){
      vm.gado = gado
      //vm.calculateValues()
      tabs.show(vm, {tabUpdate: true})
    }

    vm.showTabDelete = function(gado){
      vm.gado = gado
      //vm.calculateValues()
      tabs.show(vm, {tabDelete: true})
    }

    vm.update = function(){
      const updateUrl = `${url}/${vm.gado._id}`
      $http.put(updateUrl, vm.gado).then(function(response){
        vm.refresh()
        msgs.addSuccess('Operação realizada com sucesso!')
      }).catch(function(response){
        msgs.addError(response.data.errors)
      })
    }

    vm.delete = function(){
      const deleteUrl = `${url}/${vm.gado._id}`
      $http.delete(deleteUrl, vm.gado).then(function(response){
        vm.refresh()
        msgs.addSuccess('Operação realizada com sucesso!')
      }).catch(function(response){
        msgs.addError(response.data.errors)
      })
    }

    vm.refresh()
  }
})()
