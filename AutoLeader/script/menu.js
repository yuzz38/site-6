$(function(){
    $('.header-mobile-btn').on('click', function(e){
      e.preventDefault();
        $('.header-items').toggleClass('header-items--active');
      });
    }); 