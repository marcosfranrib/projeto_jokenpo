
const pedra = document.querySelector('#pedra')
const papel = document.querySelector('#papel')
const tesoura = document.querySelector('#tesoura')
const resultado = document.querySelector('#resultado')
const placar = document.querySelector('#placar')
let contador = 1;


pedra.addEventListener('click', ()=>{
    let numeroSorteado = Math.floor(3* Math.random())+1;
    console.log('NUMERO: ',numeroSorteado);

    if (numeroSorteado == 1) {
        resultado.innerHTML = 'TESOURA, VOCÊ VENCEU';    
        placar.innerHTML = `PLACAR: ${contador++}`

    }else if (numeroSorteado == 2) {
        resultado.innerHTML = 'PAPEL, VOCÊ PERDEU'
    
    }else if (numeroSorteado == 3) {
        resultado.innerHTML = 'PEDRA, EMPATOU'
    
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