const metric = document.getElementsByClassName('metric');
const weight = document.getElementById('Kg');
const height = document.getElementById('Lbs');
const getBMI = document.getElementById('bmi-button');
const displayBMI = document.getElementById('display-bmi');
const displayOutput = document.getElementById('display-output');

const weightValue = weight.addEventListener('input', e => {
    e.target.value;
});

const heightValue = height.addEventListener('input', e => {
    e.target.value;
});

for(i = 0; i < metric.length; i++){
    let value = metric[i]
    value.addEventListener('click', e => {
        let selectedMetric = e.target.value;

        
    });
}
