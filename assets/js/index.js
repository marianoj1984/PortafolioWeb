// add class navbarDark on navbar scroll

const header = document.querySelector(".navbar");

window.onscroll = function () {

    var top = window.scrollY;

    if (top >= 100) {

        header.classList.add("navbarDark");

    } else {

        header.classList.remove("navbarDark");

    }

};

// Selecciona el botón
const enviarBtn = document.getElementById("enviar-btn");
const formulario = document.getElementById("form-contacto");

// Agrega un evento de clic al botón

enviarBtn.addEventListener("click", function() {

  alert("Mensaje enviado!");

// Limpio el formulario

  formulario.reset();
  
});


                        