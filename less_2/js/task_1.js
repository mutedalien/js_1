"use strict";

let str1, str2, str3, str4;
str1 = '<p>1. Дан код:</p>';
str2 = '<p><pre class="javascript" style="font-family:monospace;"><ol><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;"><span style="color: #000066; font-weight: bold;">var</span> a <span style="color: #339933;">=</span> <span style="color: #CC0000;">1</span><span style="color: #339933;">,</span> b <span style="color: #339933;">=</span> <span style="color: #CC0000;">1</span><span style="color: #339933;">,</span> c<span style="color: #339933;">,</span> d<span style="color: #339933;">;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">c <span style="color: #339933;">=</span> <span style="color: #339933;">++</span>a<span style="color: #339933;">;</span> alert<span style="color: #009900;">&#40;</span>c<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #006600; font-style: italic;">// 2</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">d <span style="color: #339933;">=</span> b<span style="color: #339933;">++;</span> alert<span style="color: #009900;">&#40;</span>d<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #006600; font-style: italic;">// 1</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">c <span style="color: #339933;">=</span> <span style="color: #009900;">&#40;</span><span style="color: #CC0000;">2</span><span style="color: #339933;">+</span> <span style="color: #339933;">++</span>a<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> alert<span style="color: #009900;">&#40;</span>c<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #006600; font-style: italic;">// 5</span></div></li><li style="font-weight: bold; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">d <span style="color: #339933;">=</span> <span style="color: #009900;">&#40;</span><span style="color: #CC0000;">2</span><span style="color: #339933;">+</span> b<span style="color: #339933;">++</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> alert<span style="color: #009900;">&#40;</span>d<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #006600; font-style: italic;">// 4</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">alert<span style="color: #009900;">&#40;</span>a<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #006600; font-style: italic;">// 3</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">alert<span style="color: #009900;">&#40;</span>b<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #006600; font-style: italic;">// 3</span></div></li></ol></pre></p>';
str3 = '<p>Почему код даёт именно такие результаты?</p>';
str4 = '<p>В строке 2 происходит <b>префиксная</b> форма инкрементирования, прибавляющая единицу <b>перед</b> выводом значения</p><p>В строке 3 происходит <b>постфиксная</b> форма инкрементирования, прибавляющая единицу <b>после</b> вывода значения</p><p>В строке 4, инкрементированная переменная а, имеющая уже значение 3, складывается с двойкой</p><p>В строке 5, переменная b, имеющая значение 2, складывается с двойкой. После этого b увеличивается на единицу</p><p>В строках 6 и 7 выводятся конечные значения переменных a и b, с учетом их постфиксных и префиксных инкременент.</p>';

function myFunction1(){
    document.getElementById('paragraph').innerHTML = str1 + str2 + str3 + "<b>Ответ: </b>" + str4;
}