"use strict";
function myFunction4(){
    document.getElementById('paragraph').innerHTML = 'Вывести температуру в градусах по Фаренгейту';

function calculate(Tc) {
    return (9 / 5) * Tc + 32;
}
const Tc = +prompt('Введите температуру в градусах', '');
if (isNaN(Tc)) {
    alert('Введена не корректная температура');
} else {
    alert(`${Tc} градусов Цельсия, в Фарейнгейтах = ${calculate(Tc)}`);
}
}