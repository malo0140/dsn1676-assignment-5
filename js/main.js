var $toDoList = $('.todo');

var $moveDownButton = $('.move-down');
var $form = $('form');
var $input = $('#list');

$form.on('submit', function(eventobject) {
    eventobject.preventDefault();
    
    $toDoList.css('todo', $input.val());
    
    var $theH1 = $('<h1>');
    $theH1.html($input.val());
    
    $toDoList.prepend($theH1)
    
    $input.val('');
    
});

//$theH1.on('click' function () {

  //  $theH1.css('stroke')
    
//});