/* 1 - TESOURA, 2 - PAPEL, 3 - PEDRA */

const containerBotoes = document.querySelector('#container-botoes')
const resultado = document.querySelector('#container-resultado')
const descricao = document.querySelector('#descricao')
const desfecho = document.querySelector('#desfecho')
const replay = document.querySelector('#replay')
const regras = document.querySelector('#regras')
const pedra = document.querySelector('.pedra')
const papel = document.querySelector('.papel')
const tesoura = document.querySelector('.tesoura')
const placar = document.querySelector('#score')
const base1 = document.querySelector('#base1')
const base2 = document.querySelector('#base2')
const estilo = base2.getAttribute('class')
let contador = 1; // RECEBE A ATUALIZAÇÃO DO PLACAR

function limparResultado() { 
    // DESLIGA O BOTÃO DE REPLAY E O RESULTADO (VENCEU,EMPATOU,PERDEU)
    replay.style.display = 'none'
    desfecho.style.display = 'none'
}

function trocaEstilo(fonte,destino){ 
    // PASSA O ESTILO DO BOTÃO ESCOLHIDO PRO ESPAÇO DO RESULTADO
    const estilo2 = fonte.getAttribute('class')
    destino.setAttribute('class',estilo2)
}

function exibirDesfecho(frase) {
    //RELIGA O QUE O LIMPAR DESLIGOU ALI EM CIMA
    desfecho.innerHTML = frase
    replay.style.display = 'block'
    desfecho.style.display = 'block'
}

function editarDisplay() {
    regras.style.display = 'none'
    containerBotoes.style.display = 'none'
    resultado.style.display = 'block'
}

function exibir(num) {
    switch (num) {
        case 1:
            limparResultado()
            setTimeout(()=>{ // DEFINE UM TEMPO PRA MOSTRAR A ESCOLHA DA MAQUINA
                trocaEstilo(tesoura,base2)
                exibirDesfecho('VOCÊ VENCEU')
                placar.innerHTML = contador++ // ATUALIZA O PLACAR
    
            },1700) // 1 SEGUNDO
            break;
        
        case 2:
            limparResultado()
            setTimeout(()=>{
                trocaEstilo(papel,base2)
                exibirDesfecho('VOCÊ PERDEU')
            },2000)
            break;

        case 3:
            limparResultado()
            setTimeout(()=>{
                trocaEstilo(pedra,base2)
                exibirDesfecho('EMPATOU')
            },1700)
            break

        case 4:
            limparResultado()
            setTimeout(()=>{
                trocaEstilo(tesoura,base2)
                exibirDesfecho('VOCÊ PERDEU')
            },1700)
            break;
        
        case 5:
            limparResultado()
            setTimeout(()=>{
                trocaEstilo(papel,base2)
                exibirDesfecho('EMPATOU')
            },2000)
            break;
    
        case 6:
            limparResultado()
            setTimeout(()=>{
                trocaEstilo(pedra,base2)
                placar.innerHTML = contador++
                exibirDesfecho('VOCÊ VENCEU')
            },2000)
            break;

        case 7:
            limparResultado()
            setTimeout(()=>{
                trocaEstilo(tesoura,base2)
                exibirDesfecho('EMPATOU')
            },2000)
            break;

        case 8:
            limparResultado()
            setTimeout(()=>{
                trocaEstilo(papel,base2)
                placar.innerHTML = contador++
                exibirDesfecho('VOCÊ VENCEU')
            },2000)
            break;

        case 9:
            limparResultado()
            setTimeout(()=>{
                trocaEstilo(pedra,base2)
                exibirDesfecho('VOCÊ PERDEU')
            },1700)
            break;
        
        default:
            break;
    }    
}

pedra.addEventListener('click', ()=>{
    let numeroSorteado = Math.floor(3* Math.random())+1;
    editarDisplay()
    setTimeout(() => {
        trocaEstilo(pedra,base1)
    }, 400);
    numeroSorteado == 1 ? exibir(1):
    numeroSorteado == 2 ? exibir(2):
    numeroSorteado == 3 ? exibir(3):''

})

papel.addEventListener('click', ()=>{
    let numeroSorteado = Math.floor(3* Math.random())+1;
    editarDisplay()
    setTimeout(() => {
        trocaEstilo(papel,base1)
    }, 400);
    numeroSorteado == 1 ? exibir(4):
    numeroSorteado == 2 ? exibir(5):
    numeroSorteado == 3 ? exibir(6):''
})

tesoura.addEventListener('click', ()=>{
    let numeroSorteado = Math.floor(3* Math.random())+1;
    editarDisplay()
    setTimeout(() => {
        trocaEstilo(tesoura,base1)
    }, 400);
    numeroSorteado == 1 ? exibir(7):
    numeroSorteado == 2 ? exibir(8):
    numeroSorteado == 3 ? exibir(9):''
})

replay.addEventListener('click',()=>{
    containerBotoes.style.display = 'flex'
    base1.setAttribute('class',estilo)
    base2.setAttribute('class',estilo)    
    resultado.style.display = 'none'
    regras.style.display = 'block'
})

regras.addEventListener('click',()=>{
    if (descricao.style.display == 'block') {
        descricao.style.display = 'none'

    }else{
        descricao.style.display = 'block'
    }
   
})
