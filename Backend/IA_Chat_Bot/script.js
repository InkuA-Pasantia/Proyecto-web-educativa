const chatInput = document.querySelector("#chat-input");
const sendButton = document.querySelector("#send-btn");
const chatContainer = document.querySelector(".chat-container");

let userText = null;

const createElement = (html, className) => {
    //Create new div and apply chat, specified class and set html content of div
    const chatDiv = document.createElement("div");
    chatDiv.classList.add("chat", className);
    chatDiv.innerHTML = html;
    return chatDiv; // Return the creates chat div
}

const showTypingAnimation = () => {
    const html = ` <div class="chat-content">
                    <div class="chat-details">
                        <img src="img/chatgpt_logo.jpeg" alt="chat-img">
                        <div class="typing-animation">
                            <div class="typing-dot" style="--delay: 0.2s"></div>
                            <div class="typing-dot" style="--delay: 0.3s"></div>
                            <div class="typing-dot" style="--delay: 0.4s"></div>
                        </div>
                    </div>
                    <span class="material-symbols-rounded">content_copy</span> 
                </div>`;

    // Create an outgoing chat div with user`s messageand append it to the chat container
    const outgoingChatDiv = createElement(html, "incoming");
    chatContainer.appendChild(outgoingChatDiv);
}

const handleOutgoingChat = () => {
    userText = chatInput.value.trim();  // Get chatInput value and remove extra spaces
    const html = `<div class="chat-content">
                    <div class="chat-details">
                        <img src="img/Persona_incono.png" alt="user-img">
                        <p>${userText}</p>
                    </div>
                </div>`;

    // Create an outgoing chat div with user`s messageand append it to the chat container
    const outgoingChatDiv = createElement(html, "incoming");
    chatContainer.appendChild(outgoingChatDiv);
    setTimeout(showTypingAnimation, 500);
}


sendButton.addEventListener("click", handleOutgoingChat);






