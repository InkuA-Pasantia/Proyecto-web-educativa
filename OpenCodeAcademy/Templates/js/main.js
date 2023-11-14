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
    $(document).ready(function () {
        // Array para almacenar mensajes
        var messages = [];
    
        // Función para enviar un mensaje del usuario
        window.sendMessage = function () {
            var userInput = $('#userInput').val();
            if (userInput.trim() !== '') {
                // Agregar mensaje del usuario al array
                messages.push({ user: true, text: userInput });
    
                // Actualizar la interfaz del chat
                updateChat();
    
                // Lógica del chatbot (puedes personalizar esto según tus necesidades)
                var botResponse = '¡Hola! Soy tu chatbot Robotin. Gracias por tu mensaje.';
                messages.push({ user: false, text: botResponse });
    
                // Limpiar el campo de entrada del usuario
                $('#userInput').val('');
    
                // Actualizar la interfaz del chat después de la respuesta del chatbot
                updateChat();
            }
        };
    
        // Función para actualizar la interfaz del chat
        function updateChat() {
            var chatBody = $('#chatBody');
            chatBody.empty();
    
            messages.forEach(function (message) {
                var className = message.user ? 'user-message' : 'bot-message';
                chatBody.append('<div class="' + className + '">' + message.text + '</div>');
            });
    
            // Desplazar hacia abajo para mostrar el último mensaje
            chatBody.scrollTop(chatBody[0].scrollHeight);
        }
    });
    // End - Bot chat
    
})(jQuery);


