
// WELCOME SCREEN
const welcome = document.getElementById("welcome");
const enterBtn = document.getElementById("enterBtn");

// Open the website
function openWebsite() {
  welcome.classList.add("hide");
}

// Button se website open
enterBtn.addEventListener("click", openWebsite);

// 30 seconds baad automatic open
setTimeout(openWebsite, 30000);


// SUBJECT SEARCH
const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");
const empty = document.getElementById("empty");
const clearSearch = document.getElementById("clearSearch");

// Search karne par subjects filter honge
search.addEventListener("input", function () {
  const query = search.value.toLowerCase().trim();
  let count = 0;

  cards.forEach(function (card) {
    const text = (
      card.dataset.name + " " + card.innerText
    ).toLowerCase();

    const found = text.includes(query);

    card.style.display = found ? "" : "none";

    if (found) {
      count++;
    }
  });

  empty.style.display = count === 0 ? "block" : "none";
});

// Search clear button
clearSearch.addEventListener("click", function () {
  search.value = "";
  search.dispatchEvent(new Event("input"));
  search.focus();
});