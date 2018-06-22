angular.module('primeiraApp').config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('dashboard', {
      url: "/dashboard",
      templateUrl: "dashboard/dashboard.html"
    }).state('billingCycle', {
      url: "/billingCycles?page",
      templateUrl: "billingCycle/tabs.html"
    }).state('producao', {
      url: "/producao",
      templateUrl: "producao/tabs.html"
    }).state('gado',{
      url: "/gado",
      templateUrl: "gado/tabs.html"})

    $urlRouterProvider.otherwise('/dashboard')
}])
