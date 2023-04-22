const outdoor = document.getElementById('onbtn');
let cardone = document.getElementById('one');
let grpactivity = document.getElementById('two');
let cardonee = document.getElementsByClassName('seecardIndi');
let group = document.getElementsByClassName('seecardgrp');

cardone.addEventListener('click', () => {

    for (let i = 0; i < cardonee.length; i++) {
        let getVal = cardonee[i].style.display;

        if (getVal === 'none') {
            cardonee[i].style.display = '';
        } else {
            cardonee[i].style.display = 'none';
        }

    }

})
grpactivity.addEventListener('click', () => {
    for (let i = 0; i < group.length; i++) {
        let getVal = group[i].style.display;

        if (getVal === 'none') {
            group[i].style.display = '';
        } else {
            group[i].style.display = 'none';
        }
    }
})