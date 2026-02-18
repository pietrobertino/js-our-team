const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

//renderizzo le cards nella pagina
const cardsNode = document.getElementById("card-section");

cardsNode.innerHTML = renderCards(teamMembers);

//creo una nuova card basandomi sugli input del form e la aggiungo all'aray di partenza

const formNode = document.querySelector("form");
const nameInputNode = document.getElementById("name");
const roleInputNode = document.getElementById("role");
const emailInputNode = document.getElementById("email");
const imgInputNode = document.getElementById("img");


formNode.addEventListener("submit", function(event){

  event.preventDefault();

  const name = nameInputNode.value;
  const role = roleInputNode.value;
  const email = emailInputNode.value;
  const img = imgInputNode.value;

  //creo un nuovo oggetto contenente i dati inseriti
  const newMember = {
    name,
    role,
    email,
    img
  }

  teamMembers.push(newMember);

  //poi rieseguo la funzione di render utilizzando la nuova lista
  
  cardsNode.innerHTML = renderCards(teamMembers);

  //resetto i campi del form
  formNode.reset();
})



