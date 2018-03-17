/*
console.log('Node is working');
var friends = [{name: 'Tom'}, {name: 'Fred'}, {name: 'Dave'}];
friends.forEach(function(friend){
  console.log(friend.name);
});
*/

var prompt = require('prompt');

var users = [
  {
    cardNumber: 101010,
    pinNumber: 1111,
    balance: 1000
  },
  {
    cardNumber: 202020,
    pinNumber: 2222,
    balance: 2000
  },
  {
    cardNumber: 303030,
    pinNumber: 3333,
    balance: 3000
  },
];




//
// Start the prompt
//
prompt.start();

//
// Get two properties from the user: username and email
//
prompt.get(['pinNumber', 'cardNumber'], function (err, result) {
  //
  // Log the results.
  //
  //console.log('Command-line input received:');
  //console.log('  pin number: ' + result.pinNumber);
  //console.log('  email: ' + result.email);
  var counter = 0;

/*
  users.forEach(function(user) {
    if (result.cardNumber == user.cardNumber && result.pinNumber == user.pinNumber) {
      console.log(user.balance);
    } else if (result.cardNumber != user.cardNumber || result.pinNumber != user.pinNumber){
      console.log('PIN number doesn\'t match the card number. Please provide the correct PIN number.');
      counter++;
      console.log(counter);
    }
  });
*/



switch(result.pinNumber) {
    case '1111':
        console.log('chuj 1');
        break;
    case '2222':
        console.log('chuj 2');
        break;
    case '3333':
        console.log('chuj 3');
        break;

}

});
