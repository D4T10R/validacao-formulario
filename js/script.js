import { validarCpf } from "./validaCpf.js"
import { ehMaiorDeIdade } from "./validaIdade.js"

const campoDoformulario = document.querySelectorAll("[required]")

campoDoformulario.forEach((campo) => { 
    campo.addEventListener("blur", () => validaCampo(campo))
    campo.addEventListener("invalid", evento => evento.preventDefault())
})

const tiposErros = [
    'valueMissing',
    'patternMismatch',
    'tooShort',
    'typeMismatch',
    'customError'
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

function validaCampo(campo) {

    let mensagem = ''
    campo.setCustomValidity('')

    if (campo.name == 'cpf' && campo.value.length >= 11) {
        validarCpf(campo)
    }

    if(campo.name == 'aniversario') {
        ehMaiorDeIdade(campo)
    }

    tiposErros.forEach(error => {
        if (campo.validity[error]) {
            mensagem = mensagens[campo.name][error]
        }
    })

    const campoErro = campo.parentNode.querySelector('.mensagem-erro')
    const validaInput = campo.checkValidity()

    if(!validaInput) {
        campoErro.textContent = mensagem
    } else {
        campoErro.textContent = ""
    }

}

