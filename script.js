// script.js

// DATA

const currentDate = document.getElementById("current-date");

const today = new Date();

currentDate.textContent = today.toLocaleDateString("pt-BR", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
});


// MENU

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// TABS

const tabButtons = document.querySelectorAll(".tab-btn");

const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {

  button.addEventListener("click", () => {

    tabButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    tabContents.forEach(content => {
      content.classList.remove("active");
    });

    button.classList.add("active");

    const target = button.dataset.tab;

    document.getElementById(target).classList.add("active");

  });

});


// FILTRO FAUNA

const animalFilters = document.querySelectorAll(".animal-filter");

const animalCards = document.querySelectorAll(".animal-card");

animalFilters.forEach(button => {

  button.addEventListener("click", () => {

    animalFilters.forEach(btn => {
      btn.classList.remove("active-animal");
    });

    button.classList.add("active-animal");

    const category = button.dataset.animal;

    animalCards.forEach(card => {

      if(category === "all") {

        card.style.display = "block";
      }

      else if(card.classList.contains(category)) {

        card.style.display = "block";
      }

      else {

        card.style.display = "none";
      }

    });

  });

});


// FILTRO ESTADO

const stateSelect = document.getElementById("state-select");

const stateResult = document.getElementById("state-result");

const stateData = {

  bahia: {
    biomes: [
      "Mata Atlântica",
      "Cerrado",
      "Caatinga",
      "Ecossistemas Costeiros"
    ],

    message:
      "A Bahia abriga enorme diversidade ecológica e precisa de preservação."
  },

  amazonas: {
    biomes: [
      "Floresta Amazônica"
    ],

    message:
      "O Amazonas é essencial para o equilíbrio climático global."
  }

};

stateSelect.addEventListener("change", () => {

  const value = stateSelect.value;

  if(!value) {

    stateResult.innerHTML = `
      <h3>Aguardando seleção...</h3>
    `;

    return;
  }

  const selected = stateData[value];

  stateResult.innerHTML = `
    <h3>Biomas Presentes</h3>

    <ul>
      ${selected.biomes.map(item => `<li>${item}</li>`).join("")}
    </ul>

    <p>
      ${selected.message}
    </p>
  `;

});