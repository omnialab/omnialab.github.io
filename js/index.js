$(function() {
  $('#splash span').on('click', function() {
    $('html, body').animate({
      scrollTop: $('#content').offset().top
    }, 1000);
  });
});
