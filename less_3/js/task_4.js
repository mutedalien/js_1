"use strict";

let str7, str8;
str7 = '<p>4.	*Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:<br><br>x<br>xx<br>xxx<br>xxxx<br>xxxxx</p>';
str8 = '<pre class="javascript" style="font-family:monospace;"><ol><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    let array <span style="color: #339933;">=</span> <span style="color: #009900;">&#91;</span><span style="color: #009900;">&#93;</span><span style="color: #339933;">;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    let finish <span style="color: #339933;">=</span> <span style="color: #CC0000;">0</span><span style="color: #339933;">;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    while <span style="color: #009900;">&#40;</span>finish <span style="color: #339933;">&lt;</span> <span style="color: #CC0000;">20</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">        finish<span style="color: #339933;">++;</span></div></li><li style="font-weight: bold; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">        array.<span style="color: #660066;">push</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">\'x\'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">        console.<span style="color: #660066;">log</span><span style="color: #009900;">&#40;</span>array<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span style="color: #009900;">&#125;</span></div></li></ol></pre>';

function myFunction4(){
    document.getElementById('question').innerHTML = str7 + str8;

    let array = [];
    let finish = 0;
    while (finish < 20){
        finish++;
        array.push('x');
        console.log(array);
    }
    document.getElementById('answer').innerHTML = "<b>Ответ в консоли</b>";
}
