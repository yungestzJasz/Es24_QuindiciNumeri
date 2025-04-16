window.addEventListener("load", function () {
    const wrapper = document.getElementById("wrapper");
    if (!wrapper) {
        console.error("Elemento con ID 'wrapper' non trovato.");
        return;
    }
    creaMat(wrapper);
    caricaMat(wrapper);
});

function creaMat(wrapper) {
    wrapper.innerHTML = ""; // Svuota il contenitore per evitare duplicazioni
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const div = document.createElement("div");
            div.addEventListener("click", divClick);
            div.id = `div-${i}-${j}`;
            div.style.width = "50px"; // Imposta dimensione delle celle
            div.style.height = "50px";
            div.style.border = "1px solid black";
            div.style.display = "inline-block";
            div.style.textAlign = "center";
            div.style.verticalAlign = "top";
            div.style.lineHeight = "50px"; // Per centrare il contenuto
            wrapper.appendChild(div);
        }
    }
}

function divClick() {
    const [_, i, j] = this.id.split("-").map(Number);

    // Cella sopra
    if (i - 1 >= 0) {
        const sopra = document.getElementById(`div-${i - 1}-${j}`);
        if (sopra.textContent === "") {
            scambiaDiv(this, sopra);
            return;
        }
    }

    // Cella sotto
    if (i + 1 < 4) {
        const sotto = document.getElementById(`div-${i + 1}-${j}`);
        if (sotto.textContent === "") {
            scambiaDiv(this, sotto);
            return;
        }
    }

    // Cella sinistra
    if (j - 1 >= 0) {
        const sinistra = document.getElementById(`div-${i}-${j - 1}`);
        if (sinistra.textContent === "") {
            scambiaDiv(this, sinistra);
            return;
        }
    }

    // Cella destra
    if (j + 1 < 4) {
        const destra = document.getElementById(`div-${i}-${j + 1}`);
        if (destra.textContent === "") {
            scambiaDiv(this, destra);
            return;
        }
    }
}

function scambiaDiv(pieno, vuoto) {
    vuoto.textContent = pieno.textContent;
    vuoto.style.backgroundColor = "blue";
    pieno.textContent = "";
    pieno.style.backgroundColor = null;
}

function caricaMat(wrapper) {
    for (let cont = 1; cont <= 15; cont++) {
        let divRnd;
        do {
            const i = Math.floor(Math.random() * 4);
            const j = Math.floor(Math.random() * 4);
            divRnd = document.getElementById(`div-${i}-${j}`);
        } while (divRnd.textContent !== "");
        divRnd.style.backgroundColor = "blue";
        divRnd.textContent = cont;
    }
}