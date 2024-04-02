// let email = document.getElementById("email").value;
// email = email.split("@");
// let rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');

// let initials = [...email.matchAll(rgx)] || [];

// initials = (
//   (initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')
// ).toUpperCase();

// console.log(initials);

// function switchVisible() {
//   if (document.getElementById("sample1")) {
//     document.getElementById("sample1").style.display = "none";
//     document.getElementById("sample2").style.display = "block";
//   }
//   const input = document.getElementById("userInput").value;
//   // Clear input field
//   input.value = "";
//   const currentTime = new Date().toLocaleTimeString([], {
//     hour: "2-digit",
//     minute: "2-digit",
//   });
//   const response = generateResponse(input);
//   let typed = new Typed("#content", {
//     strings: ["This is some text within a card body."],
//     typeSpeed: 5,
//     fadeOut: true,
//     loop: false,
//     startDelay: 2000,
//     showCursor: false,
//   });
//   document.getElementById("content").innerHTML = `<p sentTime="${currentTime}">${response}</p>`;

// }

// Generate chatbot response function
// function generateResponse(input) {
//     // Add chatbot logic here
//     const responses = [
//       "Hello, how can I help you today? 😊",
//       "I'm sorry, I didn't understand your question. Could you please rephrase it? 😕",
//       "I'm here to assist you with any questions or concerns you may have. 📩",
//       "I'm sorry, I'm not able to browse the internet or access external information. Is there anything else I can help with? 💻",
//       "What would you like to know? 🤔",
//       "I'm sorry, I'm not programmed to handle offensive or inappropriate language. Please refrain from using such language in our conversation. 🚫",
//       "I'm here to assist you with any questions or problems you may have. How can I help you today? 🚀",
//       "Is there anything specific you'd like to talk about? 💬",
//       "I'm happy to help with any questions or concerns you may have. Just let me know how I can assist you. 😊",
//       "I'm here to assist you with any questions or problems you may have. What can I help you with today? 🤗",
//       "Is there anything specific you'd like to ask or talk about? I'm here to help with any questions or concerns you may have. 💬",
//       "I'm here to assist you with any questions or problems you may have. How can I help you today? 💡",
//     ];

//     // Return a random response
//     return responses[Math.floor(Math.random() * responses.length)];
//   }
