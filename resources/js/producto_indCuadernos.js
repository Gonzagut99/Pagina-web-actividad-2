document.get
let arrayImagenesP=[
    {src:"../resources/img/imagenes_plumones/plumon1.jpg"}
];
arrayProductos=[];

var prodIndividual=$("#idProdIndividual");

function productoA(){
    $("#idCatalogoCuadernos").hide()
    $(prodIndividual).show()
    $("#imgIndividual").append(`<img src=${arrayImagenesP[0].src} style="position:absolute; width: 550px; margin-left: 15% ;" alt="...">`)
}