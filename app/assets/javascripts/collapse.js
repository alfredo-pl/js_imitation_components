$(document).ready(function(){

    $('#btn-toggle').on('click', function(){
        var target = $(this).attr('data-target');
        $(target).slideToggle(350);
      })
});


