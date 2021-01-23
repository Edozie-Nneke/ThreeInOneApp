// DECLARE VARIABLES
const metric = document.getElementsByName('metric')
const weight = document.getElementById('weight')
const height = document.getElementById('height')
const heightInInches = document.getElementById('heightInInches')
const getBMI = document.getElementById('bmi-button')
const clearBtn = document.getElementById('clear-button')
const displayOutput = document.querySelector('#display-output')
const display_bmi = document.getElementById('display-bmi')

// EVENTLISTENERS FOR RADIO BUTTONS
metric[0].addEventListener(
  'click',
  () => {
    heightInInches.style.display = 'none'
    weight.setAttribute('placeholder', 'Kilograms')
    height.setAttribute('placeholder', 'Centimeters')
  },
  false
)

metric[1].addEventListener(
  'click',
  () => {
    weight.setAttribute('placeholder', 'Pounds')
    height.setAttribute('placeholder', 'Feet')
    heightInInches.style.display = 'inline-block'
  },
  false
)

// EVENT LISTENER ON SUBMIT
getBMI.addEventListener(
  'click',
  e => {
    e.preventDefault()

    if (metric[0].checked) {
      let bmiKg
      parseFloat((bmiKg = weight.value / (height.value / 100) ** 2))
      display_bmi.innerHTML = bmiKg.toFixed(2)
      outCome(bmiKg)
    }
    if (metric[1].checked) {
      let bmiLbs, feetToinches
      feetToinches = height.value * 12 + parseInt(heightInInches.value)
      parseFloat((bmiLbs = (weight.value / feetToinches ** 2) * 703))
      display_bmi.innerHTML = bmiLbs.toFixed(2)
      outCome(bmiLbs)
    }
  },
  false
)

// FUNCTION TO HANDLE BMI LOGIC
function outCome(bmiValue) {
  if (bmiValue < 18.5) {
    // Underweight
    displayOutput.innerHTML = `Your BMI is: ${bmiValue.toFixed(2)}
         and is below 18.5 which is a sign of being UNDERWEIGHT`
  } else if (bmiValue > 18.5 && bmiValue <= 24.9) {
    // Normal
    displayOutput.innerHTML = `Your BMI is: ${bmiValue.toFixed(2)}
         and it falls between the NORMAL range of 18.5 to 24.9`
  } else if (bmiValue >= 25.0 && bmiValue <= 29.9) {
    // Overweight
    displayOutput.innerHTML = `Your BMI is: ${bmiValue.toFixed(2)}
         and falls between the range of 25.0 and 29.9 which
          is a sign of being OVERWEIGHT`
  } else {
    // Obese
    displayOutput.innerHTML = `Your BMI is: ${bmiValue.toFixed(2)}
         and this above 29.9 and puts you at risk of OBESITY`
  }
}

// CLEAR ALL INPUTS AND DISPLAY
clearBtn.addEventListener('click', () => {
  displayOutput.innerHTML = ''
  weight.value = ''
  height.value = ''
})
