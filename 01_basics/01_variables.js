const accountId = 14433. // const for fix variable 
let accountEmail = "umer077@gamil.com" // let for redefinable variable
var accountPassword = "1234567"
accountCity = "Multan" // we can save value for variable without using any variable
//  but its not safe
let accountState;  //no value means its undefined at the moment 

// accountId = 2 // const cant be changed

accountEmail = "umer@gamil.com"

accountPassword = "1234"
 
accountCity = "Lahore"

console.log(accountId);

/*
Prefer not to use var bcz of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

