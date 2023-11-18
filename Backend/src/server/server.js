function enviarFormulario() {
    let nombre = document.getElementById('validationCustom01').value;
    let apellido = document.getElementById('validationCustom02').value;
    let usuario = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;

    //let mensaje = document.getElementById('mensaje').value;

    // console.log(nombre);
    // console.log(apellido);
    // console.log(usuario);
    // console.log(email);
    // console.log(pass);


    if (nombre == "" || apellido == "" || usuario == "" || email == "" || pass == "") {
        alert('Por favor, complete todos los campos.');
    }


    // Crear un objeto con los datos del formulario
    const datosFormulario = {
        nombre: nombre,
        apellido: apellido,
        usuario: usuario,
        email: email,
        pass: pass
    }


    // Enviar los datos al servidor usando fetch
    fetch('http://localhost:8080/guardar-datos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosFormulario)
    })
        .then(response => response.json())
        .then(data => {
            alert('Datos enviados con éxito.');
            document.getElementById('miFormulario').reset();
        })
        .catch(error => {
            console.error('Error al enviar los datos:', error
            );
            alert('Hubo un error al enviar los datos. Por favor, inténtalo de nuevo.');
        });
}

//console.log(datosFormulario) ;


