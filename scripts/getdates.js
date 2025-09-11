//Obtain the current year
const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

//Obtain last modification
const last = document.querySelector("#lastModified")

let lastModif = new Date(document.lastModified);

last.innerHTML = `<span class="highlight">Last Modification: ${lastModif}</span>`;
