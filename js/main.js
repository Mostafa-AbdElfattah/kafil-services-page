//Hide Nav Smoothly on Scroll

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("main-navbar").classList.add('nav-top-zero');
    document.getElementById("main-navbar").classList.remove('nav-top-neg-80');
  } else {
    document.getElementById("main-navbar").classList.add('nav-top-neg-80');
    document.getElementById("main-navbar").classList.remove('nav-top-zero');
  }
  prevScrollpos = currentScrollPos;
}

/////////////////////////////////////////
/////Service time counter ////////

function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}


//////////////////////////////////////

///////////////////////////////////////

////// Tabs Active ////////
$(document).ready(function () {

  $(".nav-item").click(function () {
    $('.nav-item').removeClass('active-tab');
    $(this).addClass('active-tab');
  });

  $('.service-description-carousel').owlCarousel({
    items:1,
    loop:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});

///////////////////////////////

  

////////////////////////////////////

/////////  Suggestion Carousals///////

$(".suggested-services-carousal").owlCarousel({
  loop: true,
  nav: true,
  touchDrag  : false,
  mouseDrag  : false,
  // autoplay:true,
  // autoplayTimeout:10000,
  // autoplayHoverPause:true,
  navText: [
      "<img class='prev-arrow ' src=\"./imgs/prev.png\" alt='prev-arrow-pic'>",
      "<img class='next-arrow ' src=\"./imgs/next.png\" alt='next-arrow-pic'>"
  ],
  responsive : {
    0 : {
      items: 1
    },
    600 : {
      items: 2
      
    },
    1200: {
      items: 4
    }
}
});


$('.suggested-services-photo-gallery-carousal').slick({
  accessibility:true,
  autoplay:true,
  autoplaySpeed: 3000,
  dots:true,
  prevArrow:'<button type="button" data-role="none" class="slick-prev"><img class="prev-small" src="./imgs/prev-small.png" alt="prev-arrow-pic"></button>',
  nextArrow:'<button type="button" data-role="none" class="slick-next"><img class="next-small" src="./imgs/next-small.png" alt="next-arrow-pic"></button>'

  

});
////////////////////////////////////////////////////////////



});
