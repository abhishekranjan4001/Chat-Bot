document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    // Sample bot responses
    const botResponses = [
        "I'm just a simple chatbot, but I'll try to help!",
        "That's an interesting question. Let me think...",
        "I'm not sure I understand. Could you rephrase that?",
        "Thanks for chatting with me!",
        "I'm learning new things every day!",
        "Did you know chatbots like me are powered by rules and patterns?"
    ];

    // Function to add a message to the chat
    function addMessage(message, isUser) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
        
        const messageP = document.createElement('p');
        messageP.textContent = message;
        
        messageDiv.appendChild(messageP);
        chatMessages.appendChild(messageDiv);
        
        // Scroll to the bottom of the chat
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Function to get a random bot response
    function getBotResponse() {
        const randomIndex = Math.floor(Math.random() * botResponses.length);
        return botResponses[randomIndex];
    }

    // Function to handle user input
    function handleUserInput() {
        const message = userInput.value.trim();
        if (message) {
            addMessage(message, true);
            userInput.value = '';
            
            // Simulate bot thinking
            setTimeout(() => {
                addMessage(getBotResponse(), false);
            }, 1000);
        }
    }

    // Event listeners
    sendButton.addEventListener('click', handleUserInput);
    
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });
});