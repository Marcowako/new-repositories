const currentDate = new Date();
const thisYear = currentDate.getFullYear();

const footer = document.createElement("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `<small>Marcos Msiska &copy; ${thisYear}</small>`;
console.log
footer.appendChild(copyright);
document.body.appendChild(footer);
console.log(footer);

let skills = ["data Entry", "JavaScript", "CSS", "HTML"];
let skillsSection = document.getElementById("skills");
let skillsList = skillsSection.getElementsByTagName("ul");
console.log(skillsList);
for (let skill of skills) {
    let skillItem = document.createElement("li");
    skillItem.innerText = skill;
    skillsList[0].appendChild(skillItem);
}

// Use DOM selectors to get the form element
const messageForm = document.querySelector("[name='leave_message']");

// Add event listener to form
// So we can get the user's input values
// And create new messages using them
messageForm.addEventListener("submit", (event) => {
  // Prevent the page from reloading
  event.preventDefault();

  // Access values from inputs
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  // Select the HTML element that will contain new messages (<ul></ul>)
  const messageSection = document.querySelector("#messages");
  const messageList = messageSection.querySelector("ul");

  // Begin creating the new message element (<li></li>)
  const newMessage = document.createElement("li");
  // Adding the content from users inputs into the new message element
  newMessage.innerHTML = `
  <a href=mailto:${usersEmail} >${usersName}</a>
  <span>${usersMessage}</span>
  `;

  // Creating a button to remove the new message
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";

  // Creating an event listener for when user clicks remove button
  removeButton.addEventListener("click", function(event) {
    // Access parent element of button (newMessage)
    const entry = event.target.parentNode;
    // Remove the message from the DOM
    entry.remove();
  });

  // Add removeButton to the newMessage
  newMessage.appendChild(removeButton);

  // Add new message to the DOM
  messageList.appendChild(newMessage);

  // Reset the form inputs
  messageForm.reset();
});