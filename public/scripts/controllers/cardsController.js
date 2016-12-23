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
    .get ("http://localhost:3000/578414ae4dda540700250522)"
    .then(function(response) {
      vm.singleQuestion = response.data;
    });
 

  



 



}
