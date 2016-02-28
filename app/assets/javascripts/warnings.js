$(document).ready( function(){

  $('.delete-button').on('click', function(){
    var warning = $(this).closest('.warning');
    var warningId = warning[0].id.split('-')[1];
    var warningUrl = '/warnings/' + warningId;
    
    warning.fadeOut();
    $.ajax({
      type: "POST",
      url: warningUrl,
      dataType: "json",
      data: {"_method":"delete"},
    }).fail(function(){
      warning.fadeIn();
    });
  });

});