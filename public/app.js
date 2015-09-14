/**
 * Created by noah on 14/9/15.
 */

(function() {

  var app = angular.module('app', []);

  app.constant('API_URL', 'http://localhost:4000');

  app.controller('MainCtrl', function MainCtrl(RandomPersonFactory) {
    var vm = this;
    vm.getRandomPerson = getRandomPerson;

    function getRandomPerson() {
      RandomPersonFactory.getPerson().then(function success(response) {
        vm.randomPerson = response.data;
      });
    }
  });

  app.factory('RandomPersonFactory', function RandomPersonFactory($http, API_URL) {
    return {
      getPerson : getPerson
    };
    function getPerson() {
      return $http.get(API_URL + '/res');
    }
  });
})();