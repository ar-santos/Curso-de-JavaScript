var lista = document.getElementsByTagName("ul")[0]
var itens = lista.children

var novoItem = document.createElement("li")
novoItem.textContent = "Suco de laranja"

lista.insertBefore(novoItem, itens[2])

console.log(itens)