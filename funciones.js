//VARIABLES CLAVE

// Empresa
var Ptotal = 31684;
var CostoMateriaPrima;
var CostoColaboradores;
var CostoCostosIndirectos;

// Tiempo
Mtrabajo = 1;
Atotal = 1;


// OBJETOS
// MATERIA PRIMAS

// Diarias
var Mprima1 = {
    nombre: "Cera (350g)",
    precio: 5,
    cantidad: Ptotal,
    costo: function cst() {
        x = this.precio * Ptotal;
        return x;
    }
}

var Mprima2 = {
    nombre: "Mechas",
    precio: 5,
    cantidad: Ptotal,
    costo: function cst() {
        x = this.precio * Ptotal;
        return x;
    }
}

var Mprima3 = {
    nombre: "Recipientes",
    precio: 8,
    cantidad: Ptotal,
    costo: function cst() {
        x = this.precio * Ptotal;
        return x;
    }
}

var Mprima4 = {
    nombre: "Empaques",
    precio: 10,
    cantidad: Ptotal / 4,
    costo: function cst() {
        x = this.precio * this.cantidad;
        return x;
    }
}

//Mensuales

var Mprima5 = {
    nombre: "Papeleria",
    precio: 8000,
    cantidad: Mtrabajo,
    costo: function cst() {
        x = this.precio * this.cantidad;
        return x;
    }
}

var Mprima6 = {
    nombre: "Objetos Trabajo",
    precio: 1000,
    cantidad: Mtrabajo,
    costo: function cst() {
        x = this.precio * this.cantidad;
        return x;
    }
}

//Anuales
var Mprima7 = {
    nombre: "Maquinaria",
    precio: 35000,
    cantidad: Atotal,
    costo: function cst() {
        x = this.precio * this.cantidad;
        return x;
    }
}


// COLABORADORES

var Colab1 = {

    nombre: 'Gerente Producción',
    cantidad: 1,
    precio: 8940,
    costo: function cst() {
        x = this.precio * this.cantidad
        return x;
    }

}

var Colab2 = {

    nombre: 'Gerente Ventas',
    cantidad: 1,
    precio: 10456,
    costo: function cst() {
        x = this.precio * this.cantidad
        return x;
    }

}

var Colab3 = {

    nombre: 'Transportista',
    cantidad: 1,
    precio: 7058,
    costo: function cst() {
        x = this.precio * this.cantidad
        return x;
    }

}

var Colab4 = {

    nombre: 'Operario',
    cantidad: 10,
    precio: 5460,
    costo: function cst() {
        x = this.precio * this.cantidad
        return x;
    }

}


//COSTOS INDIRECTOS

var Cost1 = {

    nombre: "agua",
    cantidad: Mtrabajo,
    precio: 689,
    costo: function cst() {
        x = this.cantidad * this.precio
    }

}


var Cost1 = {

    nombre: "agua",
    cantidad: Mtrabajo,
    precio: 689,
    costo: function cst() {
        x = this.cantidad * this.precio
    }

}

var Cost2 = {

    nombre: "luz",
    cantidad: Mtrabajo,
    precio: 1500,
    costo: function cst() {
        x = this.cantidad * this.precio
    }

}

var Cost3 = {

    nombre: "Internet",
    cantidad: Mtrabajo,
    precio: 800,
    costo: function cst() {
        x = this.cantidad * this.precio
    }

}

var Cost4 = {

    nombre: "renta",
    cantidad: Mtrabajo,
    precio: 4000,
    costo: function cst() {
        x = this.cantidad * this.precio
    }

}

var Cost5 = {

    nombre: "Limpieza",
    cantidad: Mtrabajo,
    precio: 2800,
    costo: function cst() {
        x = this.cantidad * this.precio
    }

}
var Cost6 = {

    nombre: "Gas",
    cantidad: Mtrabajo,
    precio: 400,
    costo: function cst() {
        x = this.cantidad * this.precio
    }

}
// ARRAYs Globales

//MPs

var ArrNomMprim = [];
var ArrPreMprim = [];
var ArrCantMprim = [];
var ArrCostMprim = [];

//CLBs


var ArrNomColab = [];
var ArrPreColab = [];
var ArrCantColab = [];
var ArrCostColab = [];


//CIs

var ArrNomCind = [];
var ArrPreCind = [];
var ArrCantCind = [];
var ArrCostCind = [];


// UTILIDADES


// LISTAS

function HacerListasMp() {
    for (i = 1; i < 8; i++) {
        Ncomp = "Mprima" + i + ".nombre"
        Pcomp = "Mprima" + i + ".precio"
        CAcomp = "Mprima" + i + ".cantidad"
        COcomp = "Mprima" + i + ".costo()"
        ArrNomMprim.push(eval(Ncomp))
        ArrPreMprim.push(eval(Pcomp))
        ArrCantMprim.push(eval(CAcomp))
        ArrCostMprim.push(eval(COcomp))

    }
}

function HacerListasCb() {
    for (i = 1; i < 5; i++) {
        Ncomp2 = "Colab" + i + ".nombre"
        Pcomp2 = "Colab" + i + ".precio"
        CAcomp2 = "Colab" + i + ".cantidad"
        COcomp2 = "Colab" + i + ".costo()"
        ArrNomColab.push(eval(Ncomp2))
        ArrPreColab.push(eval(Pcomp2))
        ArrCantColab.push(eval(CAcomp2))
        ArrCostColab.push(eval(COcomp2))
    }
}


function HacerListasCI() {
    for (i = 1; i < 6; i++) {
        Ncomp3 = "Cost" + i + ".nombre"
        Pcomp3 = "Cost" + i + ".precio"
        CAcomp3 = "Cost" + i + ".cantidad"
        COcomp3 = "Cost" + i + ".costo()"
        ArrNomCind.push(eval(Ncomp3))
        ArrPreCind.push(eval(Pcomp3))
        ArrCantCind.push(eval(CAcomp3))
        ArrCostCind.push(eval(COcomp3))
    }
}

function HacerListas() {
    HacerListasMp();
    HacerListasCb();
    HacerListasCI();
}



function CurrencyFormatted(amount) {
    var i = parseFloat(amount);
    if (isNaN(i)) {
        i = 0.00;
    }
    var minus = '';
    if (i < 0) {
        minus = '-';
    }
    i = Math.abs(i);
    i = parseInt((i + .005) * 100);
    i = i / 100;
    s = new String(i);
    if (s.indexOf('.') < 0) {
        s += '.00';
    }
    if (s.indexOf('.') == (s.length - 2)) {
        s += '0';
    }
    s = minus + s;
    return s;
}




function CommaFormatted(amount) {
    var delimiter = ","; // replace comma if desired
    var a = amount.split('.', 2)
    var d = a[1];
    var i = parseInt(a[0]);
    if (isNaN(i)) {
        return '';
    }
    var minus = '';
    if (i < 0) {
        minus = '-';
    }
    i = Math.abs(i);
    var n = new String(i);
    var a = [];
    while (n.length > 3) {
        var nn = n.substr(n.length - 3);
        a.unshift(nn);
        n = n.substr(0, n.length - 3);
    }
    if (n.length > 0) {
        a.unshift(n);
    }
    n = a.join(delimiter);
    if (d.length < 1) {
        amount = n;
    } else {
        amount = n + '.' + d;
    }
    amount = minus + amount;
    return amount;
}

// OPERACIONES

function getSum(total, num) {
    return total + Math.round(num);
}


function SumarCostos() {
    CostoMateriaPrima = ArrCostMprim.reduce(getSum, 0);
    CostoColaboradores = ArrCostColab.reduce(getSum, 0);
    CostoCostosIndirectos = ArrCostCind.reduce(getSum, 0);

}




// VARIABLES JQUERY

//cards
var $mprimas = $('#mp-card').first();
var $mprimassum = $('#mp-card-sum').first();
var $colabs = $('#cb-card').first();
var $cinds = $('#ci-card').first();

// content
var $mptitulo = $('#mp-titulo');
var $mpprecio = $('#mp-precio');
var $mpcosto = $('#mp-costo');

// containers
var $mpcontainer = $('#mp-container')
var $cbcontainer = $('#cb-container')
var $cicontainer = $('#ci-container')
// clones
var $clone = [];






// CONSTRUCTOR JQUERY
function CreateCardMp() {

    for (i = 0; i < ArrNomMprim.length; i++) {

        var titulo = ArrNomMprim[i],
            cantidad = CurrencyFormatted(ArrCantMprim[i]),
            precio = CurrencyFormatted(ArrPreMprim[i]),
            costo = CurrencyFormatted(ArrCostMprim[i]);

        $clone[i] = $mprimas.clone();
        //$clone.push($mprimas.clone())

        $clone[i].find('#mp-titulo')
            .text(titulo)
        $clone[i].find('#mp-precio')
            .text(CommaFormatted(precio))
        $clone[i].find('#mp-costo')
            .text(CommaFormatted(costo))
        $clone[i].find('#mp-cantidad')
            .text(CommaFormatted(cantidad))
        $clone[i].hide()
        $mpcontainer.prepend($clone[i])
        $clone[i].fadeIn()


    }
    return false;
}

function CreateCardMpSum() {        
        costo = CurrencyFormatted(CostoMateriaPrima);
        $clone[i] = $mprimassum.clone();        
        $clone[i].find('#mp-costo-sum')
            .text(CommaFormatted(costo))
        $clone[i].find('#mp-list-sum')
            .text(ArrNomMprim.toString())
        $clone[i].hide()
        $mpcontainer.prepend($clone[i])
        $clone[i].fadeIn()


    
    return false;
}


function CreateCardCb() {

    for (i = 0; i < ArrNomColab.length; i++) {

        var titulo = ArrNomColab[i],
            precio = CurrencyFormatted(ArrPreColab[i]),
            cantidad = ArrCantColab[i]
        costo = CurrencyFormatted(ArrCostColab[i]);

        $clone[i] = $colabs.clone();
        //$clone.push($mprimas.clone())


        $clone[i].find('#cb-titulo')
            .text(titulo)
        $clone[i].find('#cb-precio')
            .text(CommaFormatted(precio))
        $clone[i].find('#cb-costo')
            .text(CommaFormatted(costo))
        $clone[i].find('#cb-cantidad')
            .text(cantidad)
        $clone[i].hide()
        $cbcontainer.prepend($clone[i])
        $clone[i].fadeIn()


    }
    return false;
}


function CreateCardCi() {

    for (i = 0; i < ArrNomCind.length; i++) {

        var titulo = ArrNomCind[i],
            precio = CurrencyFormatted(ArrPreCind[i]),
            cantidad = ArrCantCind[i]
        costo = CurrencyFormatted(ArrCostCind[i]);

        $clone[i] = $cinds.clone();
        //$clone.push($mprimas.clone())


        $clone[i].find('#ci-titulo')
            .text(titulo)
        $clone[i].find('#ci-precio')
            .text(CommaFormatted(precio))
        $clone[i].find('#ci-costo')
            .text(CommaFormatted(costo))
        $clone[i].find('#ci-cantidad')
            .text(cantidad)
        $clone[i].hide()
        $cicontainer.prepend($clone[i])
        $clone[i].fadeIn()


    }
    return false;
}





//EVENTOS

$(".click-here").click(CreateCardMp);
$(".click-here").click(CreateCardMpSum);
$(".click-here").click(CreateCardCb);
$(".click-here").click(CreateCardCi);