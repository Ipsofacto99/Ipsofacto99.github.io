var firebaseConfig = {
    apiKey: "AIzaSyCvxeCxL1UYwj9-IYVpibylbE9PsZa9QXU",
    authDomain: "iptraker-30fba.firebaseapp.com",
    databaseURL: "https://iptraker-30fba.firebaseio.com",
    projectId: "iptraker-30fba",
    storageBucket: "iptraker-30fba.appspot.com",
    messagingSenderId: "1078530647540",
    appId: "1:1078530647540:web:05690daf4601fd385c05a1",
    measurementId: "G-4JMKWXMP1K"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();







const key = 'dc866e1e7a2008ad1a8f0144aeab5cca';
var ciudad;
var pais;
var latitud;
var longitud;
var loc;
var bandera;




function reveal(){
    $('#flag').attr("src", bandera);
    var nombre = $("#nametag").val();
    $('#name').text(nombre)
    $('#country').text(pais)
    $('#citi').text(ciudad)
    $('#lat').text(latitud)
    $('#long').text(longitud)
    $('#datas').fadeIn();
    writeUserData(nombre,ciudad,pais,longitud,latitud,bandera)
}



$(document).ready(function(){
    $("#btnx").click(function(){
        var str = $("#ipsearch").val();
        fetch('http://api.ipstack.com/'+str+'?access_key='+key).then(function(response) {
            return response.json();
          })
          .then(function(mycity) {
           ciudad = mycity.city
           pais = mycity.country_name
           longitud = mycity.longitude
           latitud = mycity.latitude
           loc = mycity.location
           bandera = loc.country_flag
           reveal();
          });



        });
});


function writeUserData(nombre, ciudad, pais, longitud, latitud, bandera) {
    firebase.database().ref('usuarios').push( data = {
      username: nombre,
      ciudad: ciudad,
      pais:pais,
      longitud:longitud,
      latititud:latitud,
      bandera: bandera
    });
  }

  var lugar = firebase.database().ref('usuarios');
  lugar.on('value', gotData, errData);

  function gotData(data){
 var ubicaciones = data.val();
 var entradas = Object.keys(ubicaciones);
 for (var i = 0; i < entradas.length; i++){
     var e = entradas[i];
     var nombres = ubicaciones[e].username
     var ciudades = ubicaciones[e].ciudad
     var paises = ubicaciones[e].pais
     var longitudes = ubicaciones[e].longitud
     var latitudes = ubicaciones[e].latititud
     var banderas = ubicaciones[e].bandera

     populate(nombres,paises,ciudades,latitudes,longitudes,banderas)


 }
  }

  function errData(data){
      console.log("esta mal we")
      console.log(err)
      
}


function populate(n,p,c,lt,lg,bnd){

    $we = $( "#metelos" )
    $card = $( "#datas" )
    $estruct = $card.clone()
    $estruct.find('#name').text(n);
    $estruct.find('#country').text(p);
    $estruct.find('#citi').text(c);
    $estruct.find('#lat').text(lt);
    $estruct.find('#long').text(lg);
    $estruct.find('#flag').attr("src", bnd);
    $estruct.hide()
    $we.append($estruct)
    $estruct.fadeIn()

}