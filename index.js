const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
];

/*La funzione mi prende i dati (vettore di oggetti) e me li returna nella forma desiderata*/
function searchPosition(titleUser, locationUser) {
  const FinalResult = {};
  const results = [];
  let counter = 0;
  for (const job of jobs) {
    if (
      job.title.toLowerCase().includes(titleUser.toLowerCase()) &&
      job.location.toLowerCase().includes(locationUser.toLowerCase())
    ) {
      results.push(`${job.title}, ${job.location}`);
      counter++;
    }
  }
  FinalResult["result"] = results;
  FinalResult["counter"] = counter;
  return FinalResult;
}

//faccio diventare invisibile il bottone search per evitare la sovrapposizione/duplicazione di elementi
function disapperSearch() {
  const buttonSearch = document.querySelector("input[type='button']");
  buttonSearch.disabled = true;
  buttonSearch.style.cssText = "filter: opacity(0.2)";
}

//stampo i risultati su schermo, counter e lavori disponibili
function showResults() {
  disapperSearch();
  const title = document.querySelector("input[name ='title']").value; //queste conviene lasciarle fuori così le riutilizzo
  const location = document.querySelector("input[name = 'location']").value; //INOLTRE è prorpio un errore perchè ovviamente tutto questo rimane all'interno della funzione
  const worksAndCounter = searchPosition(title, location); //e non posso richiamarlo
  let mainDiv = document.querySelector("div[class='flexbox']");
  /*Stampo elementi vettore*/
  for (const work of worksAndCounter.result) {
    let newElement = document.createElement("div");
    newElement.innerText = work;
    mainDiv.appendChild(newElement);
  }
  /*Stampo counter*/
  const number = document.createElement("p");
  number.classList.add("number");
  number.innerText = worksAndCounter.counter;
  /*se il valore è 0 faccina triste*/
  if (number.innerText == "0") {
    number.innerText = ":(";
  }
  document.body.prepend(number);
}

/*resetto le textbox e l'oggetto contente i lavori e il counter*/
function erase() {
  title = "";
  location = ""; //mi resetta la pagina perchè windows.location ="stringa vuota" cerca e resetta la pagina FIGOHH
  FinalResult = {};
}
