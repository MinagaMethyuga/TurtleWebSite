document.addEventListener("DOMContentLoaded", () => {
    const mobileNumberInput = document.getElementById("mobileNumber");
    const iti = window.intlTelInput(mobileNumberInput, {
    separateDialCode: true,
})});
  const selectedCountryCode = iti.getSelectedCountryData().dialCode;
  const phoneNumber = iti.getNumber();

function valid(){ 

    var valname= document.getElementById("Name").value;
    if(valname==""){
        alert("Please enter your name");
        return false;
    }
    var valnum= document.getElementById("mobileNumber").value;
    if(valnum==""){
        alert("Please enter your mobile number");
        return false;
    }
    var valemail= document.getElementById("email").value;
    if(valemail==""){
        alert("Please enter your email");
        return false;
    }
    var valconfirmemail= document.getElementById("confirmEmail").value;
    if(valconfirmemail==valemail){
        window.location.href = "Payment.html";
    }else{
        alert("Enter a matching Emails.");
        return false;
    }

    var name = document.getElementById("Name").value;
    localStorage.setItem("Name", name);
    var num= document.getElementById("mobileNumber").value;
    localStorage.setItem("mobileNumber", num);
    var email = document.getElementById("email").value;
    localStorage.setItem("email", email);

    window.location.href = "Payment.html";
}
