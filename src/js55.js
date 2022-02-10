var hr=0;
var min=0;
var sec=0;
var msec=0;
var setval=false;
// var timer=false;

// function start(){
// timer=true;
// stopwatch()
// }

// function stopwatch(){
//     if(timer===true){
//         msec=msec+1;
//         document.getElementById("msec").innerHTML=msec;
//         setTimeout("stopwatch()",10);
//         if(msec===100){
//             sec=sec+1;
//             document.getElementById("sec").innerHTML=sec;
//             msec=0
//         }
//         if(sec==60){
//             min=min+1;
//             document.getElementById("min").innerHTML=min;
//             sec=0
//         }
//     }
// }

// function stop(){
//     timer=false
// }
// function reset(){
//     timer=false; 
// document.getElementById("msec").innerHTML=0
// }

function start(){
    setval=true;
    stopwatch();
}

function stopwatch(){
if(setval===true){
    msec=msec+1;
    document.getElementById("msec").innerHTML=msec;
   
}

   setTimeout("stopwatch()",10)
 if(msec===100){
     sec=sec+1;
     document.getElementById("sec").innerHTML=sec;
     msec=0;
 }
}

function stop(){
    setval=false;
}