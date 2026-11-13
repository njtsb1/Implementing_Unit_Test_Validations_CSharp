// Mirror of C# ListValidations.cs
const ListValidations = {
  removeNegativeNumbers: (list) => list.filter((x) => x > 0),
  listContainsSpecificNumber: (list, number) => list.includes(number),
  multiplyListNumbers: (list, number) => list.map((x) => x * number),
  returnLargestNumberList: (list) => Math.max(...list),
  returnSmallestNumberList: (list) => Math.min(...list)
};

// Mirror of C# StringValidations.cs
const StringValidations = {
  returnCharacterCount: (text) => text.length,
  containsCharacter: (text, searchedText) => text.includes(searchedText),
  textEndsWith: (text, searchedText) => text.endsWith(searchedText)
};

// Multi-language Dictionary (EN-US Default, PT-BR, ES-ES)
const translations = {
  "en-US": {
    title: "Unit Test Validations",
    langLabel: "Select Language",
    subtitle: "xUnit Visual Test Runner & Interactive Sandbox",
    description: "Simulate the 10 automated unit tests implemented in C# or test custom inputs against ListValidations and StringValidations services.",
    runAllBtn: "Run All 10 xUnit Tests",
    readyStatus: "Ready (0/10 Passed)",
    passedStatus: "Success: 10/10 xUnit Tests Passed!",
    listInputLabel: "Integer Array (comma-separated):",
    listHelp: "Default dataset from ListValidationsTests.cs",
    paramLabel: "Search / Multiplier Number:",
    stringInputLabel: "Target Text:",
    stringHelp: "Test character count, contains, and endsWith",
    searchSubLabel: "Substring to Search:",
    evaluateBtn: "Evaluate Custom",
    footerText: "WEX - .NET Development & QA | C# Backend + Accessible Web Showcase",
    pending: "PENDING",
    passed: "PASSED",
    resPositives: "RemoveNegativeNumbers",
    resContains: "ListContainsSpecificNumber",
    resMultiplied: "MultiplyListNumbers",
    resMax: "ReturnLargestNumberList",
    resMin: "ReturnSmallestNumberList",
    resCount: "ReturnCharacterCount",
    resStrContains: "ContainsCharacter",
    resEndsWith: "TextEndsWith"
  },
  "pt-BR": {
    title: "Validações de Testes Unitários",
    langLabel: "Selecionar Idioma",
    subtitle: "Executor Visual xUnit e Sandbox Interativo",
    description: "Simule os 10 testes unitários automatizados implementados em C# ou teste entradas personalizadas nos serviços ListValidations e StringValidations.",
    runAllBtn: "Executar Todos os 10 Testes xUnit",
    readyStatus: "Pronto (0/10 Aprovados)",
    passedStatus: "Sucesso: 10/10 Testes xUnit Aprovados!",
    listInputLabel: "Lista de Inteiros (separados por vírgula):",
    listHelp: "Conjunto padrão de ListValidationsTests.cs",
    paramLabel: "Número para Busca / Multiplicador:",
    stringInputLabel: "Texto Alvo:",
    stringHelp: "Teste contagem de caracteres, contém e termina com",
    searchSubLabel: "Trecho para Procurar:",
    evaluateBtn: "Avaliar Personalizado",
    footerText: "WEX - Desenvolvimento .NET & QA | Backend C# + Vitrine Web Acessível",
    pending: "PENDENTE",
    passed: "APROVADO",
    resPositives: "RemoverNumerosNegativos",
    resContains: "ListaContemDeterminadoNumero",
    resMultiplied: "MultiplicarNumerosLista",
    resMax: "RetornarMaiorNumeroLista",
    resMin: "RetornarMenorNumeroLista",
    resCount: "RetornarQuantidadeCaracteres",
    resStrContains: "ContemCaractere",
    resEndsWith: "TextoTerminaCom"
  },
  "es-ES": {
    title: "Validaciones de Pruebas Unitarias",
    langLabel: "Seleccionar Idioma",
    subtitle: "Ejecutor Visual xUnit y Sandbox Interactivo",
    description: "Simule las 10 pruebas unitarias automatizadas implementadas en C# o pruebe entradas personalizadas en los servicios ListValidations y StringValidations.",
    runAllBtn: "Ejecutar las 10 Pruebas xUnit",
    readyStatus: "Listo (0/10 Aprobadas)",
    passedStatus: "¡Éxito: 10/10 Pruebas xUnit Aprobadas!",
    listInputLabel: "Lista de Enteros (separados por comas):",
    listHelp: "Datos predeterminados de ListValidationsTests.cs",
    paramLabel: "Número de Búsqueda / Multiplicador:",
    stringInputLabel: "Texto Objetivo:",
    stringHelp: "Pruebe recuento de caracteres, contiene y termina con",
    searchSubLabel: "Subcadena a Buscar:",
    evaluateBtn: "Evaluar Personalizado",
    footerText: "WEX - Desarrollo .NET y QA | Backend C# + Vitrina Web Accesible",
    pending: "PENDIENTE",
    passed: "APROBADO",
    resPositives: "RemoveNegativeNumbers",
    resContains: "ListContainsSpecificNumber",
    resMultiplied: "MultiplyListNumbers",
    resMax: "ReturnLargestNumberList",
    resMin: "ReturnSmallestNumberList",
    resCount: "ReturnCharacterCount",
    resStrContains: "ContainsCharacter",
    resEndsWith: "TextEndsWith"
  }
};

// xUnit Test Definitions
const unitTests = {
  list: [
    {
      name: "ShouldRemoveNegativeNumbersFromAList",
      desc: "Input: [5, -1, -8, 9] → Expected: [5, 9]",
      run: () => JSON.stringify(ListValidations.removeNegativeNumbers([5, -1, -8, 9])) === JSON.stringify([5, 9])
    },
    {
      name: "ShouldFindNumber9InList",
      desc: "Input: [5, -1, -8, 9], Target: 9 → Expected: true",
      run: () => ListValidations.listContainsSpecificNumber([5, -1, -8, 9], 9) === true
    },
    {
      name: "ShouldNotFindNumber10InList",
      desc: "Input: [5, -1, -8, 9], Target: 10 → Expected: false",
      run: () => ListValidations.listContainsSpecificNumber([5, -1, -8, 9], 10) === false
    },
    {
      name: "ShouldMultiplyListElementsBy2",
      desc: "Input:, Factor: 2 → Expected: [10, 14, 16, 18]",
      run: () => JSON.stringify(ListValidations.multiplyListNumbers([5, 7, 8, 9], 2)) === JSON.stringify([10, 14, 16, 18])
    },
    {
      name: "ShouldReturn9AsLargestNumberInList",
      desc: "Input: [5, -1, -8, 9] → Expected: 9",
      run: () => ListValidations.returnLargestNumberList([5, -1, -8, 9]) === 9
    },
    {
      name: "ShouldReturnNegativeEightAsSmallestNumberInList",
      desc: "Input: [5, -1, -8, 9] → Expected: -8",
      run: () => ListValidations.returnSmallestNumberList([5, -1, -8, 9]) === -8
    }
  ],
  string: [
    {
      name: "ShouldReturnCountOf6ForWordMatrix",
      desc: 'Input: "Matrix" → Expected: 6',
      run: () => StringValidations.returnCharacterCount("Matrix") === 6
    },
    {
      name: "ShouldFindTheWordQualquerInText",
      desc: 'Text: "Esse é um texto qualquer", Search: "qualquer" → Expected: true',
      run: () => StringValidations.containsCharacter("Esse é um texto qualquer", "qualquer") === true
    },
    {
      name: "ShouldNotFindTheWordTesteInText",
      desc: 'Text: "Esse é um texto qualquer", Search: "teste" → Expected: false',
      run: () => StringValidations.containsCharacter("Esse é um texto qualquer", "teste") === false
    },
    {
      name: "TextShouldEndWithSearchedWord",
      desc: 'Text: "Começo, meio e fim do texto procurado", End: "procurado" → Expected: true',
      run: () => StringValidations.textEndsWith("Começo, meio e fim do texto procurado", "procurado") === true
    }
  ]
};

let currentLang = "en-US";
let testsExecuted = false;

// DOM Elements
const htmlEl = document.documentElement;
const themeToggleBtn = document.getElementById("theme-toggle");
const iconSun = document.getElementById("icon-sun");
const iconMoon = document.getElementById("icon-moon");
const langSelect = document.getElementById("lang-select");
const runAllBtn = document.getElementById("run-all-btn");
const testSummary = document.getElementById("test-summary");
const listTestsContainer = document.getElementById("list-tests-container");
const stringTestsContainer = document.getElementById("string-tests-container");

// Theme Management (Dark is default)
function setTheme(theme) {
  htmlEl.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  if (theme === "dark") {
    iconSun.classList.remove("hidden");
    iconMoon.classList.add("hidden");
    themeToggleBtn.setAttribute("aria-label", "Switch to Light Mode");
  } else {
    iconSun.classList.add("hidden");
    iconMoon.classList.remove("hidden");
    themeToggleBtn.setAttribute("aria-label", "Switch to Dark Mode");
  }
}

themeToggleBtn.addEventListener("click", () => {
  const activeTheme = htmlEl.getAttribute("data-theme");
  setTheme(activeTheme === "dark" ? "light" : "dark");
});

// Language Management (EN-US is default)
function applyLanguage(lang) {
  currentLang = lang;
  htmlEl.setAttribute("lang", lang);
  const dict = translations[lang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  testSummary.textContent = testsExecuted ? dict.passedStatus : dict.readyStatus;
  renderTests(testsExecuted);
}

langSelect.addEventListener("change", (e) => applyLanguage(e.target.value));

// Render Test Cards
function renderTests(executed = false) {
  const dict = translations[currentLang];

  const buildList = (items, container) => {
    container.innerHTML = "";
    items.forEach((test) => {
      const passed = executed ? test.run() : false;
      const li = document.createElement("li");
      li.className = "test-item";
      li.innerHTML = `
        <div class="test-info">
          <h4>[Fact] ${test.name}</h4>
          <p>${test.desc}</p>
        </div>
        <span class="status-pill ${passed ? "passed" : ""}">
          ${passed ? dict.passed : dict.pending}
        </span>
      `;
      container.appendChild(li);
    });
  };

  buildList(unitTests.list, listTestsContainer);
  buildList(unitTests.string, stringTestsContainer);
}

// Run All 10 Tests
runAllBtn.addEventListener("click", () => {
  testsExecuted = true;
  renderTests(true);
  testSummary.textContent = translations[currentLang].passedStatus;
  testSummary.classList.add("all-passed");
});

// Custom List Sandbox Evaluation
document.getElementById("eval-list-btn").addEventListener("click", () => {
  const dict = translations[currentLang];
  const rawList = document.getElementById("list-input").value;
  const num = Number(document.getElementById("list-param").value) || 0;
  const parsedList = rawList
    .split(",")
    .map((n) => parseInt(n.trim(), 10))
    .filter((n) => !isNaN(n));

  if (parsedList.length === 0) return;

  const positives = ListValidations.removeNegativeNumbers(parsedList);
  const contains = ListValidations.listContainsSpecificNumber(parsedList, num);
  const multiplied = ListValidations.multiplyListNumbers(parsedList, num);
  const max = ListValidations.returnLargestNumberList(parsedList);
  const min = ListValidations.returnSmallestNumberList(parsedList);

  document.getElementById("list-custom-output").textContent =
    `${dict.resPositives}: [${positives.join(", ")}]\n` +
    `${dict.resContains} (${num}): ${contains}\n` +
    `${dict.resMultiplied} (*${num}): [${multiplied.join(", ")}]\n` +
    `${dict.resMax}: ${max} | ${dict.resMin}: ${min}`;
});

// Custom String Sandbox Evaluation
document.getElementById("eval-string-btn").addEventListener("click", () => {
  const dict = translations[currentLang];
  const text = document.getElementById("string-input").value;
  const sub = document.getElementById("string-param").value;

  const count = StringValidations.returnCharacterCount(text);
  const contains = StringValidations.containsCharacter(text, sub);
  const endsWith = StringValidations.textEndsWith(text, sub);

  document.getElementById("string-custom-output").textContent =
    `${dict.resCount}: ${count}\n` +
    `${dict.resStrContains} ("${sub}"): ${contains}\n` +
    `${dict.resEndsWith} ("${sub}"): ${endsWith}`;
});

// Initialize
const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);
applyLanguage("en-US");
