const display = document.querySelector('#display')
const weightInput = document.querySelector('#weight')
const ageInput = document.querySelector('#age')
const exerciseInput = document.querySelector('#exercise')

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

    let waterValue = (weightValue / 2.2) * ageMultiplier

    waterValue = waterValue / 28.3

    if (exerciseValue > 0) {
        waterForExercise = exerciseValue * 0.7619047619
    }

    waterValue = waterValue + waterForExercise

    display.innerHTML = `${waterValue.toFixed(1)} Ounces Daily`

}

weightInput.addEventListener('input', calculateWater)
ageInput.addEventListener('input', calculateWater)
exerciseInput.addEventListener('input', calculateWater)

calculateWater()