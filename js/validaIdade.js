export function ehMaiorDeIdade(campo) {
    const idade = new Date(campo.value)
    console.log(validarIdade(idade))
}

function validarIdade(idade) {

    const dataAtual = new Date()
    const MaiorIdade = new Date(idade.getUTCFullYear() + 18, idade.getUTCMonth(), idade.getUTCDate())

    return dataAtual >= MaiorIdade


}


