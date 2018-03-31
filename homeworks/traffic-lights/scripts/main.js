window.onload = function(){
  // Your code goes here.
var redButton = document.getElementById('stop_light_control');
var amberButton = document.getElementById('caution_light_control');
var greenButton = document.getElementById('go_light_control');
var startButton = document.getElementById('start-lights');
var stopButton = document.getElementById('stop-lights');

var stopLight = document.getElementsByClassName("light")[0];
var cautionLight = document.getElementsByClassName("light")[1];
var goLight = document.getElementsByClassName("light")[2];


function turnRedOn() {
  stopLight.classList.add("on");
  cautionLight.classList.remove("on");
  goLight.classList.remove("on");
};

function turnYellowOn() {
  stopLight.classList.remove("on");
  cautionLight.classList.add("on");
  goLight.classList.remove("on");
};

function turnGreenOn() {
  stopLight.classList.remove("on");
  cautionLight.classList.remove("on");
  goLight.classList.add("on");
}

function turnlightsOff() {
  stopLight.classList.remove("on");
  cautionLight.classList.remove("on");
  goLight.classList.remove("on");
}


//Part 1
redButton.addEventListener('click', turnRedOn);
amberButton.addEventListener('click', turnYellowOn);
greenButton.addEventListener('click', turnGreenOn);


//Part 2
stopLight.addEventListener('mouseover', turnRedOn);
cautionLight.addEventListener('mouseover', turnYellowOn);
goLight.addEventListener('mouseover', turnGreenOn);

stopLight.addEventListener('mouseleave', turnlightsOff);
cautionLight.addEventListener('mouseleave', turnlightsOff);
goLight.addEventListener('mouseleave', turnlightsOff);



//Part 3
turnRedOn();
setTimeout(turnlightsOff, 1000);
setTimeout(turnYellowOn, 1000);
setTimeout(turnlightsOff, 2000);
setTimeout(turnGreenOn, 2000);
setTimeout(turnlightsOff, 3000);
setTimeout(turnYellowOn, 3000);
setTimeout(turnlightsOff, 4000);
setTimeout(turnRedOn, 4000);

//
var myInterval = setInterval(function(){
  setTimeout(turnlightsOff, 1000);
  setTimeout(turnYellowOn,  1000);
  setTimeout(turnlightsOff, 2000);
  setTimeout(turnGreenOn, 2000);
  setTimeout(turnlightsOff, 3000);
  setTimeout(turnYellowOn, 3000);
  setTimeout(turnlightsOff, 4000);
  setTimeout(turnRedOn, 4000);

}, 4000);


stopButton.addEventListener('click', function(){
  clearInterval(myInterval);
});



};

// although, feel free to try it here to see if it makes a difference!
