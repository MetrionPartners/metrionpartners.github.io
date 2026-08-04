// Metrion Partners
// Funciones principales del sitio


document.addEventListener("DOMContentLoaded", () => {


    // Confirmación de carga del sitio
    console.log("Metrion Partners cargado correctamente");


    // Scroll suave para enlaces internos
    const links = document.querySelectorAll('a[href^="#"]');


    links.forEach(link => {

        link.addEventListener("click", function(e) {

            const target = document.querySelector(
                this.getAttribute("href")
            );


            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });



    // Formulario de newsletter
    const form = document.getElementById("subscribeForm");


    if (form) {

        form.addEventListener("submit", function(e) {

            e.preventDefault();


            const email = document.getElementById("email").value;


            if(email){

                alert(
                    "Gracias por suscribirte a Metrion Partners"
                );


                form.reset();

            }

        });

    }


});
