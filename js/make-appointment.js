const appForm = document.getElementById("app-form");
const appName = document.getElementById("app-name");
const appEmail = document.getElementById("app-email");
const phone = document.getElementById("phone");
const dateTime = document.getElementById("app-date-time");
const appMessage = document.getElementById("app-message");

appForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    checkAppInputs();
})

const checkAppInputs = () => {
    const appNameValue = appName.value.trim();
    const appEmailValue = appEmail.value.trim();
    const phoneValue = phone.value.trim();
    const dateTimeValue = dateTime.value.trim();
    const appMessageValue = appMessage.value.trim();
    //console.log(nameValue, emailValue, messageValue);
  
    if (appNameValue === "") {
      // show error
      // add success class
      setInputErrorFor(appName, "Name cannot be blank");
      // console.log("Clicked")
    } else {
      // add success class
      setInputSuccessFor(appName);
    }
    if (appEmailValue === "") {
      setInputErrorFor(appEmailValue, "Email cannot be blank");
    } else if (!isEmail(appEmailValue)) {
      setInputErrorFor(appEmailValue, "Email is not valid");
    }else if(!isEmail(appEmailValue)){

    } else {
      setInputSuccessFor(appEmailValue);
    }
    if(phoneValue === ""){
        setInputErrorFor(phoneValue, "Phone cannot be blank");
    }else{
        setInputSuccessFor(phoneValue);
    }
    if(dateTimeValue === ""){
        setInputErrorFor(dateTimeValue, "Date cannot be blank");
    }else{
        setInputSuccessFor(dateTimeValue);
    }
    if (appMessageValue === "") {
      setInputErrorFor(appMessageValue, "Message cannot be blank");
    } else {
      setInputSuccessFor(appMessageValue);
    }
};

const setInputErrorFor = (input, message) => {
    const formControl = input.parentElement; // call .formcontrol class
    const small = formControl.querySelector("small");
  
    // add error message inside small
    small.innerText = message;
    formControl.className = "formcontrol error";
    // console.log(formControl.className)
  };
  
  const setInputSuccessFor = (input) => {
    const formControl = input.parentElement;
    formControl.className = "formcontrol success";
  };
  const isInputEmail = (appEmailValue) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      appEmailValue
    );
  };
  
  