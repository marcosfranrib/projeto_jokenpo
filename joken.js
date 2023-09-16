
const pedra = document.querySelector('#pedra')
const papel = document.querySelector('#papel')
const tesoura = document.querySelector('#tesoura')
const resultado = document.querySelector('#resultado')
const placar = document.querySelector('#placar')
let contador = 1;

pedra.addEventListener('click', ()=>{
    let numeroSorteado = Math.floor(3* Math.random())+1;
    
    pedra.style.background = '#F0F0F0'
    papel.style.background = '#F0F0F0'
    tesoura.style.background = '#F0F0F0'
    pedra.style.color = 'white'
    papel.style.color = 'white'
    tesoura.style.color = 'white'

    if (numeroSorteado == 1) {
        pedra.style.background = 'green'
        tesoura.style.background = 'red'
        papel.style.color = 'black'

        resultado.innerHTML = 'TESOURA, VOCÊ VENCEU';    
        placar.innerHTML = `PLACAR: ${contador++}`

    }else if (numeroSorteado == 2) {
        resultado.innerHTML = 'PAPEL, VOCÊ PERDEU'
        pedra.style.background = 'red'
        papel.style.background = 'green'
        tesoura.style.color = 'black'

    }else if (numeroSorteado == 3) {
        resultado.innerHTML = 'PEDRA, EMPATOU'
        pedra.style.background = 'black'
        papel.style.color = 'black'
        tesoura.style.color = 'black'
    }

})

papel.addEventListener('click', ()=>{
    let numeroSorteado = Math.floor(3* Math.random())+1;
    console.log('NUMERO: ',numeroSorteado);

    if (numeroSorteado == 1) {
        resultado.innerHTML = 'TESOURA, VOCÊ PERDEU';        

    }else if (numeroSorteado == 2) {
        resultado.innerHTML = 'PAPEL, EMPATOU'
    
    }else if (numeroSorteado == 3) {
        resultado.innerHTML = 'PEDRA, VOCÊ VENCEU'
        placar.innerHTML = `PLACAR: ${contador++}`
    }

})

tesoura.addEventListener('click', ()=>{
    let numeroSorteado = Math.floor(3* Math.random())+1;
    console.log('NUMERO: ',numeroSorteado);

    if (numeroSorteado == 1) {
        resultado.innerHTML = ' TESOURA, EMPATOU';        

    }else if (numeroSorteado == 2) {
        resultado.innerHTML = 'PAPEL, VOCÊ VENCEU'
        placar.innerHTML = `PLACAR: ${contador++}`
    
    }else if (numeroSorteado == 3) {
        resultado.innerHTML = 'PEDRA, VOCÊ PERDEU'

    }

})