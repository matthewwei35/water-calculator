const display = document.querySelector('#display')
const weightInput = document.querySelector('#weight')
const ageInput = document.querySelector('#age')
const exerciseInput = document.querySelector('#exercise')
const instructions = document.querySelector('#instructions')
const instructionsParagraph = document.querySelector('#instructions-paragraph')
const disclaimer = document.querySelector('#disclaimer')
const disclaimerParagraph = document.querySelector('#disclaimer-paragraph')

function calculateWater() {
    const weightValue = weightInput.value
    const ageValue = ageInput.value
    const exerciseValue = exerciseInput.value

    let ageMultiplier = 0
    let waterForExercise = 0

    if (ageValue < 30) {
        ageMultiplier = 40
    } else if (ageValue >= 30 && ageValue <= 55) {
        ageMultiplier = 35
    } else {
        ageMultiplier = 30
    }

    let waterValue = ((weightValue / 2.2) * ageMultiplier) / 28.3

    if (exerciseValue > 0) {
        waterForExercise = exerciseValue * 0.7619047619
    }

    waterValue = waterValue + waterForExercise

    display.innerHTML = `${waterValue.toFixed(0)} Ounces or ${(waterValue / 8).toFixed(0)} Cups Daily`

}

let showInstructionsParagraph = false

function clickInstructions() {
    showInstructionsParagraph = !showInstructionsParagraph
    if (showInstructionsParagraph) {
        instructionsParagraph.style.height = "80px"
    } else {
        instructionsParagraph.style.height = 0
    }
}

let showDisclaimerParagraph = false

function clickDisclaimer() {
    showDisclaimerParagraph = !showDisclaimerParagraph
    if (showDisclaimerParagraph) {
        disclaimerParagraph.style.height = "80px"
    } else {
        disclaimerParagraph.style.height = 0
    }
}

weightInput.addEventListener('input', calculateWater)
ageInput.addEventListener('input', calculateWater)
exerciseInput.addEventListener('input', calculateWater)
instructions.addEventListener('click', clickInstructions)
disclaimer.addEventListener('click', clickDisclaimer)

calculateWater()
