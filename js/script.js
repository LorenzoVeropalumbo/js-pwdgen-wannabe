
// Ask info
alert("Create your passworld")
let userName = prompt('Dimmi il tuo Nome');
let userFirstName = prompt('Dimmi il tuo Cognome');
let userColor = prompt('Dimmi il tuo colore preferito');
let NumberToAdd = 21;

// Test if i take all info
console.log(userName + userFirstName + userColor);
console.log(userName);

/* Only for fun

// Per vedere se ricordavo qualcosa
if(userName == 0){
  let userName = prompt('Dimmi un nome valido');
}

if(userFirstName == 0){
  let userFirstName = prompt('Dimmi un Cognome valido');
}

if(userColor == 0 ){
  let userColor = prompt('Dimmi un colore valido');
}
*/

// Create Password
const userPassword = userName + userFirstName + userColor + NumberToAdd;
console.log(userName + userFirstName + userColor + NumberToAdd);

// Message output
document.getElementById('user-password').innerHTML = userPassword;