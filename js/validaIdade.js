export function ehMaiorDeIdade(campo) {
    const idade = new Date(campo.value)
    if(!validarIdade(idade)) {
        campo.setCustomValidity('O usuário deve ser maior de idade para utilizar')
    }
}

function validarIdade(idade) {

    const dataAtual = new Date()
    const MaiorIdade = new Date(idade.getUTCFullYear() + 18, idade.getUTCMonth(), idade.getUTCDate())

    return dataAtual >= MaiorIdade


}


