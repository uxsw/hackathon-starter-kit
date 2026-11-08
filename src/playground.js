import { records, answerLocally } from "./data.js";

const placeList = document.querySelector("#place-list");
const placeCount = document.querySelector("#place-count");
const settingFilter = document.querySelector("#setting-filter");
const costFilter = document.querySelector("#cost-filter");
const helperAnswer = document.querySelector("#helper-answer");

function renderPlaces() {
  const visible = records.filter((place) => {
    const settingMatches = settingFilter.value === "all" || place.type === settingFilter.value;
    const costMatches = costFilter.value === "all" || place.cost === costFilter.value;
    return settingMatches && costMatches;
  });
  placeCount.textContent = `${visible.length} ${visible.length === 1 ? "place" : "places"} shown`;
  placeList.innerHTML = visible.length
    ? visible.map((place) => `<li class="place-item"><h3>${place.place}</h3><p>${place.note}</p><p><strong>Access:</strong> ${place.access}</p><span class="place-tags"><span class="chip">${place.type}</span><span class="chip">${place.cost}</span></span></li>`).join("")
    : "<li class=\"place-empty\">No places match those filters. Choose another option above.</li>";
}

settingFilter.addEventListener("change", renderPlaces);
costFilter.addEventListener("change", renderPlaces);
document.querySelector("#helper-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const question = new FormData(event.currentTarget).get("question").toString().trim();
  helperAnswer.textContent = question ? answerLocally(question, records) : "Type a question to try the helper.";
});

renderPlaces();
