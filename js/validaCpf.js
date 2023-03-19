export function validarCpf(campo) {
    const cpf = campo.value.replace(/\.|-/g, "")
    console.log(cpf)
    if (validaNumeroRepetidos(cpf) || validaUltimoDigito(cpf) || validaPenultimoDigito(cpf)) {
        campo.setCustomValidity('Cpf não existe')
    }
}


function validaNumeroRepetidos(cpf) {
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    return numerosRepetidos.includes(cpf)


}

function validaUltimoDigito(cpf) {

    let soma = 0
    let multiplicador = 10

    for(let tamanho = 0; tamanho < 9; tamanho++) {
        soma += cpf[tamanho] * multiplicador
        multiplicador--;
    }

    soma = (soma * 10) % 11

    if(soma == 10 || soma == 1) {
        soma = 0
    }

    return soma != cpf[9]

}

function validaPenultimoDigito(cpf) {
    
    let soma = 0
    let multiplicador = 11

    for(let tamanho = 0; tamanho < 10; tamanho++) {
        soma += cpf[tamanho] * multiplicador
        multiplicador--;
    }

    soma = (soma * 10) % 11

    if(soma == 10 || soma == 1) {
        soma = 0
    }

    return soma != cpf[10]

}