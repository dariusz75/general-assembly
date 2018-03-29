
$(function(){
  var $classer = $('#classer');
  var $addClassButton = $('#add-class-control');
  var $removeClassButton = $('#remove-class-control');
  var $toggleClassButton = $('#toggle-class-control');

  $addClassButton.on('click.addClass', function(){
    $classer.addClass('hinge');
  });
  $removeClassButton.on('click.removeClass', function(){
    $classer.removeClass('hinge');
  });
  $toggleClassButton.on('click.classToggle', function(){
    $classer.toggleClass('hinge');
  });
})
