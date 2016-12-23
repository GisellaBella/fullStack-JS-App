angular.module('CardsAgainstAssembly')
  .controller('CardsController', CardsController);

CardsController.$inject = ["$http"];

function CardsController($http) {
  var vm = this;
  vm.getQuestions = getQuestions;


  function getQuestions (){}
  $http
    .get ("http://localhost:3000/")
    .then(function(response) {
      vm.questionsList = response.data;
    });

  function getQuestion(){}
  $http
    .get ("http://localhost:3000/api/cards/)"
    .then(function(response) {
      vm.singleQuestion = response.data;
    });
 

  


 



}
