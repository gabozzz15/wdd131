// Footer Year and Last Modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Static values for weather
const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);

// Windchill formula (°C)
function calculateWindChill(t, s) {
  return (
    13.12 +
    0.6215 * t -
    11.37 * Math.pow(s, 0.16) +
    0.3965 * t * Math.pow(s, 0.16)
  ).toFixed(1);
}

// Apply conditions
if (temp <= 10 && wind > 4.8) {
  document.getElementById("windchill").textContent = calculateWindChill(temp, wind) + " °C";
} else {
  document.getElementById("windchill").textContent = "N/A";
}
