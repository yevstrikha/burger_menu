const addOnion = document.querySelector('.onion .next');
const removeOnion = document.querySelector('.onion .prev');
let onionQuantity = document.querySelector('.onion .quantity input')

const addTomatoes = document.querySelector('.tomatoes .next');
const removeTomatoes = document.querySelector('.tomatoes .prev');
let tomatoesQuantity = document.querySelector('.tomatoes .quantity input')

const addPepper = document.querySelector('.pepper .next');
const removePepper = document.querySelector('.pepper .prev');
let pepperQuantity = document.querySelector('.pepper .quantity input')

let veggiesValue = document.querySelectorAll('.quantity input');

for (let key in veggiesValue) {
    veggiesValue[key].value = 0
}


const onionKcal = document.querySelector('.onion_kcal');
const tomatoesKcal = document.querySelector('.tomatoes_kcal')
const pepperKcal = document.querySelector('.pepper_kcal')

let vegTitle = document.querySelectorAll('.vegetables_form p');
for (let key in vegTitle) {
    vegTitle[key].innerHTML = 0 + ' ' + 'kcal'
}
let totalVeggie = []

function veggieAmount(vegQuantity, less, more, calories) {
    more.addEventListener('click', () => {
        vegQuantity.value++;
        less.disabled = false;
        if (vegQuantity.value === '5') {
            more.disabled = true;
        }
        calCalk()
    })

    less.addEventListener('click', () => {
        vegQuantity.value--;
        more.disabled = false;
        if (vegQuantity.value === '0') {
            less.disabled = true
        }
        calCalk()

    })

    function calCalk() {
        if (calories === onionKcal) {
            totalVeggie.push({name: 'onion', amount: vegQuantity.value})
            calories.innerHTML = vegQuantity.value * 13 + ' ' + 'kcal';
        } else if (calories === tomatoesKcal) {
            totalVeggie.push({name: 'tomatoes', amount: vegQuantity.value})
            calories.innerHTML = vegQuantity.value * 6 + ' ' + 'kcal'

        } else if (calories === pepperKcal) {
            totalVeggie.push({name: 'pepper', amount: vegQuantity.value})
            calories.innerHTML = vegQuantity.value * 7 + ' ' + 'kcal'

        }

    }

}


veggieAmount(onionQuantity, removeOnion, addOnion, onionKcal)
veggieAmount(tomatoesQuantity, removeTomatoes, addTomatoes, tomatoesKcal)
veggieAmount(pepperQuantity, removePepper, addPepper, pepperKcal)
