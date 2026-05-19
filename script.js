// DATA ATUAL

const currentDate = document.getElementById("current-date");

const today = new Date();

const formattedDate = today.toLocaleDateString("pt-BR", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
});

currentDate.textContent = formattedDate;


// MENU RESPONSIVO

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// TABS EVOLUÇÃO DAS PLANTAS

const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {

  button.addEventListener("click", () => {

    tabButtons.forEach(btn => btn.classList.remove("active"));
    tabContents.forEach(content => content.classList.remove("active"));

    button.classList.add("active");

    const target = button.dataset.tab;

    document.getElementById(target).classList.add("active");
  });
});


// REPRODUÇÃO

const toggleButtons = document.querySelectorAll(".toggle-btn");
const reproductionContent = document.getElementById("reproduction-content");

toggleButtons.forEach(button => {

  button.addEventListener("click", () => {

    toggleButtons.forEach(btn => btn.classList.remove("active-toggle"));
    button.classList.add("active-toggle");

    const type = button.dataset.repro;

    if(type === "assexuada") {

      reproductionContent.innerHTML = `
        <h4>Reprodução Assexuada</h4>

        <p>
          Ocorre sem fecundação e gera indivíduos geneticamente semelhantes.
          Pode ocorrer por brotamento, fragmentação ou propagação vegetativa.
        </p>
      `;

    } else {

      reproductionContent.innerHTML = `
        <h4>Reprodução Sexuada</h4>

        <p>
          Envolve fecundação e variabilidade genética. Nas plantas,
          depende da formação de gametas e dispersão do pólen.
        </p>
      `;

    }

  });

});


// ESTRATOS DA FLORESTA

const layerButtons = document.querySelectorAll(".layer-btn");
const layerResult = document.getElementById("layer-result");

const layerData = {

  herbaceo: {
    title: "Estrato Herbáceo",
    text: "Camada formada por plantas rasteiras e espécies adaptadas à baixa luminosidade.",
    species: [
      "Samambaias",
      "Musgos",
      "Gramíneas",
      "Begônias"
    ],
    profile: "Predominância de briófitas, herbáceas e pequenas angiospermas."
  },

  arbustivo: {
    title: "Estrato Arbustivo",
    text: "Faixa intermediária composta por arbustos e vegetação de médio porte.",
    species: [
      "Jabuticabeira",
      "Palmeiras jovens",
      "Arbustos nativos"
    ],
    profile: "Presença de angiospermas e espécies adaptadas à umidade."
  },

  dossel: {
    title: "Dossel",
    text: "Camada superior da floresta, responsável pela maior captação de luz solar.",
    species: [
      "Jequitibá",
      "Ipê",
      "Cedro",
      "Lianas"
    ],
    profile: "Árvores altas, epífitas e lianas dominam este estrato."
  }

};

layerButtons.forEach(button => {

  button.addEventListener("click", () => {

    const layer = button.dataset.layer;
    const data = layerData[layer];

    layerResult.innerHTML = `
      <h3>${data.title}</h3>

      <p>${data.text}</p>

      <h4>Espécies Nativas</h4>

      <ul>
        ${data.species.map(item => `<li>${item}</li>`).join("")}
      </ul>

      <h4>Perfil da Flora</h4>

      <p>${data.profile}</p>
    `;

  });

});


// FILTRO FAUNA

const animalFilters = document.querySelectorAll(".animal-filter");
const animalCards = document.querySelectorAll(".animal-card");

animalFilters.forEach(button => {

  button.addEventListener("click", () => {

    animalFilters.forEach(btn => btn.classList.remove("active-animal"));

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


// FILTRO POR ESTADO

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
    message: "A Bahia abriga enorme diversidade ecológica. Preservar seus biomas significa proteger recursos hídricos, espécies endêmicas e populações tradicionais."
  },

  amazonas: {
    biomes: [
      "Floresta Amazônica",
      "Áreas Alagadas",
      "Campinaranas"
    ],
    message: "O Amazonas desempenha papel essencial na regulação climática global e no armazenamento de carbono."
  },

  "mato-grosso": {
    biomes: [
      "Pantanal",
      "Cerrado",
      "Amazônia"
    ],
    message: "O estado reúne ecossistemas fundamentais para a biodiversidade brasileira e sofre forte pressão do desmatamento."
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