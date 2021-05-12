//const cursor = document.querySelector('.cursor');

//document.addEventListener('mousemove', e => {
//  cursor.setAttribute("style", "top: "+(e.pageY - 5)+"px; left: "+(e.pageX - 5)+"px;")
//})



var nameArr = ["Beneficios de Afiliarse", "Kits de afiliación", "Preguntas Frecuentes", "Volver al Inicio"];
var namePos = 0;



$("#btn-name").click(function () {
  if (namePos >= 3) {
    namePos = 0;
  }else{
    namePos += 1;

  }

  $("#btn-name").text(nameArr[namePos]);
 
});

$(".btn-round").click(function () {
  if (namePos == 0) {
    namePos = 3;
  }else{
    namePos -= 1;

  }

  $("#btn-name").text(nameArr[namePos]);
 
});

$(".text-indication").click(function () {
  $('.icon-list-2').css({"animation-name": "spin" });
  $("#back").text("REGRESANDO A VIANNEY...");
  window.location.href='https://www.vianney.com.mx';
});


$("#AFI-PAGE1").click(function () {

});

$("#AFI-PAGE2").click(function () {

});

$("#AFI-PAGE3-F").click(function () {

});


$("#AFI-PAGE3-D").click(function () {

});


var rotation = false;


$(".btn-icon").click(function () {
  $(this).parent().siblings(".question-container").click()
})



$('.question-container').click(function () {
  $(this).children('div').toggle()

  if (rotation == false) {
    $(this).siblings('div').css({
      'transform': 'rotate(' + 180 + 'deg)'
    });
    rotation = true;
  } else {
    $(this).siblings('div').css({
      'transform': 'rotate(' + 0 + 'deg)'
    });
    rotation = false;
  }

  ;
})


var sequenceElement = document.getElementById("sequence");
var animacion = false;

var options = {
  keyNavigation: true,
  animateCanvas: false,
  phaseThreshold: false,
  reverseWhenNavigatingBackwards: true
}

var mySequence = sequence(sequenceElement, options);

$('.title').hover(function () {
    $(this).addClass('animate__animated')
    $(this).addClass('animate__pulse')

    const tracker = document.querySelector('.title');
    tracker.addEventListener('animationend', () => {
      $(this).removeClass("animate__animated");
      $(this).removeClass("animate__pulse");
    });
  }

)


$('.sub-title').hover(function () {
    $(this).addClass('animate__animated')
    $(this).addClass('animate__pulse')

    const tracker = document.querySelector('.sub-title');
    tracker.addEventListener('animationend', () => {
      $(this).removeClass("animate__animated");
      $(this).removeClass("animate__pulse");
    });
  }

)

