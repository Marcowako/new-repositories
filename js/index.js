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
let skillsList = document.createElement("ul");
skillsSection.appendChild(skillsList);

for (let skill of skills) {
    let skillItem = document.createElement("li");
    skillItem.innerText = skill;
    skillsList.appendChild(skillItem);
}