//Llamar imagenes
let arrayImagenesP=[
    {src:"../resources/img/imagenes_plumones/plumon1.jpg"}
];
//Declaración arrays
arrayProductos=[];
//Declaración  de variables
var prodIndividual=$("#idProdIndividual");
//Funcion para lanzar el producto individual
function productoA(){
    $("#idCatalogoCuadernos").hide()
    $(prodIndividual).show()
    $("#imgIndividual").append(`<img src=${arrayImagenesP[0].src} style="position:absolute; width: 550px; margin-left: 15% ;" alt="...">`)
}