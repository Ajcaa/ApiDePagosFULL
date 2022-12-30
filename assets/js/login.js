const formulario = document.querySelector("#formulario-login");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  loginData();
});

async function loginData() {

  const email = formulario.elements.email.value;
  const password = formulario.elements.password.value;

  const data = {
    email: email,
    password: password,
  };
  console.log(data);
  await fetch("http://127.0.0.1:8000/users/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Ocurrió un error al iniciar sesión");
      }
    })
    .then((data) => {
      if (data.message === "Logeado correctamente") {
        // Guardar el token en el localStorage

        localStorage.setItem('id', data.id);
        
        localStorage.setItem('access_token', data.tokens.access);
        localStorage.setItem('refresh_token', data.tokens.refresh);
        
        Swal.fire(
          "¡Inicio de sesión exitoso!",
          "Bienvenido a la aplicación",
          "success"
        ).then((result) => {
          if (result.isConfirmed) {
            window.location.replace("home.html");
          }
        });
      } else if (data.message === "Correo inválido o contraseña incorrecta") {
        // Mostrar un mensaje de error
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "¡El inicio de sesión falló!",
        });
      }
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    });
}
  
  
  
 