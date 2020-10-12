
    step = 1

    function NextStep(){
            step = step + 1;
            $visible = $(`#sp-${step}`);
            $dot = $(`#ind-${step}`);
            $dot.css({"background-color":"#4E9D73", "color": "#4E9D73"});
            $visible.fadeIn()
    }

    function deselect(e) {
        $('.pop').slideFadeToggle(function () {
            e.removeClass('selected');
        });
    }

    $(function () {
        $('.contact').on('click', function () {
            if ($(this).hasClass('selected')) {
                deselect($(this));
            } else {
                $(this).addClass('selected');
                $('.pop').slideFadeToggle();
            }
            return false;
        });

        $('.container').on('click', function () {
            deselect($('.contact'));
            $invisible = $(`#sp-${step}`);
            $invisible.fadeOut();
            $invisibledot = $(`#ind-${step}`);
            $invisibledot.css({"background-color":"rgba(160, 160, 160, 0.5)", "color": "rgba(160, 160, 160, 0.5)"});
            NextStep();
            return false;
        });
    });

    $.fn.slideFadeToggle = function (easing, callback) {
        return this.animate({
            opacity: 'toggle',
            height: 'toggle'
        }, 'fast', easing, callback);
    };

    function start() {
        sizecolor();
        $("#sp-1").fadeIn()
        $("#ind-1").css({"background-color":"#4E9D73", "color": "#4E9D73"});       
        for (let index = 2; index < 17; index++) {
            $spaces = $(`#sp-${index}`)
            $spaces.hide()
        }

    }


    function show(){    
        $(".contents").hide();
        $("#s-rep-1").fadeIn();
       


    }


    $("#rep-1").click(show);
   

    



      var size = "80cm"
      
      $("#50cm, #40cm, #80cm").click(changesize);


      function changesize(){
        e = $(this).attr('id');
        size = e
        sizecolor();
      }




      function sizecolor(){
          if(size == "40cm"){
            $("#40cm").animate({opacity: '0.4'});
            $("#50cm, #80cm").animate({opacity: '1'});
            $(".closet-container").animate({width: '140px'});
          } else if (size == "50cm"){
            $("#50cm").animate({opacity: '0.4'});
            $("#40cm, #80cm").animate({opacity: '1'});
            $(".closet-container").animate({width: '175px'});
          }else{
            $("#80cm").animate({opacity: '0.4'});
            $("#50cm, #40cm").animate({opacity: '1'});
            $(".closet-container").animate({width: '280px'});
          }
      }

    
      var color = "blanco"


      $("#Blanco, #Nogal").click(changecolor);

      function changecolor(){
        e = $(this).attr('id');
        color = e
        colorsize();
      }

      function colorsize(){

        let fondoblanco = "https://cdn.shopify.com/s/files/1/1292/2935/files/fondo-armario2.png?v=1602029050"
        let fondonogal = "https://cdn.shopify.com/s/files/1/1292/2935/files/fondo-armario3.jpg?v=1602479835"

          if(color == "Nogal"){
            $("#Nogal").animate({opacity: '0.4'});
            $("#Blanco").animate({opacity: '1'});
            $('.closet-container').css("background-image", `url(${fondonogal})`);
          }else{
            $("#Blanco").animate({opacity: '0.4'});
            $("#Nogal").animate({opacity: '1'});
            $('.closet-container').css("background-image", `url(${fondoblanco})`);
          }
      }
