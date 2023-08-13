document.getElementById("zslatd").innerHTML = localStorage.getItem("slaTickets")+"Tickets";
document.getElementById("zslktd").innerHTML = localStorage.getItem("slkTickets")+"Tickets";
document.getElementById("zfatd").innerHTML = localStorage.getItem("faTickets")+"Tickets";
document.getElementById("zfctd").innerHTML = localStorage.getItem("fcTickets")+"Tickets";
function timelocal(){
    var time=document.getElementById("time").value;
    localStorage.setItem("Time",  time );
    document.getElementById("timeset").innerHTML = localStorage.getItem("Time");
  }
  
  var slatick =parseInt(localStorage.getItem("slaTickets"));
  var slktick =parseInt(localStorage.getItem("slkTickets"));
  var fatick =parseInt(localStorage.getItem("faTickets"));
  var fctick =parseInt(localStorage.getItem("fcTickets"));
  var itick =parseInt(localStorage.getItem("iTickets"));
  
  var slap = 6;
  var slk = 3;
  var fa = 13;
  var fc = 8;
  var oslap =4;
  var oslk = 2;
  var ofa = 10;
  var ofc = 5;
  
  function sprosbut(){
    if(time ==="10.00am - 12.00pm","15.00pm-18.00pm"){
      var slatp = slatick*slap;
      var fatp = fatick*fa;
      var fctp = fctick*fc;
      var slktp = slktick*slk;
      var total= slatp+fatp+fctp+slktp;
    }else{
      var slatp = slatick*oslap;
      var fatp = fatick*ofa;
      var fctp = fctick*ofc;
      var slktp = slktick*oslk;
      var total= slatp+fatp+fctp+slktp;
    }
    localStorage.setItem("slaTotal", slatp);
    localStorage.setItem("slkTotal", slktp);
    localStorage.setItem("faTotal", fatp);
    localStorage.setItem("fcTotal", fctp);
    localStorage.setItem("Totalprice", total);
    window.location.href = "summerydata.html";
  }
document.getElementById("sets").innerHTML = localStorage.getItem("Date");
document.getElementById("slatd").innerHTML = localStorage.getItem("slaTotal")+"USD";
document.getElementById("slktd").innerHTML = localStorage.getItem("slkTotal")+"USD";
document.getElementById("fatd").innerHTML = localStorage.getItem("faTotal")+"USD";
document.getElementById("fctd").innerHTML = localStorage.getItem("fcTotal")+"USD";
document.getElementById("total").innerHTML = localStorage.getItem("Totalprice")+"USD";