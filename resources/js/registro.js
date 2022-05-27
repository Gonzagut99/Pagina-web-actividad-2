$(document).ready(function(){
    $("#idBotonDatos").hide();
});
//Declaración de funciones
function BotonDatos (){
    $("#idBotonDatos").show();
}
//Declaración de variables
var contador = 9;
let arrayUsuario=[];
//Funcion Registrarse para usar los datos de los input del formulario
function fnRegistrarse(){
    var vNombre= $("#idNombre").val();
    var vApellido= $("#idApellido").val();
    var vCorreo= $("#idCorreo").val();
    var vEdad= $("#idEdad").val();
    var vSexo= $("#idSexo").val();
    var vDNI= $("#idDNI").val();
    var vTelefono= $("#idTelefono").val();
    var vContraseña= $("#idContraseña").val();
    var vConfirmarPw= $("#idConfirmarPw").val();
    var vDepartamento= $("#idDepartamento").val();
    var vProvincia= $("#idProvincia").val();
    var vDistrito= $("#idDistrito").val();
    var vDireccion= $("#idDireccion").val();

    arrayUsuario.push(
        {id:contador+1,
        oNombre:vNombre,
        oApellido:vApellido,
        oCorreo:vCorreo,
        oEdad:vEdad,
        oSexo:vSexo,
        oDNI:vDNI,
        oTelefono:vTelefono,
        oContraseña:vContraseña,
        oConfirmarPw:vConfirmarPw,
        oDepartamento:vDepartamento,
        oProvincia:vProvincia,
        oDistrito:vDistrito,
        oDireccion:vDireccion
        }
    );
    contador++;
    
    if (fnValidacionCampos()==true){
        BotonDatos();
    }
}

//Funcion de validación de campos utilizados por la funcion registrarse
function fnValidacionCampos(){
    var valor=true;
    var vNombre= $("#idNombre").val();
    var vApellido= $("#idApellido").val();
    var vCorreo= $("#idCorreo").val();
    var vEdad= $("#idEdad").val();
    var vSexo= $("#idSexo").val();
    var vDNI= $("#idDNI").val();
    var vTelefono= $("#idTelefono").val();
    var vContraseña= $("#idContraseña").val();
    var vConfirmarPw= $("#idConfirmarPw").val();
    var vDepartamento= $("#idDepartamento").val();
    var vProvincia= $("#idProvincia").val();
    var vDistrito= $("#idDistrito").val();
    var vDireccion= $("#idDireccion").val();

    var ErrNombre= document.getElementById("idErrorNombre")/*$("#idErrorNombre")*/;
    var ErrApellido= document.getElementById("idErrorApellido");
    var ErrCorreo= document.getElementById("idErrorCorreo");
    var ErrEdad= document.getElementById("idErrorEdad");
    var ErrSexo= document.getElementById("idErrorSexo");
    var ErrDNI= document.getElementById("idErrorDNI");
    var ErrTelefono= document.getElementById("idErrorTelefono");
    var ErrContraseña= document.getElementById("idErrorContraseña");
    var ErrConfirmarPw= document.getElementById("idErrorConfirmarPw");
    var ErrDepartamento= document.getElementById("idErrorDepartamento");
    var ErrProvincia= document.getElementById("idErrorProvincia");
    var ErrDistrito= document.getElementById("idErrorDistrito");
    var ErrDireccion= document.getElementById("idErrorDireccion");

    var lengthDNI=document.getElementById("idLengthDNI");
    var lengthTelefono=document.getElementById("idLengthTelefono");
    var lengthContraseña=document.getElementById("idLengthContraseña");
    var noCoincidePw=document.getElementById("idNoCoincide");


    if(vNombre.trim().length==0){
        valor=false;
        ErrNombre.style.display = "block";
        $("#idNombre").focus();
    }else{ErrNombre.style.display = "none";}

    if(vApellido.trim().length==0){
        valor=false;
        ErrApellido.style.display = "block";
        $("#idApellido").focus();
    }else{ErrApellido.style.display = "none";}

    if(vCorreo.trim().length==0){
        valor=false;
        ErrCorreo.style.display = "block";
        $("#idCorreo").focus();
    }else{ErrCorreo.style.display = "none";}

    if(vEdad.trim().length==0){
        valor=false;
        ErrEdad.style.display = "block";
        $("#idEdad").focus();
    }else{ErrEdad.style.display = "none";}

    if(vSexo.trim().length==0){
        valor=false;
        ErrSexo.style.display = "block";
        $("#idSexo").focus();
    }else{ErrSexo.style.display = "none";}

    if(vDNI.trim().length==0){
        valor=false;
        ErrDNI.style.display = "block";
        $("#idDNI").focus();
    }else if(vDNI.trim().length<8){
        valor=false;
        lengthDNI.style.display = "block";
        $("#idDNI").focus();
    }else if(vDNI.trim().length>8){
        valor=false;
        lengthDNI.style.display = "block";
        $("#idDNI").focus();
    }else{
        ErrDNI.style.display = "none";
        lengthDNI.style.display = "none";
    }

    if(vTelefono.trim().length==0){
        valor=false;
        ErrTelefono.style.display = "block";
        $("#idTelefono").focus();
    }else if(vTelefono.trim().length<9){
        valor=false;
        lengthTelefono.style.display = "block";
        $("#idTelefono").focus();
    }else if(vTelefono.trim().length>9){
        valor=false;
        lengthTelefono.style.display = "block";
        $("#idTelefono").focus();
    }else{
        ErrTelefono.style.display = "none";
        lengthTelefono.style.display = "none"
    }

    if(vContraseña.trim().length==0){
        valor=false;
        ErrContraseña.style.display = "block";
        $("#idContraseña").focus();
    }else if(vTelefono.trim().length<7){
        valor=false;
        lengthContraseña.style.display = "block";
        $("#idContraseña").focus();
    }else{
        ErrContraseña.style.display = "none";
        lengthContraseña.style.display = "none";
    }

    if(vConfirmarPw.trim().length==0){
        valor=false;
        ErrConfirmarPw.style.display = "block";
        $("#idConfirmarPw").focus();
    }else if(vConfirmarPw.trim()!=vContraseña.trim()){
        valor=false;
        noCoincidePw.style.display = "block";
        $("#idConfirmarPw").focus();
    }else{
        ErrConfirmarPw.style.display = "none";
        noCoincidePw.style.display = "none";
    }

    if(vDepartamento.trim().length==0){
        valor=false;
        ErrDepartamento.style.display = "block";
        $("#idDepartamento").focus();
    }else{ErrDepartamento.style.display = "none";}

    if(vProvincia.trim().length==0){
        valor=false;
        ErrProvincia.style.display = "block";
        $("#idProvincia").focus();
    }else{ErrProvincia.style.display = "none";}

    if(vDistrito.trim().length==0){
        valor=false;
        ErrDistrito.style.display = "block";
        $("#idDistrito").focus();
    }else{ErrDistrito.style.display = "none";}
    
    if(vDireccion.trim().length==0){
        valor=false;
        ErrDireccion.style.display = "block";
        $("#idDNI").focus();
    }else{ErrDireccion.style.display = "none";}
    return valor;
}

/*function fnSecciones(){
    $("#idBotonDatos").on("click", function(){
        $("#idSeccion01").hide();
        $("#idSeccion02").show();
        InfoUsuario();
    });
}*/
//Función para mostrar la información de ingresada por el usuario.
function InfoUsuario(){
        $("#idSeccion01").hide();
        $("#idSeccion02").show();

    for (let i=0;i<arrayUsuario.length;i++){
        $("#idInfoUsuario").append(`        
        <li><div style="margin-left:10px;">
        <strong>Nombres:</strong>${arrayUsuario[i].oNombre}<br>
        <strong>Apellidos:</strong>${arrayUsuario[i].oApellido}<br>
        <strong>Correo:</strong>${arrayUsuario[i].oCorreo}<br>
        <strong>Fecha de Nacimiento:</strong>${arrayUsuario[i].oEdad}<br>
        <strong>Sexo:</strong>${arrayUsuario[i].oSexo}<br>
        <strong>DNI:</strong>${arrayUsuario[i].oDNI}<br>
        <strong>Telefono:</strong>${arrayUsuario[i].oTelefono}<br>
        <strong>Contraseña:</strong>${arrayUsuario[i].oContraseña}<br>
        <strong>ConfirmarPw:</strong>${arrayUsuario[i].oConfirmarPw}<br>
        <strong>Departamento:</strong>${arrayUsuario[i].oDepartamento}<br>
        <strong>Provincia:</strong>${arrayUsuario[i].oProvincia}<br>
        <strong>Distrito:</strong>${arrayUsuario[i].oDistrito}<br>
        <strong>Dirección:</strong>${arrayUsuario[i].oDireccion}<br>
        </div></li>
        `);
    }
}


