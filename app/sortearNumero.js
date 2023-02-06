const minValue = 1
const maxValue = 1000
const secretNumber = aleatoryNumberGenerator()

function aleatoryNumberGenerator() {
    return parseInt((Math.random() * maxValue) + 1)
}

console.log(secretNumber)
const elementMinValue = document.querySelector("#menor-valor")
elementMinValue.innerHTML = minValue
const elementMaxValue = document.querySelector("#maior-valor")
elementMaxValue.innerHTML = maxValue