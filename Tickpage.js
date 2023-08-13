function myfuction(event){
    event.preventDefault();

    var date = document.getElementById("datePicker").value;

    localStorage.setItem("Date", date);
}
function slaminus(){
    num--;
    if(num>00){
    if(num<10){
        document.getElementById("num").innerHTML = "0"+num;
    }
    else{
        document.getElementById("num").innerHTML = num;
    }
    console.log(num);
  }else{
    num=0;
    document.getElementById("num").innerHTML = "0"+num;
  }
  localStorage.setItem("slaTickets", num);
}

var num= 0;

function slaplus(){
  
    num++;
    if(num<10){
        document.getElementById("num").innerHTML = "0"+num;
    }
    else{
        document.getElementById("num").innerHTML = num;
    }
    console.log(num);
    localStorage.setItem("slaTickets", num);
}

function slkminus(){
    lknum--;
    if(lknum>00){
    if(lknum<10){
        document.getElementById("slknum").innerHTML = "0"+num;
    }
    else{
        document.getElementById("slknum").innerHTML = num;
    }
    console.log(num);
  }else{
    lknum=0;
    document.getElementById("slknum").innerHTML = "0"+num;
  }
  localStorage.setItem("slkTickets", num);
}

var lknum= 0;

function slkplus(){
  
    lknum++;
    if(lknum<10){
        document.getElementById("slknum").innerHTML = "0"+lknum;
    }
    else{
        document.getElementById("slknum").innerHTML = lknum;
    }
    console.log(lknum);
    localStorage.setItem("slkTickets", lknum);
}
function faminus(){
    fanum--;
    if(fanum>00){
    if(fanum<10){
        document.getElementById("fanum").innerHTML = "0"+fanum;
    }
    else{
        document.getElementById("fanum").innerHTML = fanum;
    }
    console.log(fanum);
  }else{
    fanum=0;
    document.getElementById("fanum").innerHTML = "0"+num;
  }
  localStorage.setItem("faTickets", fanum);
}

var fanum= 0;

function faplus(){
  
    fanum++;
    if(fanum<10){
        document.getElementById("fanum").innerHTML = "0"+fanum;
    }
    else{
        document.getElementById("fanum").innerHTML = fanum;
    }
    console.log(fanum);
    localStorage.setItem("faTickets", fanum);
}
function fcminus(){
    fcnum--;
    if(fcnum>00){
    if(fcnum<10){
        document.getElementById("fcnum").innerHTML = "0"+fcnum;
    }
    else{
        document.getElementById("fcnum").innerHTML = fcnum;
    }
    console.log(fcnum);
  }else{
    fcnum=0;
    document.getElementById("fcnum").innerHTML = "0"+fcnum;
  }
  localStorage.setItem("fcTickets", fcnum);
}

var fcnum= 0;

function fcplus(){
  
    fcnum++;
    if(fcnum<10){
        document.getElementById("fcnum").innerHTML = "0"+fcnum;
    }
    else{
        document.getElementById("fcnum").innerHTML = fcnum;
    }
    console.log(fcnum);
    localStorage.setItem("fcTickets", fcnum);
}
function iminus(){
    inum--;
    if(inum>00){
    if(inum<10){
        document.getElementById("inum").innerHTML = "0"+inum;
    }
    else{
        document.getElementById("inum").innerHTML = inum;
    }
    console.log(inum);
  }else{
    inum=0;
    document.getElementById("inum").innerHTML = "0"+inum;
  }
  localStorage.setItem("iTickets", inum);
}

var inum= 0;

function iplus(){
  
    inum++;
    if(inum<10){
        document.getElementById("inum").innerHTML = "0"+inum;
    }
    else{
        document.getElementById("inum").innerHTML = inum;
    }
    console.log(inum);
    localStorage.setItem("iTickets", inum);
}
function prosbut(){
  window.location.href = "timepage.html";
  var date = document.getElementById("datePicker").value;
  localStorage.setItem("Date", date);

    
}







