function guardarDatos() {
    var datosP = {
        nombre: document.getElementById("txtNombre").value,
        apellidoPaterno: document.getElementById("txtApellidoPaterno").value,
        apellidoMaterno: document.getElementById("txtApellidoMaterno").value,
        sexo: document.getElementById("rdFemenino").checked ? "F" : "M",
        infoDomicilio: {
            pais: document.getElementById("selPais").value,
            calle: document.getElementById("txtCalle").value,
            numero: document.getElementById("txtNumeracion").value,
            zipcode: document.getElementById("txtZipCode").value =="" ? "00000" : document.getElementById("txtZipCode").value
        },
        infoUsuario: {
            correo: document.getElementById("txtCorreo").value,
            nombreUsuario: document.getElementById("txtUserName").value,
            password: document.getElementById("txtPassword").value,
        }
    };
    console.log("datos", datosP);
}