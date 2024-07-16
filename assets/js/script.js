
// script para que la barra de navegacion cambie de color al desplazarse.
$(document).ready(function () {
    var navbar = $('.navbar');
    var scrollThreshold = 400; //se Ajustar el punto de desplazamiento para la transición.

    $(window).scroll(function () {
        if ($(window).scrollTop() > scrollThreshold) {
            navbar.addClass('navbar-scroll');
        } else {
            navbar.removeClass('navbar-scroll');
        }
    });
});

//Hacer click desaparecer y aparecer el contenido en todas las tarjetas "card" de la sección de lugares destacados.
$('h5').click(function () {
    $(this).parent().find('#lugar').toggle();
});


//Botón scroll volver Arriba.
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });

    $('#scroll').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    });
});

// script para habilitación funcion Tooltip.
document.addEventListener("DOMContentLoaded", function (event) {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="mensaje"]');
    const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
});


// script de validacion de formulario.
(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

// script para habilitación de modal.
$(document).ready(function () {
    $('.trigger-text').on('click', function () {
        $('#myModal').modal('show');
    });
});


// JavaScript para marcar la casilla de verificación al hacer clic en el botón Aceptar.
document.getElementById('acceptButton').addEventListener('click', function () {
    document.getElementById('invalidCheck').checked = true;
});


// Alerta mensaje enviado.
$(function () {
    $("#alertBtn").on("click", function () {
        alert("Mensaje Enviado con exito","success");
    });
    const alert = (message, type) => {
        const alertHtml =
        `<div class="alert alert-${type}" role="alert">
            ${message}
        </div>`;

        $("#alertContainer").append(alertHtml);

    }


});