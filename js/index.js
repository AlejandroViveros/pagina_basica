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
            document.getElementById("txtPassword").classList.add('datosErroneos');
            document.getElementById("txtPassword2").classList.add('datosErroneos');
            resultado = false;
        } else {
            document.getElementById('txtPassword').classList.remove('datosErroneos');
            document.getElementById('txtPassword2').classList.remove('datosErroneos');
        }
        if (document.getElementById("txtNombre").value == "") {
            document.getElementById('txtNombre').classList.add('datosErroneos');
            resultado = false;
        } else {
            document.getElementById('txtNombre').classList.remove('datosErroneos');
        }
        if (document.getElementById("txtApellidoPaterno").value == "") {
            document.getElementById("txtApellidoPaterno").classList.add('datosErroneos');
            resultado = false;
        } else {
            document.getElementById('txtApellidoPaterno').classList.remove('datosErroneos');
        }
        if (document.getElementById("txtApellidoMaterno").value == "") {
            document.getElementById("txtApellidoMaterno").classList.add('datosErroneos');
            resultado = false;
        } else {
            document.getElementById('txtApellidoMaterno').classList.remove('datosErroneos');
        }
        if (document.getElementById("txtNumeracion").value == "") {
            document.getElementById("txtNumeracion").classList.add('datosErroneos');
            resultado = false;
        } else {
            document.getElementById('txtNumeracion').classList.remove('datosErroneos');
        }
        if (document.getElementById("txtCalle").value == "") {
            document.getElementById("txtCalle").classList.add('datosErroneos');
            resultado = false;
        } else {
            document.getElementById('txtCalle').classList.remove('datosErroneos');
        }
        if (document.getElementById("txtZipCode").value == "") {
            document.getElementById("txtZipCode").classList.add('datosErroneos');
            resultado = false;
        } else {
            document.getElementById('txtZipcode').classList.remove('datosErroneos');
        }
        if (document.getElementById("txtCorreo").value == "") {
            document.getElementById("txtCorreo").classList.add('datosErroneos');
            resultado = false;
        } else {
            document.getElementById('txtCorreo').classList.remove('datosErroneos');
        }
        if (document.getElementById("txtUserName").value == "") {
            document.getElementById("txtUserName").classList.add('datosErroneos');
            resultado = false;
        } else {
            document.getElementById('txtUserName').classList.remove('datosErroneos');
        }
        if (document.getElementById("selPais").value == "0") {
            document.getElementById("selPais").classList.add('datosErroneos');
            resultado = false;
        } else {
            document.getElementById('selPais').classList.remove('datosErroneos');
        }
        if (!validarRut(document.getElementById("txtRut").value) || document.getElementById("txtRut").value == "") {
            document.getElementById("txtRut").classList.add('datosErroneos');
            resultado = false;
        } else {
            document.getElementById('txtRut').classList.remove('datosErroneos');
        }


        return resultado;

    } catch (error) {
        console.log("Error:", error.stack.toString());
        return false;
    }
}

function validarRut(p_rut) {
    try {
        // paso 0 (obtener DV)
        // p_rut = "19515530-5";

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

        var numeroMultiplicar = 2;

        var suma = 0;

        for (let index = 0; index < largoSinDV; index++) {
            var ultimoNumero = rutTemporal.substr(rutTemporal.length - 1, rutTemporal.length);
            // console.log("ulitmo numero", ultimoNumero);

            rutTemporal = rutTemporal.substr(0, rutTemporal.length - 1); //cada vez que pasa por esta linea sacaremos un substring
            // desde el caracter 0 hasta el largo total del string menos 1, por ende cada vez ira guardando un string mas pequeño

            rutInvertido = rutInvertido + ultimoNumero;
            console.log("rut invertido for", rutInvertido);

            var multiplicacion = ultimoNumero * numeroMultiplicar;
            numeroMultiplicar++;
            if (numeroMultiplicar == 8) {
                numeroMultiplicar = 2;
            }

            suma = multiplicacion + suma;
        }
        console.log("Rut invertido final", rutInvertido);
        console.log("suma", suma);
        var div11 = suma / 11;
        div11 = parseInt(div11);
        var mult11 = div11 * 11;
        var resta = suma - mult11;
        var resultadoFinal = 11 - resta;
        console.log("Resultado final", resultadoFinal);
        if (resultadoFinal == 10) {
            resultadoFinal = "k";
        } else if (resultadoFinal == 11) {
            resultadoFinal = 0;
        } else {
            resultadoFinal = resultadoFinal;
        }
        if (resultadoFinal == dvEnviado) {
            console.log("Rut Valido");
            return true;
        } else {
            console.log("Rut invalido");
            return false;
        }

    } catch (error) {
        console.log("Error:", error.stack.toString());
        return false;

    }

}