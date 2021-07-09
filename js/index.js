function guardarDatos() {
    try {
        var gDatos = validarDatos();
        if (gDatos){
            var datosP = {
                nombre: document.getElementById("txtNombre").value,
                apellidoPaterno: document.getElementById("txtApellidoPaterno").value,
                apellidoMaterno: document.getElementById("txtApellidoMaterno").value,
                sexo: document.getElementById("rdFemenino").checked ? "F" : "M",
                infoDomicilio: {
                    pais: document.getElementById("selPais").value,
                    calle: document.getElementById("txtCalle").value,
                    numero: document.getElementById("txtNumeracion").value,
                    zipcode: document.getElementById("txtZipCode").value == "" ? "00000" : document.getElementById("txtZipCode").value
                },
                infoUsuario: {
                    correo: document.getElementById("txtCorreo").value,
                    nombreUsuario: document.getElementById("txtUserName").value,
                    password: document.getElementById("txtPassword").value,
                }
            };
            console.log("datos", datosP);
            Swal.fire({
                icon: 'success',
                title: 'Muy bien!!!',
                text: 'Usuario validado, puede continuar',
              })
        }else{
            console.log("Los datos no se validaron, revise su información");
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuario no validado, revise información',
              })
        }
        
       

    } catch (error) {
        console.log("Error:", error.stack.toString());


    }

}

function validarDatos() {
    try {
        var resultado = true;
        if (document.getElementById("txtPassword").value != document.getElementById("txtPassword2").value || document.getElementById("txtPassword").value == "" ) {
            resultado = false;
        }
        if (document.getElementById("txtNombre").value == "") {
            resultado = false;
        }
        if (document.getElementById("txtApellidoPaterno").value == "") {
            resultado = false;
        }
        if (document.getElementById("txtApellidoMaterno").value == "") {
            resultado = false;
        }
        if (document.getElementById("txtNumeracion").value == "") {
            resultado = false;
        }
        if (document.getElementById("txtCalle").value == "") {
            resultado = false;
        }
        if (document.getElementById("txtZipCode").value == "") {
            resultado = false;
        }
        if (document.getElementById("txtCorreo").value == "") {
            resultado = false;
        }
        if (document.getElementById("txtUserName").value == "") {
            resultado = false;
        }
        if (document.getElementById("selPais").value == "0") {
            resultado = false;
        }

        return resultado;

    } catch (error) {
        console.log("Error:", error.stack.toString());
        return false;
    }
}