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

const cardsNode = document.getElementById("card-section");

let markup = "";

//Per ogni elemento dell'array
for(const member of teamMembers){
  // Ottengo i valori che contiene
  const {name, role, email, img} = member;
  markup += `<div class="col">
            <div class="card rounded-0">
                <div class="row g-0">
                    <div class="col-sm-4">
                        <img src="./assets/${img}" alt="" class="card-img w-100 rounded-0">
                    </div>
                    <div class="col-sm-8 bg-black">
                        <div class="card-body">
                            <div class="card-title text-light fw-bold fs-3">${name}</div>
                            <div class="card-subtitle text-light">${role}</div>
                            <a href="#" class="card-link">${email}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
}

cardsNode.innerHTML = markup;

//inserisco i valori all'interno di html