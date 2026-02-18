function renderCards(teamMembers) {
    let markup = "";

    //Per ogni elemento dell'array
    for (const member of teamMembers) {
        // Ottengo i valori che contiene
        const { name, role, email, img } = member;
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

    return markup;
}

