$(document).ready(function() {
  $('.project').on({
    mouseenter: function(){
      $(this).removeClass('faded');
      $('.project').not(this).addClass('faded');
    },
    mouseleave: function(){
      $('.project').removeClass('faded');
    }
  });
})

