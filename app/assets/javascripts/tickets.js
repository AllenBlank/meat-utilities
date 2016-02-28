$(document).ready( function(){
  
  var ticketTitles = $('.ticket').find('.ticket-title');
  
  ticketTitles.click(function(){
    var details = $(this).closest('.ticket').find('.ticket-details');
    details.slideToggle();
  });
  
});