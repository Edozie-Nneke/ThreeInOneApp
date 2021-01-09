
const metric = document.getElementsByName('metric');
const display = document.querySelector('#display-output');
const getBMI = document.getElementById('bmi-button');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const display_bmi = document.getElementById('display-bmi');
const heightInInches = document.getElementById('heightInInches');

metric[0].addEventListener('click', e => {
    console.log(metric[0].value)
    heightInInches.style.display = 'none';
    weight.setAttribute('placeholder', 'Kilograms')
    height.setAttribute('placeholder', 'Centimeters')
}, false);

metric[1].addEventListener('click', e => {
    console.log(metric[1].value)
    weight.setAttribute('placeholder', 'Pounds')
    height.setAttribute('placeholder', 'Feet')
    heightInInches.style.display = 'inline-block';
}, false);

getBMI.addEventListener('click', e => {
    
    if(metric[0].checked){
        let bmiKg;
        parseFloat(bmiKg = weight.value  / ((height.value/100) ** 2))
        display_bmi.innerHTML = bmiKg.toFixed(2);
    }
    if(metric[1].checked){
        let bmiLbs, feetToinches;
        feetToinches = height.value * 12 + parseInt(heightInInches.value)
        console.log(feetToinches)
        parseFloat(bmiLbs = (weight.value / (feetToinches ** 2)) * 703)
        display_bmi.innerHTML = bmiLbs.toFixed(2);
    }
   e.preventDefault();
}, false);
