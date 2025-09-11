const senhas = [
    {
        "submundo": "leo - elo - rico",
        "mamadi": "sabrina - fernanda - luiz - thiago - lidy - jeiel",
        "juca": "thata - juliano",
        "bolhadesabao": "carol - camila - vini - gide",
        "nossacasa": "rapha - mari sbara - mari celani",
        "onedirection": "patrick - malu",
        "itgirl": "jess - tati",
        "jucou": "igor - lud",
        "sinuca2.0": "ernesto - gustavo - theo - clara",
        "ifolou": "gabes - chris evans - chabba",
        "ratinho": "gabe - carol",
        "debu": "gabi moraes - thais",
        "regaliz": "isa hopka - gabi rosano",
        "belosartistos": "camilla - barbarah - joão",
        "tete": "letícia - stephanie - paiva"
    }
]

const botao = document.getElementById('btnAcessar');

if (botao) {
    botao.addEventListener('click', function verificarChave() {

        const input = document.getElementById("chave").value.trim().toLowerCase().replace(/\s+/g,'');
        const modal = document.getElementById("modalIndex");
        const errada = document.getElementById('errada');
        const certa = document.getElementById('certa');
        const texto = document.getElementById('cText');

        var closeModal = () => {
            modal.classList.remove("show");
            clearTimeout(time);
        }

        window.onclick = (event) => {
            if (event.target == modal) {
                closeModal()
            }
        }
        if (input in senhas[0]) {
            texto.innerHTML = senhas[0][input]
            modal.classList.add("show");
            certa.style.display = "block"
            errada.style.display = "none"
        } else {
            modal.classList.add("show");
            certa.style.display = "none"
            errada.style.display = "block"
        }
    })
} else {
    const nao = document.getElementById('rnao');
    const sim = document.getElementById('rsim');
    const certeza = document.getElementById('rcerteza');
    const lnao = document.getElementById('lnao');
    const msim = document.getElementById('msim');
    const mcerteza = document.getElementById('mcerteza');

    nao.addEventListener("change", () => {
        if (nao.checked) {

            const maxX = 140;
            const minX = -42;
            const maxY = 70;
            const minY = -300;

            const x = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
            const y = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

            lnao.style.left = x + "px";
            lnao.style.top = y + "px";

            nao.checked = false
        }
    });


    const modal = document.getElementById("minhaModal");

    var closeModal = () => {
        modal.classList.remove("show");
        clearTimeout(time);
    }

    sim.onclick = () => {
        msim.style.display = "block"
        mcerteza.style.display = "none"
        modal.classList.add("show");
        time = setTimeout(closeModal, 1200);
    }

    certeza.onclick = () => {
        modal.classList.add("show");
        msim.style.display = "none";
        mcerteza.style.display = "block";
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            closeModal()
        }
    }
}
