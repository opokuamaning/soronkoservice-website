"use strict";

/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

/**
 * PRELOADER
 *
 * preloader will be visible until document load
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

/**
 * MOBILE NAVBAR
 *
 * show the mobile navbar when click menu button
 * and hidden after click menu close button or overlay
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

addEventOnElements(navTogglers, "click", toggleNav);

/**
 * HEADER & BACK TOP BTN
 *
 * active header & back top btn when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElementOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
};

window.addEventListener("scroll", activeElementOnScroll);

/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementOnScroll = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (
      revealElements[i].getBoundingClientRect().top <
      window.innerHeight / 1.15
    ) {
      revealElements[i].classList.add("revealed");
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
};

window.addEventListener("scroll", revealElementOnScroll);

window.addEventListener("load", revealElementOnScroll);

/* Switch tabs */
const tabs = document.querySelectorAll(".tab-btn");
const allContent = document.querySelectorAll(".tab-content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    console.log(tab.classList.add);
    tab.classList.add("active");
    allContent.forEach((content) => {
      content.classList.remove("active");
    });
    allContent[index].classList.add("active");
  });
});

/* Form validation */
const form = document.getElementById("form");
const fName = document.getElementById("fname");
const email = document.getElementById("email");
const message = document.getElementById("message");

const sendMail = () => {
  console.log("Sending email...");
  let params = {
    name: document.getElementById("fname").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  const serviceID = "service_j8pbjfk";
  const templateID = "template_2uk72cc";
  emailjs
    .send(serviceID, templateID, params)
    .then((response) => {
      document.getElementById("fname").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(response);
      alert("Message Sent");
    })
    .catch((error) => console.log(error));
};

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  //console.log("clicked", form);
  if(checkInputs()){
    sendMail();
    //window.location.href = "/index.html"
  }
  
  
});
const checkInputs = () => {
  const nameValue = fName.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();
  //console.log(nameValue, emailValue, messageValue);

  if (nameValue === "") {
    // show error
    // add success class
   setErrorFor(fName, "Name cannot be blank");
   return false
    // console.log("Clicked")
  } else {
    // add success class
    setSuccessFor(fName);
  }
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
    return false
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
    return false
  } else {
    setSuccessFor(email);
  }
  if (messageValue === "") {
    setErrorFor(message, "Message cannot be blank");
    return false
  } else {
    setSuccessFor(message);
  }
  return true
};

const setErrorFor = (input, message) => {
  const formControl = input.parentElement; // call .formcontrol class
  const small = formControl.querySelector("small");

  // add error message inside small
  small.innerText = message;
  formControl.className = "formcontrol error";
  // console.log(formControl.className)
};

const setSuccessFor = (input) => {
  const formControl = input.parentElement;
  formControl.className = "formcontrol success";
};

const isEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

const appForm = document.getElementById("app-form");
const appName = document.getElementById("app-name");
const appEmail = document.getElementById("app-email");
const appPhone = document.getElementById("app-phone");
const appDateTime = document.getElementById("app-date-time");
const appMessage = document.getElementById("app-message");

appForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  if(checkAppInputs()){
    sendAppMail()
    //window.location.href = "/index.html"
  }
  
});

const sendAppMail = () => {
  console.log("Sending email...");
  let params = {
    appName: document.getElementById("app-name").value,
    appEmail: document.getElementById("app-email").value,
    appPhone: document.getElementById("app-phone").value,
    appMessage: document.getElementById("app-message").value,
    appDateTime: document.getElementById("app-date-time").value,
  };
  const serviceID = "service_j8pbjfk";
  const templateID = "template_r5id5q9";
  emailjs
    .send(serviceID, templateID, params)
    .then((response) => {
      document.getElementById("app-name").value = "";
      document.getElementById("app-email").value = "";
      document.getElementById("app-phone").value = "";
      document.getElementById("app-message").value = "";
      document.getElementById("app-date-time").value = "";
      console.log(response);
      alert("Message Sent");
    })
    .catch((error) => console.log(error));
};


const checkAppInputs = () => {
  const appNameValue = appName.value.trim();
  const appEmailValue = appEmail.value.trim();
  const appPhoneValue = appPhone.value.trim();
  const appDateTimeValue = appDateTime.value.trim();
  const appMessageValue = appMessage.value.trim();

  if (appNameValue === "") {
    // show error
    // add success class
    setErrorFor(appName, "Name cannot be blank");
    return false
    // console.log("Clicked")
  } else {
    // add success class
    setSuccessFor(appName);
  }
  if (appEmailValue === "") {
    // show error
    // add success class
    setErrorFor(appEmail, "Name cannot be blank");
    return false
    // console.log("Clicked")
  } else if (!isEmail(appEmailValue)) {
    setErrorFor(appEmail, "Email is not valid");
    return false
  } else {
    // add success class
    setSuccessFor(appEmail);
  }
  if (appPhoneValue === "") {
    // show error
    // add success class
    setErrorFor(appPhone, "Name cannot be blank");
    return false
    // console.log("Clicked")
  } else {
    // add success class
    setSuccessFor(appPhone);
  }
  if (appDateTimeValue === "") {
    // show error
    // add success class
    setErrorFor(appDateTime, "Name cannot be blank");
    return false
    // console.log("Clicked")
  } else {
    // add success class
    setSuccessFor(appDateTime);
  }
  if (appMessageValue === "") {
    // show error
    // add success class
    setErrorFor(appMessage, "Name cannot be blank");
    return false
    // console.log("Clicked")
  } else {
    // add success class
    setSuccessFor(appMessage);
  }
  return true
};
