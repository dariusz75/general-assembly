var source   = $("#profile-template").html();
var template = Handlebars.compile(source);

$.ajax({
  url: '//localhost:3000/cars'
}).done(function(response){
  //create HTML
  var html = template(response);

  //insert new HTML
  $('#ajax-content').html(html);
  console.log(response);
});







//'//localhost:3000/cars'
//'//jsonplaceholder.typicode.com/comments/111'
