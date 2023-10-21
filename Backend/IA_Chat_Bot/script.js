const chatInput = document.querySelector("#chat-input");
const sendButton = document.querySelector("#send-btn");
const chatContainer = document.querySelector(".chat-container");

let userText = null;
const API_KEY = "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"; //Insert Key like : "KEY_HERE"; 

const createElement = (html, className) => {
    //Create new div and apply chat, specified class and set html content of div
    const chatDiv = document.createElement("div");
    chatDiv.classList.add("chat", className);
    chatDiv.innerHTML = html;
    return chatDiv; // Return the creates chat div
};

const getChatResponse = async (incomingChatDiv) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const pElement = document.createElement("p");

    // Define the properties and data for the API request
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: userText,
            max_tokens: 2048,
            temperature: 0.2,
            n: 1,
            stop: null
        })
    };

    // Send POST requst to API, get response and set the response as paragraph element text
    try {
        const response = await (await fetch(API_URL, requestOptions)).json();
        //console.log(response);
        pElement.textContent = response.choices[0].text.trim();
    } catch (error) {
        console.log(error);
    }

    incomingChatDiv.querySelector(".typing-animation").remove();
    incomingChatDiv.querySelector(".chat-details").appendChild(pElement);
};

const copyResponse = (copyBtn) => {
    // Copy the text content of tje response to the clipboard
    const responseTextElement = copyBtn.parentElement.querySelector("p");
    navigator.clipboard.writeText(responseTextElement.textContent);
    copyBtn.textContent = "done";
    setTimeout(() => copyBtn.textContent = "content_copy", 1000)
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
                    <span onclick="copyResponse(this)" class="material-symbols-rounded">content_copy</span> 
                </div>`;

    // Create an incoming chat div with user`s messageand append it to the chat container
    const incomingChatDiv = createElement(html, "incoming");
    chatContainer.appendChild(incomingChatDiv);
    getChatResponse(incomingChatDiv);
};

const handleOutgoingChat = () => {
    userText = chatInput.value.trim();  // Get chatInput value and remove extra spaces
    if(!userText) return; // IF chatnput is empty return from here


    const html = `<div class="chat-content">
                    <div class="chat-details">
                        <img src="img/Persona_incono.png" alt="user-img">
                        <p></p>
                    </div>
                </div>`;

    // Create an outgoing chat div with user`s messageand append it to the chat container
    const outgoingChatDiv = createElement(html, "outgoing");
    outgoingChatDiv.querySelector("p").textContent = userText;
    chatContainer.appendChild(outgoingChatDiv);
    setTimeout(showTypingAnimation, 500);
};


sendButton.addEventListener("click", handleOutgoingChat);






