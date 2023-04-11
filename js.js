let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
let check = checkPass.test(password);
console.log(check);
