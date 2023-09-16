
const pedra = document.querySelector('#pedra')
const papel = document.querySelector('#papel')
const tesoura = document.querySelector('#tesoura')
const resultado = document.querySelector('#resultado')
const placar = document.querySelector('#placar')
let contador = 1;

function cores() {
    pedra.style.background = '#F0F0F0'
    papel.style.background = '#F0F0F0'
    tesoura.style.background = '#F0F0F0'
    pedra.style.color = 'white'
    papel.style.color = 'white'
    tesoura.style.color = 'white'
}

function exibir(num,frase) {
   
    if (num == 1) {
        pedra.style.background = 'green'
        tesoura.style.background = 'red'
        papel.style.color = 'black'
        resultado.innerHTML = frase;    
        placar.innerHTML = `PLACAR: ${contador++}`
        
        return;
    }

    if (num == 2) {
        pedra.style.background = 'red'
        papel.style.background = 'green'
        tesoura.style.color = 'black'
        resultado.innerHTML = frase

        return;
    }

    if (num == 3) {
        resultado.innerHTML = frase
        pedra.style.background = 'black'
        papel.style.color = 'black'
        tesoura.style.color = 'black'
        
        return;
    }
    
    if (num == 4) {
        papel.style.background = 'red'
        tesoura.style.background = 'green'
        pedra.style.color = 'black'
        resultado.innerHTML = frase
        
        return;
    }

    if (num == 5) {
        resultado.innerHTML = frase
        papel.style.background = 'black'
        pedra.style.color = 'black'
        tesoura.style.color = 'black'
        
        return;
    }

    if (num == 6) {
        papel.style.background = 'green'
        pedra.style.background = 'red'
        tesoura.style.color = 'black'
        resultado.innerHTML = frase;    
        placar.innerHTML = `PLACAR: ${contador++}`
        
        return;
    }

    if (num == 7) {
        resultado.innerHTML = frase
        tesoura.style.background = 'black'
        pedra.style.color = 'black'   
        papel.style.color = 'black'

        return;
    }

    if (num == 8) {
        tesoura.style.background = 'green'
        papel.style.background = 'red'
        pedra.style.color = 'black'
        resultado.innerHTML = frase
        placar.innerHTML = `PLACAR: ${contador++}`

        return;
    }

    if (num == 9) {
        tesoura.style.background = 'red'
        pedra.style.background = 'green'
        papel.style.color = 'black'
        resultado.innerHTML = frase;

        return;
    }
    
}

pedra.addEventListener('click', ()=>{
    let numeroSorteado = Math.floor(3* Math.random())+1;
    cores()
    numeroSorteado == 1 ? exibir(1,'TESOURA, VOCÊ VENCEU'):
    numeroSorteado == 2 ? exibir(2,'PAPEL, VOCÊ PERDEU'):
    numeroSorteado == 3 ? exibir(3,'PEDRA, EMPATOU'):''
})

papel.addEventListener('click', ()=>{
    let numeroSorteado = Math.floor(3* Math.random())+1;
    cores()
    numeroSorteado == 1 ? exibir(4,'TESOURA, VOCÊ PERDEU'):
    numeroSorteado == 2 ? exibir(5,'PAPEL, EMPATOU'):
    numeroSorteado == 3 ? exibir(6,'PEDRA, VOCÊ VENCEU'):''
})

tesoura.addEventListener('click', ()=>{
    let numeroSorteado = Math.floor(3* Math.random())+1;
    cores()
    numeroSorteado == 1 ? exibir(7,'TESOURA, EMPATOU'):
    numeroSorteado == 2 ? exibir(8,'PAPEL, VOCÊ VENCEU'):
    numeroSorteado == 3 ? exibir(9,'PEDRA, VOCÊ PERDEU'):''
})