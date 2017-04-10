

function collapseNavbar() {
    $(".navbar").offset().top > 50 ? $(".navbar-fixed-top").addClass("top-nav-collapse") : $(".navbar-fixed-top").removeClass("top-nav-collapse")
}

// $(window).scroll(collapseNavbar), $(document).ready(collapseNavbar), $(function() {
//     $("a.page-scroll").bind("click", function(e) {
//         var t = $(this);
//         $("html, body").stop().animate({
//             scrollTop: $(t.attr("href")).offset().top
//         }, 1500, "easeInOutExpo"), e.preventDefault()
//     })
// }), $(".navbar-collapse ul li a").click(function() {
//     $(this).closest(".collapse").collapse("toggle")
// });

//
// $(document).ready(function(){
//
// // hide our element on page load
// $('#titulo').css('opacity', '0');
//
// $('#titulo').waypoint(function() {
// $('#titulo').addClass('fadeInLeft');
// }, { offset: '50%' });
//
// });


$('#we').waypoint(
  function(direction) {
    if(direction === 'down'){
        $(".1").css('border-color', '#1A1A1A');
      } else {
        $(".1").css('border-color', 'white');
      }
  }
);
$('#services').waypoint(function(direction) {
        $(".1").css('border-color', '#1A1A1A');
  });

$('#clients').waypoint(function(direction) {
        $(".1").css('border-color', 'white');
  });
$('#team').waypoint(function(direction) {
        $(".1").css('border-color', '#1A1A1A');
  });
$('#latam').waypoint(function(direction) {
        $(".1").css('border-color', 'white');
  });
$('#contact').waypoint(function(direction) {
        $(".1").css('border-color', 'white');
  });

(function($) {

    "use strict"; // Start of use strict

    // Esconde el navbar
  $(".navbar-fixed-top").autoHidingNavbar();

    // agrega clase para hacer transparente el navbar
    $(window).scroll(function() {
        if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/
        {
            $('.opaque-navbar').addClass('opaque');
        } else {
            $('.opaque-navbar').removeClass('opaque');
        }
    });

    // Animacion columnas servicios
    $('.gestionventajas').hide();
    $('.ahorroventajas').hide();
    $('.tecnologiaventajas').hide();

  $('.gestioncolumna').click(function(){
    if( $('#activo1').length){
      $('.gestionventajas').removeAttr('id');
      $('.gestionventajas').hide();
      $('.texto1').show(400);
      $('.botongestion').show(400);
      $('.gestioncolumna').css('padding-left', '15px');
      $('.gestioncolumna').css('padding-right', '15px');
      $('.gestion').css('height', '220px');

    } else {
      $('.texto1').hide(400);
      $('.botongestion').hide(400);
      $('.gestionventajas').attr('id', 'activo1');
      $('.gestioncolumna').css('padding-left', '0px');
      $('.gestioncolumna').css('padding-right', '0px');
      $('.gestion').css('height', '70px');
      $('.gestionventajas').animate({
        height: 'toggle'
      });
    }
  });

  $('.ahorrocolumna').click(function(){
    if( $('#activo2').length){
      $('.ahorroventajas').removeAttr('id');
      $('.ahorroventajas').hide();
      $('.texto2').show(400);
      $('.botonahorro').show(400);
      $('.ahorrocolumna').css('padding-left', '15px');
      $('.ahorrocolumna').css('padding-right', '15px');
      $('.ahorro').css('height', '220px');

    } else {
      $('.texto2').hide(400);
      $('.botonahorro').hide(400);
      $('.ahorroventajas').attr('id', 'activo2');
      $('.ahorrocolumna').css('padding-left', '0px');
      $('.ahorrocolumna').css('padding-right', '0px');
      $('.ahorro').css('height', '70px');
      $('.ahorroventajas').animate({
        height: 'toggle'
      });
    }
  });

  $('.tecnologiacolumna').click(function(){
    if( $('#activo3').length){
      $('.tecnologiaventajas').removeAttr('id');
      $('.tecnologiaventajas').hide();
      $('.texto3').show(400);
      $('.botontecnologia').show(400);
      $('.tecnologiacolumna').css('padding-left', '15px');
      $('.tecnologiacolumna').css('padding-right', '15px');
      $('.tecnologia').css('height', '220px');

    } else {
      $('.texto3').hide(400);
      $('.botontecnologia').hide(400);
      $('.tecnologiaventajas').attr('id', 'activo3');
      $('.tecnologiacolumna').css('padding-left', '0px');
      $('.tecnologiacolumna').css('padding-right', '0px');
      $('.tecnologia').css('height', '70px');
      $('.tecnologiaventajas').animate({
        height: 'toggle'
      });
    }
  });

// reproducir automaticamente el video
var video = document.getElementsByClassName('videomapa')[0];

  $(video).hover(function () {

    var el = $(this).children("video")[0];

         $(this).children("video")[0].play();
     },
     function () {
          el.currentTime = 15;
      });

//FOTOS EQUIPO

var foto = document.getElementsByClassName('fotoequipo')[0];
$(".fotoequipo").mouseover(function () {
  $(this).attr('src', $(this).data("hover"));
}).mouseout(function () {
  $(this).attr('src', $(this).data("src"));
});
})(jQuery); // End of use strict
