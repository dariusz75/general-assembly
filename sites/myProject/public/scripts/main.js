
$(function(){

var updating = false;
var carToBeUpdeted = null;

var $carsList = ("#ajax-content");
var $carCountIndicator = ("#car-count");
var $formTitle = $('#form-title');
var $originalFormTitle = $('#form-title').text();
var $submitButtotn = $('.submit-btn');
var $submitButtotnText = $('.submit-btn').text();
var $form = $('#car-form');
var $makeInput = $form.find('#make');
var $bhpInput = $form.find('#bhp');
var $yearInput = $form.find('#year');

var $activeButtonClass = 'active';

//handlebars templating
var source = $("#profile-template").html();
var templateFn = Handlebars.compile(source);
//var toPlace = document.getElementById("ajax-content");

var _cars = [];




function resetForm() {
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
  $carsList.html('');
  $carCountIndicator.text(_cars.length);
  _cars.forEach(function(car){
    $carsList.append(templateFn(car));
  });
}

function handleAjaxFail (err) {
  console.log(err.message);
  alert('Ajax failed!');
}

//GET
$.ajax({
  url: '//localhost:3000/cars'
})
.done(function(cars){
  _cars = cars;
  updateUI();
})
.fail(handleAjaxFail);

$form.on('submit.addOrUpdate', function(e){
  e.preventDefault();
  var bhpNumber = parseInt($bhpInput.val(), 10);
  if (isNaN(bhpNumber)) {
    $bhpInput.val('');
    alert('BHP must be an integer!');
    return;
  }
  var data = {
    make: $makeInput.val(),
    bhp: bhpNumber,
    year: $yearInput.val()
  };
  console.log(data);
  var callOptions = {
    url: '//localhost:3000/cars/',
    method: 'POST',
    data: data
  };
  console.log(callOptions);
  if (updating) {
    callOptions.method = 'PUT';
    callOptions.url = '//localhost:3000/cars/' + carToBeUpdeted._id;
  }

  $.ajax(callOptions)
    .done(function(car) {
      console.log(car);
      if (updating) {
        updateCar(car, data);
        //exitUpdating();
      } else {
          _cars.push(car);
        }
        updateUI();
    })
    .fail(handleAjaxFail);
})



});


//'//localhost:3000/cars'
//'//jsonplaceholder.typicode.com/comments/111'
