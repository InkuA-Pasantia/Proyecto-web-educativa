(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Post carousel
    $(".post-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        center: true,
        autoplay: true,
        smartSpeed: 2000,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    document.addEventListener("DOMContentLoaded", function() {
        const chatIcon = document.querySelector(".chat-icon");
        const chatBox = document.querySelector(".chat-box");
        const closeBtn = document.querySelector(".close-btn");
        const userInput = document.getElementById("user-input");
        const sendBtn = document.getElementById("send-btn");
        const chatBody = document.querySelector(".chat-body");
    
        chatIcon.addEventListener("click", function() {
            chatBox.style.display = "block";
        });
    
        closeBtn.addEventListener("click", function() {
            chatBox.style.display = "none";
        });
    
        sendBtn.addEventListener("click", function() {
            const userMessage = userInput.value;
            if (userMessage.trim() === "") return;
            const userDiv = document.createElement("div");
            userDiv.className = "user-message";
            userDiv.textContent = userMessage;
            chatBody.appendChild(userDiv);
            userInput.value = "";
            // Aquí puedes agregar la lógica del chat bot y mostrar su respuesta en el chatBody
        });
    });
    document.addEventListener("DOMContentLoaded", function() {
        var miAudio = document.getElementById("miAudio");
    
        // Reproducir automáticamente cuando se carga la página
        miAudio.autoplay = true;
    
        // Pausar la música cuando se haga clic fuera del reproductor
        document.addEventListener("click", function(event) {
            if (event.target !== miAudio) {
                miAudio.pause();
            }
        });
    });

    // Star - Bot chat
    document.addEventListener("DOMContentLoaded", function() {
        var sendButton = document.getElementById("send-btn");
        var userInput = document.getElementById("user-input");
        var chatBody = document.querySelector(".chat-body");
    
        sendButton.addEventListener("click", function() {
            sendMessage();
        });
    
        userInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                sendMessage();
            }
        });
    
        function sendMessage() {
            var userMessage = userInput.value;
            if (userMessage.trim() === "") {
                return; // No enviar mensajes vacíos
            }
    
            // Agregar el mensaje del usuario al chat body
            chatBody.innerHTML += '<div class="user-message">' + userMessage + '</div>';
    
            // Lógica del bot: procesar el mensaje y obtener la respuesta
    
            // Agregar la respuesta del bot al chat body
            chatBody.innerHTML += '<div class="bot-message">' + 'Respuesta del bot...' + '</div>';
    
            // Limpiar el input de usuario después de enviar el mensaje
            userInput.value = "";
        }
    });
    // End - Bot chat
    
})(jQuery);


