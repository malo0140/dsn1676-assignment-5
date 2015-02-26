var $moveDownEntry = $('.move-down');
var $form = $('form');
var $input = $('#to-do');

$moveDownEntry.on('click', function () {
    var currentLoc = $to-Do.offset();
    
    $to-Do.css('top', currentLoc.top + 10); 
