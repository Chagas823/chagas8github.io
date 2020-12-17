
 let minhaImage = document.querySelector('img');
minhaImage.onclick = function(){
	let src = minhaImage.getAttribute('src');
	if (src === 'imagens/image.jpeg'){
		minhaImage.setAttribute('src', 'imagens/images.jpeg')
	} else{
		minhaImage.setAttribute('src', 'imagens/image.jpeg')
	}
}

let meuCabecalho = document.querySelector('h1');
let meuBotao = document.querySelector('button');

function defineNomeUsuario() {
	let nomeUsuario = prompt('Por favor, digite seu nome: ');
	if(nomeUsuario !== null){
		if(!nomeUsuario){
			defineNomeUsuario();
		}
		else{
			localStorage.setItem('nome', nomeUsuario);
			meuCabecalho.textContent = 'Bem vindo, ' + nomeUsuario;
		}
	}

}

let nomeUsuario = localStorage.getItem('nome');
if(!nomeUsuario){
	defineNomeUsuario();
}else{
	meuCabecalho.textContent = 'Bem Vindo, ' + nomeUsuario;
}

meuBotao.onclick = function(){defineNomeUsuario();}