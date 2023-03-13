var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".nav").style.top = "0";
  } else {
    document.querySelector(".nav").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
  if (window.scrollY > 15) {
    document.querySelector(".nav").style.backgroundColor = "white";
    document.querySelector(".nav").style.borderBottom = "0.5px solid lightgrey";
  } else {
    document.querySelector(".nav").style.backgroundColor = "transparent";
    document.querySelector(".nav").style.borderBottom = "none";
  }
};

let doFlex = (selector) => {
  document.querySelector(`${selector}`).style.display = "flex";
};

let doBlock = (selector) => {
  document.querySelector(`${selector}`).style.display = "block";
};
let doNone = (selector) => {
  document.querySelector(`${selector}`).style.display = "none";
};
const link1 = "http://localhost:3000";
const link2 = "https://desolate-badlands-28322.herkouapp.com";

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  // document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  // document.getElementById("main").style.marginLeft = "0";
}

let loginForm = document.querySelector(".login-form");
document.querySelectorAll(".spinner-border").forEach((e) => {
  e.style.display = "none";
});

loginForm.addEventListener("submit", (e) => {
  doBlock(".login-spinner");
  doNone(".login-error");
  sendLoginRequest(loginForm.username.value, loginForm.password.value);
  e.preventDefault();
});

doNone(".login-error");
let sendLoginRequest = async (username, password) => {
  let result = await axios.post(`http://localhost:3000/auth/login`, {
    username: username,
    password: password,
  });
  doNone(".login-spinner");
  let data = result.data;
  if (data == "incorrect username or password") {
    doFlex(".login-error");
    document.querySelector(".login-message").innerText =
      "incorrect username or password";
  } else {
    window.location.reload();
  }
};

let registerForm = document.querySelector(".register-form");

registerForm.addEventListener("submit", (e) => {
  doBlock(".register-spinner");
  document.querySelector(".register-spinner").style.marginLeft = "10px";
  doNone(".register-error");

  sendRegisterRequest(
    registerForm.username.value,
    registerForm.password.value,
    registerForm.email.value
  );
  e.preventDefault();
});

doNone(".register-error");
let sendRegisterRequest = async (username, password, email) => {
  let result = await axios.post(`http://localhost:3000/auth/register`, {
    username,
    password,
    email,
  });
  document.querySelector(".register-spinner").style.display = "none";

  if (result.data == "A user with the given username is already registered") {
    doFlex(".register-error");
    document.querySelector(".register-message").innerText = result.data;
  } else {
    window.location.reload();
  }
};

doNone(".recover-error");
doNone(".recover-success");

let recoverForm = document.querySelector(".recover-form");

recoverForm.addEventListener("submit", (e) => {
  doNone(".recover-success");
  doNone(".recover-error");
  doBlock(".recover-spinner");
  sendRecoverRequest(recoverForm.email.value, recoverForm.username.value);
  e.preventDefault();
});

let sendRecoverRequest = async (email, username) => {
  let result = await axios.post(`http://localhost:3000/auth/reset-password`, {
    email: email,
    username: username,
  });
  doNone(".recover-spinner");
  if (
    result.data ==
    "A password reset link has been sent to your registered email address"
  ) {
    doFlex(".recover-success");
    document.querySelector(".recover-success-message").innerText = result.data;
    doNone(".recover-error");
  } else {
    doNone(".recover-success");
    doFlex(".recover-error");
    document.querySelector(".recover-error-message").innerText = result.data;
  }
};

let comparisonToggler = document.querySelector(".comparison-toggler");
let comparisons = document.querySelector(".comparisons");

let sideIcon = document.querySelector(".sidenav > div > span i");

comparisonToggler.addEventListener("click", () => {
  if (comparisons.style.display == "flex") {
    doNone(".comparisons");
    sideIcon.style.transform = "rotate(-90deg)";
  } else {
    sideIcon.style.transform = "rotate(0deg)";
    doFlex(".comparisons");
  }
});

let newsToggler = document.querySelector(".side-news");
let news = document.querySelector(".main-side-news");

let sideIconNews = document.querySelector(".side-news > span > i");

newsToggler.addEventListener("click", () => {
  if (news.style.display == "flex") {
    news.style.display = "none";
    sideIconNews.style.transform = "rotate(-90deg)";
  } else {
    sideIconNews.style.transform = "rotate(0deg)";
    news.style.display = "flex";
  }
});
