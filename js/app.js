//Declarando variaveis DOM

var imagem = document.getElementById('img')
var on = document.getElementById('on')
var off = document.getElementById('off')

on.addEventListener('click',()=>{
    imagem.src="imagens/acesa.gif" 
})
off.addEventListener('click',()=>{
    imagem.src="imagens/apagada.gif"
})
imagem.addEventListener('dblclick',()=>{
    imagem.src="imagens/quebrada.jpg" 
})
