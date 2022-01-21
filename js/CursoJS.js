var p = document.createElement("p")
p.innerHTML = "Olá pessoal!"

var img = document.createElement("img")
img.src = "js.jpg"

document.getElementById("conteudo").appendChild(p)
document.getElementById("conteudo").appendChild(img)

// document.getElementById("conteudo").removeChild(img)