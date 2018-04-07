var toPlace = document.getElementById("ajax-content");
var source = document.getElementById("profile-template").innerHTML;
var template = Handlebars.compile(source);

$.ajax({
  url: '//localhost:3000/cars'
}).done(function(response){
  response.forEach(function(respond){
  var HTML = template(respond);
  var listHTML = toPlace.innerHTML; //get current html
  var newHTML = listHTML + HTML; //edit what ive copied
  toPlace.innerHTML = newHTML; //write new stuff
});
  console.log(response);
});








//'//localhost:3000/cars'
//'//jsonplaceholder.typicode.com/comments/111'
