const button = document.getElementById("fetch-btn");
const display = document.getElementById("time-display");

const API_URL = "http://localhost:3000/api/time";

button.addEventListener("click", async () => {
  try {
    display.textContent = "Fetching...";

    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();

    console.log(data);
    display.textContent = data.time;
  } catch (erorr) {
    console.error("Fetch error", error);
    display.textContent = "Error: Unable to connect server";
  }
});
