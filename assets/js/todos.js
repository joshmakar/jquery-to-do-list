// Toggle input
$('.fa-plus').on('click', function(){
  console.log('clicked on plus');
  $('input[type="text"]').slideToggle();
});

// Add todo
$('input[type="text"]').on('keypress', function(event){
  if(event.which === 13){
    var newTodo = $(this).val();
    $('<li><span><i class="fa fa-trash"></i></span> ' + newTodo + '</li>').appendTo('ul').hide().slideDown();
    $(this).val('');
  }
});

// Check off specific todos by clicking.
$('ul').on('click', 'li', function(){
  $(this).toggleClass('completed');
});

// Click on X to delte to-do
$('ul').on('click', 'span', function (event) {
   $(this).parent().slideUp(500, function(){
     $(this).remove();
   });
   event.stopPropagation();
});