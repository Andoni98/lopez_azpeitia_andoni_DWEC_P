let usersJSONPath = '../assets/data/users.json';
cargarJSONEnLocalStorage();
document.getElementById("login-button").addEventListener("click",validarCredenciales());
function cargarJSONEnLocalStorage() {
    fetch(usersJSONPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`No se pudo cargar el archivo JSON desde ${usersJSONPath}`);
            }
            return response.json(); // Convertir la respuesta a JSON
        })
        .then(data => {
            localStorage.setItem("usuarios", JSON.stringify(data)); // Guardar en Local Storage
            console.log("Usuarios cargados y almacenados en Local Storage:", data);
        })
        .catch(error => {
            console.error("Error al cargar el archivo JSON:", error);
        });
}

// Función que valida el usuario y la contraseña
function validarCredenciales() {
    let datos = JSON.parse(localStorage.getItem("usuarios"));
    let usuarioNuevo = document.getElementById("username");
    let contraseñaNueva = document.getElementById("password");
    if(usuarioNuevo == datos.usuarios[0].username && contraseñaNueva == datos.usuarios[0].password ){
        window.location.href= "juego.html";
    } if(usuarioNuevo == datos.usuarios[1].username && contraseñaNueva == datos.usuarios[1].password ){
        window.location.href= "juego.html";
    }else{
        document.getElementById("error-message").textContent="Usuario o Contraseña Incorrectos";
    }
}




