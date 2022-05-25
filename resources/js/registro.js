function fnRegistrarse(){
    var vNombre= $("#idNombre").val();
    var vApellido= $("#idApellido").val();
    var vCorreo= $("#idCoreo").val();
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

    if (fnValidacionCampos() == true){
        window.alert(message
        );
    } 

}

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

    if(vNombre.trim().length==0){
        valor=false;
        ErrNombre.style.display = "block";
        $("#idNombre").focus();
    }else{
        ErrNombre.style.display = "none";
    }
    if(vApellido.trim().length==0){
        valor=false;
        ErrApellido.style.display = "block";
        $("#idApellido").focus();
    }else{
        ErrApellido.style.display = "none";
    }
    if(vCorreo.trim().length==0){
        valor=false;
        ErrCorreo.style.display = "block";
        $("#idCorreo").focus();
    }else{
        ErrCorreo.style.display = "none";
    }
    if(vEdad.trim().length==0){
        valor=false;
        ErrEdad.style.display = "block";
        $("#idEdad").focus();
    }else{
        ErrEdad.style.display = "none";
    }
    if(vSexo.trim().length==0){
        valor=false;
        ErrSexo.style.display = "block";
        $("#idSexo").focus();
    }else{
        ErrSexo.style.display = "none";
    }
    if(vDNI.trim().length==0){
        valor=false;
        ErrDNI.style.display = "block";
        $("#idDNI").focus();
    }else{
        ErrDNI.style.display = "none";
    }
    if(vTelefono.trim().length==0){
        valor=false;
        ErrTelefono.style.display = "block";
        $("#idTelefono").focus();
    }else{
        ErrTelefono.style.display = "none";
    }
    if(vContraseña.trim().length==0){
        valor=false;
        ErrContraseña.style.display = "block";
        $("#idContraseña").focus();
    }else{
        ErrContraseña.style.display = "none";
    }
    if(vConfirmarPw.trim().length==0){
        valor=false;
        ErrConfirmarPw.style.display = "block";
        $("#idConfirmarPw").focus();
    }else{
        ErrConfirmarPw.style.display = "none";
    }
    if(vDepartamento.trim().length==0){
        valor=false;
        ErrDepartamento.style.display = "block";
        $("#idDepartamento").focus();
    }else{
        ErrDepartamento.style.display = "none";
    }
    if(vProvincia.trim().length==0){
        valor=false;
        ErrProvincia.style.display = "block";
        $("#idProvincia").focus();
    }else{
        ErrProvincia.style.display = "none";
    }
    if(vDistrito.trim().length==0){
        valor=false;
        ErrDistrito.style.display = "block";
        $("#idDistrito").focus();
    }else{
        ErrDistrito.style.display = "none";
    }
    if(vDireccion.trim().length==0){
        valor=false;
        ErrDireccion.style.display = "block";
        $("#idDNI").focus();
    }else{
        ErrDireccion.style.display = "none";
    }
    return valor;
}