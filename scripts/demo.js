//const cursor = document.querySelector('.cursor');

//document.addEventListener('mousemove', e => {
  //  cursor.setAttribute("style", "top: "+(e.pageY - 5)+"px; left: "+(e.pageX - 5)+"px;")
//})



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

$('.foto').hover(function () {
  
  $(this).removeClass("animate__animated");

}

)


