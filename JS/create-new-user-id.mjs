// var inputLoginId = document.getElementById("input_login");
// var inputPasswordId = document.getElementById("input_password");
// var inputMailId = document.getElementById("input_mail");
// var button_registr_sitId = document.getElementById("button_registr_site");

// var newUsers = {};

// function userCreateFunc(inputLoginId, inputPasswordId, inputMailId) {
//   this.username = inputLoginId;
//   this.userpassword = inputPasswordId;
//   this.usermail = inputMailId;
// }

// function createId(newUsers) {
//   return Object.keys(newUsers).length;
// }

// button_registr_sitId.addEventListener("click", () => {
//   if (
//     inputLoginId.value.length >= 4 &&
//     inputPasswordId.value.length >= 4 &&
//     inputLoginId.value.length <= 10 &&
//     inputPasswordId.value.length <= 10
//   ) {
//     const loginUser = inputLoginId.value;
//     const passwordUser = inputPasswordId.value;
//     const mailUser = inputMailId.value;

// const user = new userCreateFunc(loginUser, passwordUser, mailUser);

// const userId = "User" + createId(newUsers);

// newUsers[userId] = user;

// console.log(newUsers);
//   } else {
//     alert(
//       "Логин и пароль должны быть не менее четырех(4) и не больше десяти(10) символов!"
//     );
//   }
// });

// var jsonTest = JSON.stringify(newUsers);
// console.log(localStorage.setItem("user", jsonTest.toString()));
