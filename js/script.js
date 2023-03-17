import { validarCpf } from "./validaCpf.js"

const campoDoformulario = document.querySelectorAll("[required]")

campoDoformulario.forEach((campo) =>  campo.addEventListener("blur", () => validaCampo(campo)))

function validaCampo(campo) {

    if (campo.name = 'cpf' && campo.value.length >= 11) {
        validarCpf(campo)
    }

    
}

