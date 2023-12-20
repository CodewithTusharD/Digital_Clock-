const startTimer=()=>{
    let ref=setInterval(printTimer,1000);
    
    //arrow fx must be declared before calling buts its not same in case of normal fx
   
}

function printTimer() {
    var cdt = new Date();
    document.getElementById('hrs').innerHTML = cdt.getHours();
    document.getElementById('mins').innerHTML = cdt.getMinutes();
    document.getElementById('sec').innerHTML = cdt.getSeconds();
}
startTimer();