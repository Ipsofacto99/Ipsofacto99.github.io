//const cursor = document.querySelector('.cursor');

//document.addEventListener('mousemove', e => {
//  cursor.setAttribute("style", "top: "+(e.pageY - 5)+"px; left: "+(e.pageX - 5)+"px;")
//})

function btnPosition() {
  var display = screen.width;
  if (display < 500) {
    $(".btn-container-2").remove();
    $(".btn-area-2").append(`<button type="button" aria-label="Next" class="btn-elipse">Comenzar proceso de afiliación</button>`);
    $(".btn-area-2").fadeIn();
    $(".btn-area-1").fadeIn();
  } else {
    $(".btn-container").remove();
    $(".btn-area-1").append(`<button type="button" aria-label="Next" class="btn-elipse">Comenzar proceso de afiliación</button>`);
    $(".btn-area-2").fadeIn();
    $(".btn-area-1").fadeIn();

  }
}

var nameArr = ["Kits de afiliación", "Preguntas Frecuentes", "Volver al Inicio", "Beneficios de Afiliarse"];



$("#btn-name").click(function () {
  $("#btn-name").text(nameArr[0]);
  nameArr.push(nameArr.splice(0, 1)[0]);
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


$(".question-block").click(function () {
  $(this).children('.question-container').click()
})

$(".horasi").click(function () {
  console.log("hola")
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

