const celcius = document.getElementById('celcius')
const fahrenheit = document.getElementById('fahrenheit')
const kelvin = document.getElementById('kelvin')
const clear = document.getElementById('clear')

const tempInput = document.getElementsByClassName('temp-input')

clear.addEventListener('click', () => {
   celcius.value = ''
   fahrenheit.value = ''
   kelvin.value = ''
})

for (let i = 0; i < tempInput.length; i++) {
   let enteredValue = tempInput[i]
   enteredValue.addEventListener('input', e => {
      let value = parseFloat(e.target.value)
      let name = e.target.name
      let c_f = value * 1.8 + 32 //Celcius to Farehenheit
      let c_k = value + 273.15 //Celcius to Kelvin
      let f_c = (value - 32) / 1.8 //Farehenheit to Celcius
      let f_k = (value - 32) / 1.8 + 273.15 //Farehenheit to Kelvin
      let k_c = value - 273.15 //Kelvin to Celcius
      let k_f = (value - 273.15) * 1.8 + 32 //Kelvin to Farehenheit

      switch (name) {
         case 'celcius':
            fahrenheit.value = c_f.toFixed(2)
            kelvin.value = c_k.toFixed(2)
            break
         case 'fahrenheit':
            celcius.value = f_c.toFixed(2)
            kelvin.value = f_k.toFixed(2)
            break
         case 'kelvin':
            celcius.value = k_c.toFixed(2)
            fahrenheit.value = k_f.toFixed(2)
            break
         default:
            return
      }
   })
}
