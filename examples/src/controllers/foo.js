export default ['$scope', function($scope) {

  $scope.author = {
    fname: 'John',
    lname: 'Nolette',
    age: 21
  }

  $scope.users = [
    {
      fname: 'John',
      lname: 'Doe',
      age: 21,
      field: 'Compuer Science'
    },
    {
      fname: 'Jane',
      lname: 'Doe',
      age: 22,
      field: 'Finance'
    },
    {
      fname: 'Foo',
      lname: 'Bar',
      age: 26,
      field: 'Liberal Arts'
    }
  ]

}]