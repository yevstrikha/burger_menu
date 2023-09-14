let accordions = document.querySelectorAll('.all_options>div');
for (let i = 0; i < accordions.length; i++) {
    accordions[i].querySelector('h2').addEventListener('click', (event) => {
        accordions[i].querySelector('.accordion').classList.toggle('hidden')
        event.target.classList.toggle('rot')
    })
}
let totalKcal=0;
let prevBtn = document.querySelectorAll('.prev');
for (let i = 0; i < prevBtn.length; i++) {
    prevBtn[i].disabled = true
}


let final = document.querySelector('.confirm_order')

final.addEventListener('click', () => {
    const confirmationScreen = document.querySelector('.receipt');
    confirmationScreen.style.display = 'block';
    let vegetablesKcal = (parseInt(onionKcal.innerHTML) + parseInt(tomatoesKcal.innerHTML) + parseInt(pepperKcal.innerHTML));
    condiment()
    xxx()
    totalKcal+=vegetablesKcal;

    document.querySelector('.rec_calories span').innerHTML = totalKcal + ' Cal'
    console.log('vegetablesKcal',vegetablesKcal)
    console.log('total',totalKcal)

})


let YouCondiments = [];

function condiment() {
    let condimentsChose = document.getElementsByName('condiments');
    YouCondiments.length = 0
    for (let i = 0; i < condimentsChose.length; i++) {
        if (condimentsChose[i].checked) {
            if (condimentsChose[i].value === 'mayo') {
                YouCondiments.push(condimentsChose[i].value)
                totalKcal += 100
            } else if (condimentsChose[i].value === 'mustard') {
                YouCondiments.push(condimentsChose[i].value)
                totalKcal += 15
            } else if (condimentsChose[i].value === 'ketchup') {
                YouCondiments.push(condimentsChose[i].value)
                totalKcal += 40
            }
        }
    }

}

function recInfo(yourSize) {
    document.querySelector('.receipt h2 span').innerHTML = Math.floor(Math.random() * 1000);
    document.querySelector('.rec_size span').innerHTML = yourSize;
    let recCondiments = document.querySelector('.rec_condiments ul');
    if (recCondiments) {
        recCondiments.innerHTML= ' '
        for (let key in YouCondiments) {
            let elem = document.createElement('li');
            elem.innerHTML = YouCondiments[key];
            recCondiments.appendChild(elem)
        }
    }

}
