const elementGuess = document.querySelector("#chute")

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition

const recognition = new SpeechRecognition()

recognition.lang = 'pt-br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    guess = e.results[0][0].transcript
    if(guess == "sem." || guess =="Sem." || guess == "sim." || guess =="Sim."){
        guess = "100"
        guessExibition(guess)
        verifyGuess(guess)
    } else {
        guessExibition(guess)
        verifyGuess(guess)
    }
    
}

function guessExibition(guess) {
    elementGuess.innerHTML = `
    <div>Voce disse:</div>
    <span class="box">${guess}</span>
    `
}

recognition.addEventListener('end', ()=> recognition.start())