angular.module('primeiraApp').constant('consts', {
  appName: 'AgroTec',
  version: '1.0',
  owner: 'Google',
  year: '2018',
  site: 'http://google.com.br',
  apiUrl: 'http://localhost:3003/api',
}).run(['$rootScope', 'consts', function($rootScope, consts) {
  $rootScope.consts = consts
}])
