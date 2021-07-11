function guardarDatos() {
    try {
        var gDatos = validarDatos();
        if (gDatos) {
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
        } else {
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
        if (document.getElementById("txtPassword").value != document.getElementById("txtPassword2").value || document.getElementById("txtPassword").value == "") {
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
validarRut("x");

function validarRut(p_rut) {
    // paso 0 (obtener DV)
    p_rut = "19515530-5";
    var largoRut = p_rut.length
    console.log("Largo rut", largoRut);
    var dvEnviado = p_rut.substr(largoRut - 1, largoRut);
    console.log("guion", dvEnviado);

    // paso 1 (obtener rut sin DV)

    var rutSinDv = p_rut.substr(0, largoRut - 2);
    console.log("Rut sin guion", rutSinDv);

    var largoSinDV = rutSinDv.length;

    // paso 2 (Invertir rut)

    var rutInvertido = "";

    var rutTemporal = rutSinDv;

    for (let index = 0; index < largoSinDV; index++) {
        var ultimoNumero = rutTemporal.substr( rutTemporal.length- 1, rutTemporal.length );
        // console.log("ulitmo numero", ultimoNumero);
       
        rutTemporal = rutTemporal.substr(0, rutTemporal.length - 1); //cada vez que pasa por esta linea sacaremos un substring
        // desde el caracter 0 hasta el largo total del string menos 1, por ende cada vez ira guardando un string mas pequeño
        
        rutInvertido = rutInvertido + ultimoNumero;
        console.log("rut invertido for", rutInvertido);
    }
    console.log("Rut invertido final", rutInvertido);
}
