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
  console.log("Sending email...")
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

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
  sendMail();
  
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
    // console.log("Clicked")
  } else {
    // add success class
    setSuccessFor(fName);
  }
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccessFor(email);
  }
  if (messageValue === "") {
    setErrorFor(message, "Message cannot be blank");
  } else {
    setSuccessFor(message);
  }
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
