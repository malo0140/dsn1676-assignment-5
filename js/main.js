var $toDoList = $('.todo');

var $moveDownButton = $('.move-down');
var $form = $('form');
var $input = $('#list');
var $li = $('.li');
var $ol = $('.ol');

$form.on('submit', function(eventobject) {
    eventobject.preventDefault();
    
    $ol.css('ol', $input.val());
    
    var $li = $('<li>');
    $li.html($input.val());
    
    $ol.prepend($li)
    
    $input.val('');    
});

$input.val('');

$done.on('click', 'li', function () {
    $('this').addClass('grey-out');
});