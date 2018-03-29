window.onload = function(){
  // Your code goes here.
var redButton = document.getElementById('stop_light_control');
var amberButton = document.getElementById('caution_light_control');
var greenButton = document.getElementById('go_light_control');

var stopLight = document.getElementsByClassName("light")[0];
var cautionLight = document.getElementsByClassName("light")[1];
var goLight = document.getElementsByClassName("light")[2];



//Part 1
redButton.addEventListener('click', function(){
 stopLight.classList.add("on");
 cautionLight.classList.remove("on");
 goLight.classList.remove("on");
});

amberButton.addEventListener('click', function(){
 stopLight.classList.remove("on");
 cautionLight.classList.add("on");
 goLight.classList.remove("on");
});

greenButton.addEventListener('click', function(){
 stopLight.classList.remove("on");
 cautionLight.classList.remove("on");
 goLight.classList.add("on");
});


//Part 2
stopLight.addEventListener('mouseover', function(){
 stopLight.classList.add("on");
 cautionLight.classList.remove("on");
 goLight.classList.remove("on");
});

stopLight.addEventListener('mouseleave', function(){
 stopLight.classList.remove("on");
 cautionLight.classList.remove("on");
 goLight.classList.remove("on");
});

cautionLight.addEventListener('mouseover', function(){
 stopLight.classList.remove("on");
 cautionLight.classList.add("on");
 goLight.classList.remove("on");
});

cautionLight.addEventListener('mouseleave', function(){
 stopLight.classList.remove("on");
 cautionLight.classList.remove("on");
 goLight.classList.remove("on");
});

goLight.addEventListener('mouseover', function(){
 stopLight.classList.remove("on");
 cautionLight.classList.remove("on");
 goLight.classList.add("on");
});

goLight.addEventListener('mouseleave', function(){
 stopLight.classList.remove("on");
 cautionLight.classList.remove("on");
 goLight.classList.remove("on");
});


//Part 3
var myIntervalRed = setInterval(function(){
  stopLight.classList.add("on");
  cautionLight.classList.remove("on");
  goLight.classList.remove("on");
}, 1000);

var myIntervalAmber = setInterval(function(){
  stopLight.classList.remove("on");
  cautionLight.classList.add("on");
  goLight.classList.remove("on");
}, 2000);

var myIntervalGreen = setInterval(function(){
  stopLight.classList.remove("on");
  cautionLight.classList.remove("on");
  goLight.classList.add("on");
}, 3000);

};

// although, feel free to try it here to see if it makes a difference!
