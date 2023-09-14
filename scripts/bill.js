function xxx() {
    let elements = document.querySelectorAll('.vegetables_form .quantity input');
    let veggList = document.querySelector('.rec_veggies ul');
    veggList.innerHTML = ' '
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].value !== '0') {
            let elem = document.createElement('li');
            elem.innerHTML=  ''
            elem.innerHTML = elements[i].name + ' ' + elements[i].value
            veggList.appendChild(elem)
        }
    }
    let size = document.getElementsByName('check_size');
    let yourSize = document.querySelector('.rec_size span')
    for (let i = 0; i < size.length; i++) {
        if (size[i].checked) {
            if (size[i].value === 'small') {
                yourSize = size[i].value
                totalKcal += 185;
                break;
            } else {
                yourSize = size[i].value
                totalKcal += 345;
                break;
            }
        }
    }
    recInfo(yourSize)

}
