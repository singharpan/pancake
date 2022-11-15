const register = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("User Registered");
      res("User Registered");
    }, 2000);
  });
};
const sendEmail = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Email Sent");
      res("Email Sent");
    }, 1000);
  });
};

const Login = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Login Successfully");
      res("Login Successfully");
    }, 500);
  });
};

// register()
//   .then(sendEmail)
//   .then(Login)
//   .then((res) => {
//     console.log("All Done");
//   });
const usingAsyncAwait = async() =>{
await register ();
await sendEmail()
await Login()
}
usingAsyncAwait()