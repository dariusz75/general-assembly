
var updating = false;
var carToBeUpdeted = null;

var $carsList = ("ajax-content");
var $carCountIndicator = ("car-count");
var $formTitle = $('.form-title');
var $originalFormTitle = $('.form-title').text();
var $submitButtotn = $('.submit-btn');
var $submitButtotnText = $('.submit-btn').text();
var $form = $('#car-form');
var $makeInput = $form.find('#make');
var $bhpInput = $form.find('#bhp');
var $yearInput = $form.find('#year');

var $activeButtonClass = 'active';

//handlebars templating
var toPlace = document.getElementById("ajax-content");
var source = document.getElementById("profile-template").innerHTML;
var templateFn = Handlebars.compile(source);

var _cars = [];




function resetiForm() {
  $form.find('input[type="text"], input[type="number"]').val('');
}

function removeCar(id) {
  var i = _cars.findIndex(function(car){
    return id === car._id;
  });
  _car.splice(i, 1);
}

function updateCar(car, data) {
  var i = _cars.findIndex(function(car){
    return car._id === carToBeUpdeted._id;
  });
  _cars[i] = Object.assign({}, _cars[i], data);
}

function updateUI() {
  $carsList.html='';
  $carCountIndicator.text = _cars.length;
  _cars.forEach(function(car){
    $carsList.innerHTML += templateFn(car);
  });
}

function handleAjaxFail (err) {
  console.log(err.message);
  alert('Ajax failed!');
}

//GET
$.ajax({
  url: '//localhost:3000/cars/'
})
.done(function(cars){
  _cars = cars;
  updateUI();
})
.fail(handleAjaxFail);

$form.on('submit.addOrUpdate', function(e){
  e.preventDefault();
  console.log('bingo');
})






//'//localhost:3000/cars'
//'//jsonplaceholder.typicode.com/comments/111'
