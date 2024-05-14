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

// Getting DOM elements
const projectsSection = document.querySelector("#projects");
const projectsList = projectsSection.querySelector("ul");
fetch("https://api.github.com/users/Marcowako/repos")
  .then((res) => {
    if (!res.ok) {
      throw new Error("wrong parking, try again");
    }
    return res.json(); // parse the response as JSON
  })
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      const project = document.createElement("li");
      project. innerText = data[i].name;
      projectsList.appendChild(project);
    }
  })
  .catch((error) => {
    const errorElement = document.createElement("p");
    errorElement.innerText = error.message;
    projectSection.appendChild(errorElement);
  });
