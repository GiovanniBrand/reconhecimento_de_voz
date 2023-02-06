function verifyGuess(guess) {
    let numb = parseInt(guess)

   /* if(guess == "sem." || guess =="Sem." || guess == "sim." || guess =="Sim."){
        guess = 100
        console.log(guess)*/
    if (invalidGuess(numb)){
        elementGuess.innerHTML = `
        <div>Valor invalido</div>
        `
        return

    }else if(isGraterOrSmaller(numb)){
        elementGuess.innerHTML = `
        <div>Valor invalido: o numero secreto precisa estar entre ${minValue} e ${maxValue}</div>
        `
        return

    }else if(numb === secretNumber){
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número era ${secretNumber}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente<button>
        `
    } else if (numb > secretNumber){
        elementGuess.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementGuess.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i>
        `
    }
}

function invalidGuess(numb) {
    return Number.isNaN(numb)
}

function isGraterOrSmaller(numb){
    return numb > maxValue || numb < minValue
}

function treatSem(numb){
    e.results[0][0].transcript 
    return
}


document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})