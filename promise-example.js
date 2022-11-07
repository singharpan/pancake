const register = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      //Hame jo karna tha wo ho gaya
      //ab isko resolve kar do
      console.log("user Registered...");
      res("user Registered hurrrhhh....");
    }, 5000);
  });
};

const sendEmail = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("email sent...");
      res("email sent huuurrrrhhh.......");
    }, 3000);
  });
};

const login = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Login done...");
      res("login done hurrrhh....");
    }, 2000);
  });
};

const getUserData = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("got user data....");
      res('hurhhh')
    }, 1000);
  });
};

const displayUserData = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("user Data displayed");
      res()
    }, 1000);
  });
};

//This is the solution
//But it create Callback hell

// register(() => {
//   sendEmail(() => {
//     login(() => {
//       getUserData(() => {
//         displayUserData();
//       });
//     });
//   });
// });

//We can remove call back hell with promises

//Pehle register ko call karo ,then do other stuff
register().then(sendEmail).then(login).then(getUserData).then(displayUserData);
console.log("Other Application work");


//Convert promises into async await (it looks like synchrous but it is asynchrounus)

async function authenticate(){
  const res=await register();
  console.log(res,"response")
    await sendEmail();
    await login();
    await getUserData();
    await displayUserData()

}

authenticate().then((res)=>{
    console.log(res,'ALL promise resolved')
})