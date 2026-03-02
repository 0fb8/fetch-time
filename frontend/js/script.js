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

    const date = new Date(data.time);

    const locale = navigator.language;
    display.textContent = date.toLocaleString(locale, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      weekday: "short",
    });
  } catch (erorr) {
    console.error("Fetch error", error);
    display.textContent = "Error: Unable to connect server";
  }
});
