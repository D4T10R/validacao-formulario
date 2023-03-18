import { validarCpf } from "./validaCpf.js"
import { ehMaiorDeIdade } from "./validaIdade.js"

const campoDoformulario = document.querySelectorAll("[required]")

campoDoformulario.forEach((campo) =>  campo.addEventListener("blur", () => validaCampo(campo)))

function validaCampo(campo) {

    if (campo.name = 'cpf' && campo.value.length >= 11) {
        validarCpf(campo)
    }

    if(campo.name = 'aniversario') {
        ehMaiorDeIdade(campo)
    }
}

