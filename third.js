document.getElementById("sets").innerHTML = localStorage.getItem("Date");
document.getElementById("timeset").innerHTML = localStorage.getItem("Time");
document.getElementById("slatd").innerHTML = localStorage.getItem("slaTotal")+"USD";
document.getElementById("slktd").innerHTML = localStorage.getItem("slkTotal")+"USD";
document.getElementById("fatd").innerHTML = localStorage.getItem("faTotal")+"USD";
document.getElementById("fctd").innerHTML = localStorage.getItem("fcTotal")+"USD";
document.getElementById("total").innerHTML = localStorage.getItem("Totalprice")+"USD";

function tprosbut(){
    window.location.href = "User.html";
}