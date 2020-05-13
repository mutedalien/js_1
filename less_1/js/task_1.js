"use strict";
function myFunction1(){
    document.getElementById('paragraph').innerHTML = '1.	Спросить у пользователя температуру в градусах по Цельсию. Вывести в alert соответствующую температуру по Фаренгейту.<br>Подсказка: расчет идет по формуле Tf = (9 / 5) * Tc + 32, где Tf — температура по Фаренгейту, Tc — по Цельсию.';

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