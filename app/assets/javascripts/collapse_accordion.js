$(document).ready(function(){

    $('#accordionExample').on('click', 'button', function(){
        var target = $(this).attr('data-target');
        $(target).slideToggle(350);
      })

});