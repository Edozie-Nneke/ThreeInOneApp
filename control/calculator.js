const topDisplay = document.getElementById('top-display')
const calcInput = document.getElementById('calc-input')
const numbers = document.querySelectorAll('.num')
const signs = document.querySelectorAll('.sign')
const cancel = document.getElementById('cancel')
const equal = document.getElementById('equal')

// RESET CALULATOR INPUT
cancel.addEventListener('click', () => {
   calcInput.value = '0'
   topDisplay.innerHTML = ''
})

// KEY ACTIONS FOR NUMBERS
for (let n = 0; n < numbers.length; n++) {
   let nums = numbers[n]
   let digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

   nums.addEventListener('click', () => {
      if (nums.value === '0' && calcInput.value === '0') {
         calcInput.value = ''
         calcInput.value = calcInput.value + nums.value
      } else if (digits.indexOf(nums.value) > -1 && calcInput.value === '0') {
         calcInput.value = ''
         calcInput.value = calcInput.value + nums.value
      } else {
         calcInput.value = calcInput.value + nums.value
      }
   })
}

// KEY ACTIONS FOR SIGNS
for (let s = 0; s < signs.length; s++) {
   let symbols = signs[s]

   symbols.addEventListener('click', () => {
      if (calcInput.value && topDisplay.innerHTML === '') {
         topDisplay.innerHTML = calcInput.value + symbols.value
         calcInput.value = ''
      }
   })
}
