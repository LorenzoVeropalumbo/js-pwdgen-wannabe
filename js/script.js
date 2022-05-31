
// Ask info
alert("Create your passworld")
const userName = prompt('Dimmi il tuo Nome');
const userFirstName = prompt('Dimmi il tuo Cognome');
const userColor = prompt('Dimmi il tuo colore preferito');
let NumberToAdd = 21;

// Test if i take all info
console.log(userName + userFirstName + userColor);
console.log(userName);

// Per vedere se ricordavo qualcosa
if(userName == 0 || userFirstName == 0 || userColor == 0 ){
  alert("DEVI SCRIVERE DEI CARATTERI!")
}

// Create Password
const userPassword = userName + userFirstName + userColor + NumberToAdd;
console.log(userName + userFirstName + userColor + NumberToAdd);

// Message output
document.getElementById('user-password').innerHTML = userPassword;