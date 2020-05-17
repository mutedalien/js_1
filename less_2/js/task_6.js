"use strict";

let str9, str10, arg1, arg2, operation, mathresult, alphabet, randomIndex;
str9 = '6.  Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).';
str10 = '<pre class="javascript" style="font-family:monospace;"><ol><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    arg1 <span style="color: #339933;">=</span> <span style="color: #009900;">&#40;</span><span style="">Math</span>.<span style="color: #660066;">round</span><span style="color: #009900;">&#40;</span><span style="">Math</span>.<span style="color: #660066;">random</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">*</span><span style="color: #009900;">&#40;</span><span style="color: #CC0000;">0</span><span style="color: #339933;">-</span><span style="color: #CC0000;">100</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">+</span><span style="color: #CC0000;">100</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    arg2 <span style="color: #339933;">=</span> <span style="color: #009900;">&#40;</span><span style="">Math</span>.<span style="color: #660066;">round</span><span style="color: #009900;">&#40;</span><span style="">Math</span>.<span style="color: #660066;">random</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">*</span><span style="color: #009900;">&#40;</span><span style="color: #CC0000;">0</span><span style="color: #339933;">-</span><span style="color: #CC0000;">100</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">+</span><span style="color: #CC0000;">100</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    alphabet <span style="color: #339933;">=</span> <span style="color: #3366CC;">&quot;+-*/&quot;</span><span style="color: #339933;">;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    randomIndex <span style="color: #339933;">=</span> <span style="">Math</span>.<span style="color: #660066;">floor</span><span style="color: #009900;">&#40;</span><span style="">Math</span>.<span style="color: #660066;">random</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">*</span> alphabet.<span style="color: #660066;">length</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></div></li><li style="font-weight: bold; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    operation <span style="color: #339933;">=</span> alphabet<span style="color: #009900;">&#91;</span>randomIndex<span style="color: #009900;">&#93;</span><span style="color: #339933;">;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">&nbsp;</div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span style="color: #000066; font-weight: bold;">function</span> getValue<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">        mathresult <span style="color: #339933;">=</span> <span style="color: #003366; font-weight: bold;">false</span><span style="color: #339933;">;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">        <span style="color: #000066; font-weight: bold;">switch</span> <span style="color: #009900;">&#40;</span>operation<span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: bold; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">            <span style="color: #000066; font-weight: bold;">case</span> <span style="color: #3366CC;">&quot;+&quot;</span><span style="color: #339933;">:</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">                mathresult <span style="color: #339933;">=</span> arg1 <span style="color: #339933;">+</span> arg2<span style="color: #339933;">;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">                <span style="color: #000066; font-weight: bold;">break</span><span style="color: #339933;">;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">            <span style="color: #000066; font-weight: bold;">case</span> <span style="color: #3366CC;">&quot;-&quot;</span><span style="color: #339933;">:</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">                mathresult <span style="color: #339933;">=</span> arg1 <span style="color: #339933;">-</span> arg2<span style="color: #339933;">;</span></div></li><li style="font-weight: bold; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">                <span style="color: #000066; font-weight: bold;">break</span><span style="color: #339933;">;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">            <span style="color: #000066; font-weight: bold;">case</span> <span style="color: #3366CC;">&quot;*&quot;</span><span style="color: #339933;">:</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">                mathresult <span style="color: #339933;">=</span> arg1 <span style="color: #339933;">*</span> arg2<span style="color: #339933;">;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">                <span style="color: #000066; font-weight: bold;">break</span><span style="color: #339933;">;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">            <span style="color: #000066; font-weight: bold;">case</span> <span style="color: #3366CC;">&quot;/&quot;</span><span style="color: #339933;">:</span></div></li><li style="font-weight: bold; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">                mathresult <span style="color: #339933;">=</span> arg1 <span style="color: #339933;">/</span> arg2<span style="color: #339933;">;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">                <span style="color: #000066; font-weight: bold;">break</span><span style="color: #339933;">;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">        <span style="color: #009900;">&#125;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">        <span style="color: #000066; font-weight: bold;">return</span> mathresult<span style="color: #339933;">;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span style="color: #009900;">&#125;</span></div></li><li style="font-weight: bold; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    console.<span style="color: #660066;">log</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">&quot;Вводные переменные&quot;</span><span style="color: #339933;">,</span> arg1<span style="color: #339933;">,</span> operation<span style="color: #339933;">,</span> arg2<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    console.<span style="color: #660066;">log</span><span style="color: #009900;">&#40;</span>getValue<span style="color: #009900;">&#40;</span>arg1<span style="color: #339933;">,</span> arg2<span style="color: #339933;">,</span> operation<span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></div></li></ol></pre>';


function myFunction6() {
    document.getElementById('paragraph').innerHTML = str9 + str10 + "<br><b>Ответ в консоли</b>";

    arg1 = (Math.round(Math.random()*(0-100)+100));
    arg2 = (Math.round(Math.random()*(0-100)+100));
    alphabet = "+-*/";
    randomIndex = Math.floor(Math.random() * alphabet.length);
    operation = alphabet[randomIndex];

    function getValue(){
        mathresult = false;
        switch (operation) {
            case "+":
                mathresult = arg1 + arg2;
                break;
            case "-":
                mathresult = arg1 - arg2;
                break;
            case "*":
                mathresult = arg1 * arg2;
                break;
            case "/":
                mathresult = arg1 / arg2;
                break;
        }
        return mathresult;
    }
    console.log("Вводные переменные", arg1, operation, arg2);
    console.log(getValue(arg1, arg2, operation));
}




