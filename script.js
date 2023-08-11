const menor = document.querySelector('#menor')
const maior = document.querySelector('#maior')
const count = document.querySelector('#count')

let c = 0
const Cof = 0.7
const BlockSize = 15
const blocoMenor = {
    space: 50,
    speed: 0, // m/s
    mass: 1, // Kg  
}

const blocoMaior = {
    space: 100,
    speed: 2, // m/s
    mass: 100, // Kg
}

function start() {

    blocoMenor.mass = Number(prompt('Massa do bloco à ESQUERDA: '))
    blocoMenor.speed = Number(prompt('Velocidade do bloco à ESQUERDA: '))
    blocoMaior.mass = Number(prompt('Massa do bloco à DIREITA: '))
    blocoMaior.speed = Number(prompt('Velocidade do bloco à DIREITA: '))


    document.querySelector('#text1').innerText = blocoMenor.mass + 'KG'
    document.querySelector('#text2').innerText = blocoMaior.mass + 'KG'
    menor.style.marginLeft = blocoMenor.space * Cof + 'px'
    maior.style.marginLeft = blocoMaior.space * Cof + 'px'


    //console.log(Vap) + ou - ?

    setInterval(() => {
        blocoMaior.space -= (blocoMaior.speed * Cof) / 100
        maior.style.marginLeft = blocoMaior.space * Cof + 'px'

        blocoMenor.space -= (blocoMenor.speed * Cof) / 100
        menor.style.marginLeft = blocoMenor.space * Cof + 'px'

        if (blocoMaior.space <= blocoMenor.space + BlockSize) BlockToBlock()
        if (blocoMenor.space <=0) BlockToWall()
        if (blocoMaior.space >= 150) maior.remove()
        if (blocoMenor.space >= 150) menor.remove()
        

    }, 1);
}
start()
function BlockToBlock () {

    let Q = blocoMaior.speed * blocoMaior.mass + blocoMenor.speed * blocoMenor.mass
    let Vap = blocoMaior.speed - blocoMenor.speed
    
    let b = (Q - Vap) / (blocoMaior.mass + blocoMenor.mass)
    let a = Vap + b
    
    blocoMaior.speed = b
    blocoMenor.speed = a
    
    c += 1
    count.innerText = c
}
function BlockToWall () { 
    blocoMenor.speed = 0 - blocoMenor.speed
    c += 1
    count.innerText = c
}


