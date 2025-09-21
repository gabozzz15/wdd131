// Example JavaScript code for week 2
const DAYS = 6;
const LIMIT = 30;
let studentReport = [11,42,33,64,29,37,44];

for(let i = 0; i < DAYS; i++) {
    if(studentReport[i] < LIMIT) {
        console.log(`student: ${i} failed with score ${studentReport[i]}`);
    }
}

//DOM

document.title="Hello Gabo";
document.body.style.backgroundColor = "hsl(0, 0%, 15%";

const username = "Gabo";
const welcomeMessage = document.getElementById("welcome-msg");
welcomeMessage.textContent += username === "" ? "Guest" : username;
welcomeMessage.style.color = "white";
welcomeMessage.style.fontSize = "2em";  

console.log(document.title);