"use strict";

let str7, str8;
str7 = '<p>Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.</p>';
str8 = '<p><pre class="javascript" style="font-family:monospace;"><ol><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    let val1 <span style="color: #339933;">=</span> <span style="color: #009900;">&#40;</span><span style="">Math</span>.<span style="color: #660066;">round</span><span style="color: #009900;">&#40;</span><span style="">Math</span>.<span style="color: #660066;">random</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">*</span><span style="color: #009900;">&#40;</span><span style="color: #CC0000;">0</span><span style="color: #339933;">-</span><span style="color: #CC0000;">10</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">+</span><span style="color: #CC0000;">10</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">,</span> val2 <span style="color: #339933;">=</span> <span style="color: #009900;">&#40;</span><span style="">Math</span>.<span style="color: #660066;">round</span><span style="color: #009900;">&#40;</span><span style="">Math</span>.<span style="color: #660066;">random</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">*</span><span style="color: #009900;">&#40;</span><span style="color: #CC0000;">0</span><span style="color: #339933;">-</span><span style="color: #CC0000;">10</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">+</span><span style="color: #CC0000;">10</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">&nbsp;</div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span style="color: #000066; font-weight: bold;">function</span> plus<span style="color: #009900;">&#40;</span>val1_<span style="color: #339933;">,</span> val2_<span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">        <span style="color: #000066; font-weight: bold;">return</span> val1_ <span style="color: #339933;">+</span> val2_<span style="color: #339933;">;</span></div></li><li style="font-weight: bold; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span style="color: #009900;">&#125;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span style="color: #000066; font-weight: bold;">function</span> minus<span style="color: #009900;">&#40;</span>val1_<span style="color: #339933;">,</span> val2_<span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">        <span style="color: #000066; font-weight: bold;">return</span> val1_ <span style="color: #339933;">-</span> val2_<span style="color: #339933;">;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span style="color: #009900;">&#125;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span style="color: #000066; font-weight: bold;">function</span> mult<span style="color: #009900;">&#40;</span>val1_<span style="color: #339933;">,</span> val2_<span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: bold; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">        <span style="color: #000066; font-weight: bold;">return</span> val1_ <span style="color: #339933;">*</span> val2_<span style="color: #339933;">;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span style="color: #009900;">&#125;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span style="color: #000066; font-weight: bold;">function</span> segm<span style="color: #009900;">&#40;</span>val1_<span style="color: #339933;">,</span> val2_<span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">        <span style="color: #000066; font-weight: bold;">return</span> val1_ <span style="color: #339933;">/</span> val2_<span style="color: #339933;">;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span style="color: #009900;">&#125;</span></div></li><li style="font-weight: bold; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    console.<span style="color: #660066;">log</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">&quot;Вводные переменные&quot;</span><span style="color: #339933;">,</span> val1<span style="color: #339933;">,</span> <span style="color: #3366CC;">&quot;,&quot;</span><span style="color: #339933;">,</span> val2<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    console.<span style="color: #660066;">log</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">&quot;Plus&quot;</span><span style="color: #339933;">,</span> plus<span style="color: #009900;">&#40;</span>val1<span style="color: #339933;">,</span> val2<span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    console.<span style="color: #660066;">log</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">&quot;Minus&quot;</span><span style="color: #339933;">,</span> minus<span style="color: #009900;">&#40;</span>val1<span style="color: #339933;">,</span> val2<span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    console.<span style="color: #660066;">log</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">&quot;Multiplication&quot;</span><span style="color: #339933;">,</span> mult<span style="color: #009900;">&#40;</span>val1<span style="color: #339933;">,</span> val2<span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    console.<span style="color: #660066;">log</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">&quot;Segmentation&quot;</span><span style="color: #339933;">,</span> segm<span style="color: #009900;">&#40;</span>val1<span style="color: #339933;">,</span> val2<span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></div></li></ol></pre></p>';

function myFunction5(){
    document.getElementById('paragraph').innerHTML = str7 + str8 + "<b>Ответ в консоли</b>";

    let val1 = (Math.round(Math.random()*(0-100)+100)), val2 = (Math.round(Math.random()*(0-100)+100));

    function plus(val1_, val2_) {
        return val1_ + val2_;
    }
    function minus(val1_, val2_) {
        return val1_ - val2_;
    }
    function mult(val1_, val2_) {
        return val1_ * val2_;
    }
    function segm(val1_, val2_) {
        return val1_ / val2_;
    }
    console.log("Вводные переменные", val1, ",", val2);
    console.log("Plus", plus(val1, val2));
    console.log("Minus", minus(val1, val2));
    console.log("Multiplication", mult(val1, val2));
    console.log("Segmentation", segm(val1, val2));
}