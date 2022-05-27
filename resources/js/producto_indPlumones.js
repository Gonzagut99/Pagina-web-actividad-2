//Llamar imagenes
let arrayImagenesP=[
    {src:"../resources/img/imagenes_plumones/plumon1.jpg"},
    {src:"../resources/img/imagenes_plumones/plumon2.jpg"},
    {src:"../resources/img/imagenes_plumones/plumon3.jpg"},
    {src:"../resources/img/imagenes_plumones/plumon4.jpg"},
    {src:"../resources/img/imagenes_plumones/plumon6.jpg"},
    {src:"../resources/img/imagenes_plumones/plumon5.jpg"},
    {src:"../resources/img/imagenes_plumones/plumones7.jpg"},
    {src:"../resources/img/imagenes_plumones/plumon8.jpg"},
    {src:"../resources/img/imagenes_plumones/plumon9.jpg"},
];
//Declaración de arrays
let arrayProductos=[
    {id:01,
    breadcrum:"PLUMONES GRIP ESTUCHE X 12 FABER CASTELL",
    titulo:"FABER CASTELL",
    texto:"PLUMONES GRIP ESTUCHE X 12",
    precio:"S/. 6.00",
    detalles:"Ideal para todo artista o aficionado.",
    modelo:"423170",
    marca:"FABER CASTELL",
    },
    {id:02,
    breadcrum:"PLUMONES FIESTA 45 X 20 ESTUCHE RIGIDO FABER CASTELL",
    titulo:"FABER CASTELL",
    texto:"PLUMONES FIESTA 45 X 20 ESTUCHE RIGIDO",
    precio:"S/. 12.00",
    detalles:"Tinta no tóxica y lavable. Código: 555324",
    modelo:"16753",
    marca:"FABER CASTELL",
    },
    {id:03,
    breadcrum:"MARCADOR FIESTA 45 ESTUCHE RÍGIDO X48 FABER CASTELL",
    titulo:"FABER CASTELL",
    texto:"MARCADOR FIESTA 45 ESTUCHE RÍGIDO X48",
    preciodesc:"S/. 13.90 ",
    precionorm:"S/. 15.50",
    porcentajedesc:"-10%",
    porcentajedesct:"-10%",
    detalles:"Punta delgada, ancho de trazo aprox. 0,7 mm. Tinta lavable a base de agua y colorantes alimentarios",
    modelo:"423171",
    marca:"FABER CASTELL",
    },
    {id:04,
    breadcrum:"PLUMÓN EXTRA GRUESO JUMBO 47 NEGRO FABER CASTELL",
    titulo:"FABER CASTELL",
    texto:"PLUMÓN EXTRA GRUESO JUMBO 47 NEGRO",
    precio:"S/. 2.50",
    detalles:"Punta Jumbo redondeada. De 3,6mm. Tinta No Tóxica a base de agua.",
    modelo:"423180",
    marca:"FABER CASTELL",
    },
    {id:05,
    breadcrum:"PLUMÓN EXTRA GRUESO JUMBO 47 ROJO FABER CASTELL",
    titulo:"FABER CASTELL",
    texto:"PLUMÓN EXTRA GRUESO JUMBO 47 ROJO",
    precio:"S/. 2.50",
    detalles:"Punta Jumbo redondeada. De 3,6mm. Tinta No Tóxica a base de agua.",
    modelo:"423181",
    marca:"FABER CASTELL",
    },
    {id:06,
    breadcrum:"PLUMÓN EXTRA GRUESO JUMBO 47 AZUL FABER CASTELL",
    titulo:"FABER CASTELL",
    texto:"PLUMÓN EXTRA GRUESO JUMBO 47 AZUL",
    precio:"S/. 2.50",
    detalles:"Punta Jumbo redondeada. De 3,6mm. Tinta No Tóxica a base de agua.",
    modelo:"423182",
    marca:"FABER CASTELL",
    },
    {id:07,
    breadcrum:"PLUMONES TRIMAX DELGADOS A-45 ESTUCHE X 12 ARTESCO",
    titulo:"ARTESCO",
    texto:"PLUMONES TRIMAX DELGADOS A-45 ESTUCHE X 12 ARTESCO",
    precio:"S/. 7.10",
    detalles:"Plumones delgados triangulares en caja plástica x 12 colores.Colores con mayor intensidad y brillo.Punta bloqueada que evita que se hunda. Tapa antiasfixia. Lavable, fácil de retirar de las manos con agua y jabón. Cuerpo ergonómico triangular. No Tóxico.",
    modelo:"743721",
    marca:"ARTESCO",
    },
    {id:08,
    breadcrum:"PLUMÓN TRIMAX- 45 ESTUCHE RÍGIDO X 12 ARTESCO",
    titulo:"ARTESCO",
    texto:"PLUMÓN TRIMAX- 45 ESTUCHE RÍGIDO X 12 ARTESCO",
    preciodesc:"S/. 10.00",
    precionorm:"S/. 12.80",
    porcentajedesc:"-20%",
    porcentajedesct:"-20%",
    detalles:"Plumones delgados triangulares en caja plástica x 12 colores. Colores con mayor intensidad y brillo. Punta bloqueada que evita que se hunda.",
    modelo:"743754",
    marca:"ARTESCO",
    },
    {id:09,
    breadcrum:"PLUMÓN DUO COLOR X 12/24 ARTESCO",
    titulo:"ARTESCO",
    texto:"PLUMÓN DUO COLOR X 12/24 ARTESCO",
    preciodesc:"S/. 10.80",
    precionorm:"S/. 13.10",
    porcentajedesc:"-10%",
    porcentajedesct:"-10%",
    detalles:"Presentación en estuche con 12 marcadores delgados. Marcadores con doble punta de trazo múltiple.",
    modelo:"965734",
    marca:"ARTESCO",
    }
];
//Declaración de variables
var prodIndividualNorm=$("#idProdIndividualNormal");
var prodIndividualDesc=$("#idProdIndividualDescuento");
//Funciones para lanzar los productos
function producto1(){
    $("#idCatalogoPlumones").hide()
    $(prodIndividualNorm).show()
    $("#imgIndividual").append(`<img src=${arrayImagenesP[0].src} style="position:absolute; width: 550px; margin-left: 15% ;" alt="...">`)
    $("#idBreadcrumN").append(`<li class="breadcrumb-item active" aria-current="page">${arrayProductos[0].breadcrum}</li>`)
    $("#idTituloN").append(`<h5 class="card-title" style="color:gray; position: relative;">${arrayProductos[0].titulo}</h5>`)
    $("#idTextoN").append(`<p class="card-text" style="position: relative; font-size: larger;">${arrayProductos[0].texto}</p>`)
    $("#idPrecioN").append(`<strong style="font-size: 20pt; color: black;">${arrayProductos[0].precio}</strong>`)
    $("#idDetallesN").append(`<p>${arrayProductos[0].detalles}</p>`)
    $("#idModeloN").append(`<span>${arrayProductos[0].modelo}</span>`)
    $("#idMarcaN").append(`<span>${arrayProductos[0].marca}</span>`)
}
function producto2(){
    $("#idCatalogoPlumones").hide()
    $(prodIndividualNorm).show()
    $("#imgIndividual").append(`<img src=${arrayImagenesP[1].src} style="position:absolute; width: 550px; margin-left: 15% ;" alt="...">`)
    $("#idBreadcrumN").append(`<li class="breadcrumb-item active" aria-current="page">${arrayProductos[1].breadcrum}</li>`)
    $("#idTituloN").append(`<h5 class="card-title" style="color:gray; position: relative;">${arrayProductos[1].titulo}</h5>`)
    $("#idTextoN").append(`<p class="card-text" style="position: relative; font-size: larger;">${arrayProductos[1].texto}</p>`)
    $("#idPrecioN").append(`<strong style="font-size: 20pt; color: black;">${arrayProductos[1].precio}</strong>`)
    $("#idDetallesN").append(`<p>${arrayProductos[1].detalles}</p>`)
    $("#idModeloN").append(`<span>${arrayProductos[1].modelo}</span>`)
    $("#idMarcaN").append(`<span>${arrayProductos[1].marca}</span>`)
}
function producto3(){
    $("#idCatalogoPlumones").hide()
    $(prodIndividualDesc).show()
    $("#imgIndividual2").append(`<img src=${arrayImagenesP[2].src} style="position:absolute; width: 550px; margin-left: 15% ;" alt="...">`)
    $("#idBreadcrumD").append(`<li class="breadcrumb-item active" aria-current="page">${arrayProductos[2].breadcrum}</li>`)
    $("#idTituloD").append(`<h5 class="card-title" style="color:gray; position: relative;">${arrayProductos[2].titulo}</h5>`)
    $("#idTextoD").append(`<p class="card-text" style="position: relative; font-size: larger;">${arrayProductos[2].texto}</p>`)
    $("#idPrecioEspecialD").append(`<strong style="font-size: 20pt; color: #E80707;">${arrayProductos[2].preciodesc}</strong>`)
    $("#idPrecioRegularD").append(`<h5 class="descutext2">${arrayProductos[2].precionorm}</h5>`)
    $("#idDescuentoTagD").append(`<span>${arrayProductos[2].porcentajedesc}</span>`)
    $("#idDescuentoTextoD").append(`<h6 style="background-color: #E80707; color: white;">${arrayProductos[2].porcentajedesct}</h6>`)
    $("#idDetallesD").append(`<p>${arrayProductos[2].detalles}</p>`)
    $("#idModeloD").append(`<span>${arrayProductos[2].modelo}</span>`)
    $("#idMarcaD").append(`<span>${arrayProductos[2].marca}</span>`)
}
function producto4(){
    $("#idCatalogoPlumones").hide()
    $(prodIndividualNorm).show()
    $("#imgIndividual").append(`<img src=${arrayImagenesP[3].src} style="position:absolute; width: 550px; margin-left: 15% ;" alt="...">`)
    $("#idBreadcrumN").append(`<li class="breadcrumb-item active" aria-current="page">${arrayProductos[3].breadcrum}</li>`)
    $("#idTituloN").append(`<h5 class="card-title" style="color:gray; position: relative;">${arrayProductos[3].titulo}</h5>`)
    $("#idTextoN").append(`<p class="card-text" style="position: relative; font-size: larger;">${arrayProductos[3].texto}</p>`)
    $("#idPrecioN").append(`<strong style="font-size: 20pt; color: black;">${arrayProductos[3].precio}</strong>`)
    $("#idDetallesN").append(`<p>${arrayProductos[3].detalles}</p>`)
    $("#idModeloN").append(`<span>${arrayProductos[3].modelo}</span>`)
    $("#idMarcaN").append(`<span>${arrayProductos[3].marca}</span>`)
}
function producto5(){
    $("#idCatalogoPlumones").hide()
    $(prodIndividualNorm).show()
    $("#imgIndividual").append(`<img src=${arrayImagenesP[4].src} style="position:absolute; width: 550px; margin-left: 15% ;" alt="...">`)
    $("#idBreadcrumN").append(`<li class="breadcrumb-item active" aria-current="page">${arrayProductos[4].breadcrum}</li>`)
    $("#idTituloN").append(`<h5 class="card-title" style="color:gray; position: relative;">${arrayProductos[4].titulo}</h5>`)
    $("#idTextoN").append(`<p class="card-text" style="position: relative; font-size: larger;">${arrayProductos[4].texto}</p>`)
    $("#idPrecioN").append(`<strong style="font-size: 20pt; color: black;">${arrayProductos[4].precio}</strong>`)
    $("#idDetallesN").append(`<p>${arrayProductos[4].detalles}</p>`)
    $("#idModeloN").append(`<span>${arrayProductos[4].modelo}</span>`)
    $("#idMarcaN").append(`<span>${arrayProductos[4].marca}</span>`)
}
function producto6(){
    $("#idCatalogoPlumones").hide()
    $(prodIndividualNorm).show()
    $("#imgIndividual").append(`<img src=${arrayImagenesP[5].src} style="position:absolute; width: 550px; margin-left: 15% ;" alt="...">`)
    $("#idBreadcrumN").append(`<li class="breadcrumb-item active" aria-current="page">${arrayProductos[5].breadcrum}</li>`)
    $("#idTituloN").append(`<h5 class="card-title" style="color:gray; position: relative;">${arrayProductos[5].titulo}</h5>`)
    $("#idTextoN").append(`<p class="card-text" style="position: relative; font-size: larger;">${arrayProductos[5].texto}</p>`)
    $("#idPrecioN").append(`<strong style="font-size: 20pt; color: black;">${arrayProductos[5].precio}</strong>`)
    $("#idDetallesN").append(`<p>${arrayProductos[5].detalles}</p>`)
    $("#idModeloN").append(`<span>${arrayProductos[5].modelo}</span>`)
    $("#idMarcaN").append(`<span>${arrayProductos[5].marca}</span>`)
}
function producto7(){
    $("#idCatalogoPlumones").hide()
    $(prodIndividualNorm).show()
    $("#imgIndividual").append(`<img src=${arrayImagenesP[6].src} style="position:absolute; width: 550px; margin-left: 15% ;" alt="...">`)
    $("#idBreadcrumN").append(`<li class="breadcrumb-item active" aria-current="page">${arrayProductos[6].breadcrum}</li>`)
    $("#idTituloN").append(`<h5 class="card-title" style="color:gray; position: relative;">${arrayProductos[6].titulo}</h5>`)
    $("#idTextoN").append(`<p class="card-text" style="position: relative; font-size: larger;">${arrayProductos[6].texto}</p>`)
    $("#idPrecioN").append(`<strong style="font-size: 20pt; color: black;">${arrayProductos[6].precio}</strong>`)
    $("#idDetallesN").append(`<p>${arrayProductos[6].detalles}</p>`)
    $("#idModeloN").append(`<span>${arrayProductos[6].modelo}</span>`)
    $("#idMarcaN").append(`<span>${arrayProductos[6].marca}</span>`)
}
function producto8(){
    $("#idCatalogoPlumones").hide()
    $(prodIndividualDesc).show()
    $("#imgIndividual2").append(`<img src=${arrayImagenesP[7].src} style="position:absolute; width: 550px; margin-left: 15% ;" alt="...">`)
    $("#idBreadcrumD").append(`<li class="breadcrumb-item active" aria-current="page">${arrayProductos[7].breadcrum}</li>`)
    $("#idTituloD").append(`<h5 class="card-title" style="color:gray; position: relative;">${arrayProductos[7].titulo}</h5>`)
    $("#idTextoD").append(`<p class="card-text" style="position: relative; font-size: larger;">${arrayProductos[7].texto}</p>`)
    $("#idPrecioEspecialD").append(`<strong style="font-size: 20pt; color: #E80707;">${arrayProductos[7].preciodesc}</strong>`)
    $("#idPrecioRegularD").append(`<h5 class="descutext2">${arrayProductos[7].precionorm}</h5>`)
    $("#idDescuentoTagD").append(`<span>${arrayProductos[7].porcentajedesc}</span>`)
    $("#idDescuentoTextoD").append(`<h6 style="background-color: #E80707; color: white;">${arrayProductos[7].porcentajedesct}</h6>`)
    $("#idDetallesD").append(`<p>${arrayProductos[7].detalles}</p>`)
    $("#idModeloD").append(`<span>${arrayProductos[7].modelo}</span>`)
    $("#idMarcaD").append(`<span>${arrayProductos[7].marca}</span>`)
}
function producto9(){
    $("#idCatalogoPlumones").hide()
    $(prodIndividualDesc).show()
    $("#imgIndividual2").append(`<img src=${arrayImagenesP[8].src} style="position:absolute; width: 550px; margin-left: 15% ;" alt="...">`)
    $("#idBreadcrumD").append(`<li class="breadcrumb-item active" aria-current="page">${arrayProductos[8].breadcrum}</li>`)
    $("#idTituloD").append(`<h5 class="card-title" style="color:gray; position: relative;">${arrayProductos[8].titulo}</h5>`)
    $("#idTextoD").append(`<p class="card-text" style="position: relative; font-size: larger;">${arrayProductos[8].texto}</p>`)
    $("#idPrecioEspecialD").append(`<strong style="font-size: 20pt; color: #E80707;">${arrayProductos[8].preciodesc}</strong>`)
    $("#idPrecioRegularD").append(`<h5 class="descutext2">${arrayProductos[8].precionorm}</h5>`)
    $("#idDescuentoTagD").append(`<span>${arrayProductos[8].porcentajedesc}</span>`)
    $("#idDescuentoTextoD").append(`<h6 style="background-color: #E80707; color: white;">${arrayProductos[8].porcentajedesct}</h6>`)
    $("#idDetallesD").append(`<p>${arrayProductos[8].detalles}</p>`)
    $("#idModeloD").append(`<span>${arrayProductos[8].modelo}</span>`)
    $("#idMarcaD").append(`<span>${arrayProductos[8].marca}</span>`)
}
