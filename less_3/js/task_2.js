"use strict";

let str3, str4;
str3 = '<p>2. C помощью цикла do while написать функцию вывода числа от 0 до 10. Требуется, чтобы результат выглядел так:<br>Число - фраза<br>0 - это ноль<br>1 - нечётное число<br>2 - чётное число<br>3 - нечётное число<br>...<br>10 - чётное число</p>';
str4 = '<pre class="javascript" style="font-family:monospace;"><ol><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    let x <span style="color: #339933;">=</span> <span style="color: #CC0000;">0</span><span style="color: #339933;">;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span style="color: #000066; font-weight: bold;">do</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">        <span style="color: #000066; font-weight: bold;">if</span> <span style="color: #009900;">&#40;</span>x <span style="color: #339933;">===</span> <span style="color: #CC0000;">0</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">            console.<span style="color: #660066;">log</span><span style="color: #009900;">&#40;</span>x<span style="color: #339933;">,</span> <span style="color: #3366CC;">&quot; - это ноль&quot;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></div></li><li style="font-weight: bold; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">        <span style="color: #009900;">&#125;</span> <span style="color: #000066; font-weight: bold;">else</span> <span style="color: #000066; font-weight: bold;">if</span> <span style="color: #009900;">&#40;</span>x <span style="color: #339933;">%</span> <span style="color: #CC0000;">2</span> <span style="color: #339933;">===</span><span style="color: #CC0000;">0</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">            console.<span style="color: #660066;">log</span><span style="color: #009900;">&#40;</span>x<span style="color: #339933;">,</span> <span style="color: #3366CC;">&quot; - это четное число&quot;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">        <span style="color: #009900;">&#125;</span> <span style="color: #000066; font-weight: bold;">else</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">            console.<span style="color: #660066;">log</span><span style="color: #009900;">&#40;</span>x<span style="color: #339933;">,</span> <span style="color: #3366CC;">&quot; - это нечетное число&quot;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">        <span style="color: #009900;">&#125;</span></div></li><li style="font-weight: bold; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">        x<span style="color: #339933;">++;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span style="color: #009900;">&#125;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    while <span style="color: #009900;">&#40;</span>x <span style="color: #339933;">&lt;</span> <span style="color: #CC0000;">10</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></div></li></ol></pre>';


function myFunction2(){
    document.getElementById('question').innerHTML = str3 + str4;

    let x = 0;
    do {
        if (x === 0) {
            console.log(x, " - это ноль");
        } else if (x % 2 ===0) {
            console.log(x, " - это четное число");
        } else {
            console.log(x, " - это нечетное число");
        }
        x++;
    }
    while (x < 10);
    document.getElementById('answer').innerHTML = "<b>Ответ в консоли</b>";
}