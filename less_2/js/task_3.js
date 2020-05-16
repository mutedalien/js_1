"use strict";

let str15, str16, str17, str18;
str15 = '<p>3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:</p><p>* если a и b положительные, вывести их разность;</p><p>* если а и b отрицательные, вывести их произведение;</p><p>* если а и b разных знаков, вывести их сумму;</p><p>ноль можно считать положительным числом.</p>';
str16 = '<p><pre class="javascript" style="font-family:monospace;"><ol><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    let a <span style="color: #339933;">=</span> <span style="color: #009900;">&#40;</span><span style="">Math</span>.<span style="color: #660066;">round</span><span style="color: #009900;">&#40;</span><span style="">Math</span>.<span style="color: #660066;">random</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">*</span><span style="color: #009900;">&#40;</span><span style="color: #339933;">-</span><span style="color: #CC0000;">100</span><span style="color: #339933;">-</span><span style="color: #CC0000;">100</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">+</span><span style="color: #CC0000;">100</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">,</span> b <span style="color: #339933;">=</span> <span style="color: #009900;">&#40;</span><span style="">Math</span>.<span style="color: #660066;">round</span><span style="color: #009900;">&#40;</span><span style="">Math</span>.<span style="color: #660066;">random</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">*</span><span style="color: #009900;">&#40;</span><span style="color: #339933;">-</span><span style="color: #CC0000;">100</span><span style="color: #339933;">-</span><span style="color: #CC0000;">100</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">+</span><span style="color: #CC0000;">100</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span style="color: #000066; font-weight: bold;">if</span> <span style="color: #009900;">&#40;</span>a <span style="color: #339933;">&gt;</span> <span style="color: #339933;">-</span><span style="color: #CC0000;">1</span> <span style="color: #339933;">&amp;&amp;</span> b <span style="color: #339933;">&gt;</span> <span style="color: #339933;">-</span><span style="color: #CC0000;">1</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">        console.<span style="color: #660066;">log</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">&quot;Значения переменных:&quot;</span><span style="color: #339933;">,</span> a<span style="color: #339933;">,</span> <span style="color: #3366CC;">&quot;,&quot;</span><span style="color: #339933;">,</span> b<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">        console.<span style="color: #660066;">log</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">&quot;Разность: &quot;</span><span style="color: #339933;">,</span> a <span style="color: #339933;">-</span> b<span style="color: #009900;">&#41;</span></div></li><li style="font-weight: bold; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span style="color: #009900;">&#125;</span> <span style="color: #000066; font-weight: bold;">else</span> <span style="color: #000066; font-weight: bold;">if</span> <span style="color: #009900;">&#40;</span>a <span style="color: #339933;">&lt;</span> <span style="color: #CC0000;">0</span> <span style="color: #339933;">&amp;&amp;</span> b <span style="color: #339933;">&lt;</span> <span style="color: #CC0000;">0</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">        console.<span style="color: #660066;">log</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">&quot;Значения переменных:&quot;</span><span style="color: #339933;">,</span> a<span style="color: #339933;">,</span> <span style="color: #3366CC;">&quot;,&quot;</span><span style="color: #339933;">,</span> b<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">        console.<span style="color: #660066;">log</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">&quot;Произведение: &quot;</span><span style="color: #339933;">,</span> a <span style="color: #339933;">*</span> b<span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span style="color: #009900;">&#125;</span> <span style="color: #000066; font-weight: bold;">else</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">        console.<span style="color: #660066;">log</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">&quot;Значения переменных:&quot;</span><span style="color: #339933;">,</span> a<span style="color: #339933;">,</span> <span style="color: #3366CC;">&quot;,&quot;</span><span style="color: #339933;">,</span> b<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></div></li><li style="font-weight: bold; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">        console.<span style="color: #660066;">log</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">&quot;Сумма: &quot;</span><span style="color: #339933;">,</span> a <span style="color: #339933;">+</span> b<span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span style="color: #009900;">&#125;</span></div></li></ol></pre></p>';
str17 = '<p><b>Загляните в консоль</b></p>';
str18 = '<p></p>';

function myFunction3(){
    document.getElementById('paragraph').innerHTML = str15 + "<b>Ответ: </b>" + str16 + str17 + str18;

    let a = (Math.round(Math.random()*(-100-100)+100)), b = (Math.round(Math.random()*(-100-100)+100));
    if (a > -1 && b > -1) {
        console.log("Значения переменных:", a, ",", b);
        console.log("Разность: ", a - b)
    } else if (a < 0 && b < 0) {
        console.log("Значения переменных:", a, ",", b);
        console.log("Произведение: ", a * b)
    } else {
        console.log("Значения переменных:", a, ",", b);
        console.log("Сумма: ", a + b)
    }
}