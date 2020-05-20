var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
var colorActual;
colorPersonalizado.addEventListener('change',
  (function () {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;

    // Completar para que cambie el indicador-de-color al colorActual
    //Pensar en reutilizar la funcionalidad para cambiar el indicador-de-color que ya hiciste
    indicadorDeColor.style.backgroundColor = colorPersonalizado;
    indicadorDeColor.style.backgroundColor = colorActual;

  })

);
//selecciono elementos del DOM y luego lo guardo en variables globales
var paleta = document.getElementById("paleta");

var grillaPixeles = document.getElementById("grilla-pixeles");


// creacion de la paleta de colores
function paletaDeColores(nombreColores) {
  for (var i = 0; i < nombreColores.length; i++) {
    var recorridoColor = nombreColores[i];
    //crea un elemento div
    var color = document.createElement("div");
    // crea la clase
    color.className = "color-paleta";
    color.style = ("background-color:" + recorridoColor);
    //el div q cremos es hijo de paleta
    paleta.appendChild(color);
  }
}


//creacion de pixeles
function CargarGrilla() {
  for (var i = 0; i < 1750; i++) {
    var grilla = document.createElement("div");
    grillaPixeles.appendChild(grilla);
  }

}

// funcion iniciar
function iniciar() {
  paletaDeColores(nombreColores);
  CargarGrilla();
}

// Ejecutamos la función iniciar
iniciar();


// Indicador de color: Toma el color selecionado a traves de la clase .color-paleta 
var indicadorDeColor = document.getElementById("indicador-de-color");

$(".color-paleta").click(function () {
  //Tomamos el valor del div seleccionado esto es el "this"
  var colorSeleccionado = $(this).css("backgroundColor");
  $("#indicador-de-color").css("background-color", colorSeleccionado);
});


//pintar un pixel de la grilla

function pintarPixel(grillaDePixeles) {
  var pixel = grillaDePixeles.target;
  $(pixel).css("background-color", indicadorDeColor.style.backgroundColor);
}

//Detectar si el Mouse está Apretado o no
grillaPixeles.addEventListener("mousedown", apretar);
grillaPixeles.addEventListener("mouseup", soltar);
grillaPixeles.addEventListener("mouseover", mover);

var click = false;

function apretar(grillaDePixeles) {
  pintarPixel(grillaDePixeles);
  click = true;
}

function soltar() {
  click = false;
}

function mover(grillaDePixeles)  {
    if (click) {
      pintarPixel(grillaDePixeles);
    }
  };

// guardar nuestro arte en un archivo 

$("#guardar").click(guardarPixelArt);

//cargar superheroe


$(".imgs li img").click(function() {
  var superHeroe = $(this).attr("id");
  cargarSuperheroe(window[superHeroe]);
});

//borrar la pantalla
$("#borrar").click(function () {
$("#grilla-pixeles").children().animate({ backgroundColor: "white" }, 1500);
});












