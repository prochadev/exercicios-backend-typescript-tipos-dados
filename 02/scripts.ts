const pessoas = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
]

const filtrarPessoas = (
    pessoas: {
        nome: string, 
        idade: number, 
        status: boolean
    }[], 
    pessoa: string
): {
    nome: string, 
    idade: number, 
    status: boolean
}[] => {
    const resultado = pessoas.filter((pessoaLista) => {
        return pessoaLista.nome.toLowerCase().includes(pessoa.toLowerCase())
    })

    return resultado
}

console.log(filtrarPessoas(pessoas, 'gui'));