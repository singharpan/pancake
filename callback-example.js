const register = (cb) => {
  setTimeout(() => {
    console.log("user Registered...");
    cb();
  }, 5000);
};

const sendEmail = (cb) => {
  setTimeout(() => {
    console.log("email sent...");
    cb();
  }, 3000);
};

const login = (cb) => {
  setTimeout(() => {
    console.log("Login done...");
    cb();
  }, 1000);
};

const getUserData = (cb) => {
  setTimeout(() => {
    console.log("got user data....");
    cb();
  }, 1000);
};

const displayUserData = () => {
  setTimeout(() => {
    console.log("user Data displayed");
  }, 1000);
};

//This is the solution
//But it create Callback hell

register(() => {
  sendEmail(() => {
    login(() => {
      getUserData(() => {
        displayUserData();
      });
    });
  });
});


//We can remove call back hell with promises


