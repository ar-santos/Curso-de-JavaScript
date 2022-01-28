// objeto

let pessoa = {
    nome: "jonatas",
    idade: 35,
    feliz: true,
    pets: ["cachorro", "gato"],
    carros: {
        camaro: {
            placa: "123456",
            cor: "verde"
        },
        uno: {
            placa: "934692",
            cor: "branco"
        }
    },
    andar: function(km){
        alert(pessoa.nome+" andou "+km+" km ")
    }
}

pessoa.andar(20)
console.log(pessoa.carros.uno.placa)



// pessoa.nome = "Carlos"
// pessoa.pets[0] = "papagaio"

// console.log(pessoa.nome)