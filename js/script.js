const notas = document.querySelectorAll("[data-calc-input]");
const calculadoraResultado = document.querySelector("[data-calc-output]");
const botaoCalculaMedia = document.querySelector("[data-calc-button]");

const temperaturas = document.querySelectorAll("[data-conv-options]");
const temperaturaFornecida = document.querySelector("[data-conv-input]");
const conversaoResultado = document.querySelector("[data-conv-output]");
const botaoConverteTemperatura = document.querySelector("[data-conv-button]");

const campoNumericoEhValido = (campo) => {
    const pattern = /[0-9]/;
    if(!pattern.test(campo)) {
        return false;
    }
    return true;
}

const validaNotas = (campo) => {
    if(campo < 0 || campo > 10) {
        return false;
    }
    return true;
}

const realizaMedia = () => {
    let somatoriaNotas = 0;
    for(let i = 0; i < notas.length; i++) {
        let nota = notas[i].value;
        if(!validaNotas(nota) || !campoNumericoEhValido(nota)) {
            return "Campo vazio ou inválido!";
        }
        somatoriaNotas += Number(nota);
    }
    return (somatoriaNotas / notas.length).toFixed(1);
}

const realizaConversao = () => {
    const temperaturaEscolhida = temperaturas[0].value;
    const temperatura = temperaturaFornecida.value;
    if(!campoNumericoEhValido(temperaturaFornecida.value)) {
        return "Campo vazio ou inválido!";
    }
    switch(temperaturaEscolhida) {
        case "c-f":
            return ((temperatura * 1.8) + 32) + " °F";

        case "f-c":
            return ((temperatura - 32) / 1.8) + " °C";

        default:
            break;
    }
}

botaoCalculaMedia.addEventListener("click", () => {
    calculadoraResultado.value = realizaMedia();
});

botaoConverteTemperatura.addEventListener("click", () => {
    conversaoResultado.value = realizaConversao();
});