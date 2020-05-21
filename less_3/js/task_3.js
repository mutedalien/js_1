"use strict";

let str5, str6;
str5 = '<p>3. * Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:<br>for(…){// здесь пусто}</p>';
str6 = '<pre class="javascript" style="font-family:monospace;"><ol><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;"><span style="color: #000066; font-weight: bold;">for</span> <span style="color: #009900;">&#40;</span>let i <span style="color: #339933;">=</span> <span style="color: #CC0000;">0</span><span style="color: #339933;">;</span> i <span style="color: #339933;">&lt;</span> <span style="color: #CC0000;">9</span><span style="color: #339933;">;</span> i<span style="color: #339933;">++,</span> console.<span style="color: #660066;">log</span><span style="color: #009900;">&#40;</span>i<span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span><span style="color: #009900;">&#125;</span></div></li></ol></pre>';


function myFunction3(){
    document.getElementById('question').innerHTML = str5 + str6;

    for (let i = 0; i < 9; i++, console.log(i)) {}
    document.getElementById('answer').innerHTML = "<b>Ответ в консоли</b>";

}