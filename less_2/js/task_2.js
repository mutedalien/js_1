"use strict";

let str11, str12, str13;
str11 = '<p>2. Чему будет равен x в примере ниже?</p>';
str12 = '<p><pre class="javascript" style="font-family:monospace;"><ol><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;"><span style="color: #000066; font-weight: bold;">var</span> a <span style="color: #339933;">=</span> <span style="color: #CC0000;">2</span><span style="color: #339933;">;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;"><span style="color: #000066; font-weight: bold;">var</span> x <span style="color: #339933;">=</span> <span style="color: #CC0000;">1</span> <span style="color: #339933;">+</span> <span style="color: #009900;">&#40;</span>a <span style="color: #339933;">*=</span> <span style="color: #CC0000;">2</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></div></li></ol></pre></p>';
str13 = '<p>Оператор *= означает умножение с присвоением. Арифметическое действие будет выглядеть как 1 + (2 * 2). Ответ: 5</p>';

function myFunction2(){
    document.getElementById('paragraph').innerHTML = str11 + str12 + "<b>Ответ: </b>" + str13;
}