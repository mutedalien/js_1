function myFunction3(){
    document.getElementById('paragraph').innerHTML = '<p>3.	Чему будет равно JS-выражение 1000 + "108"?<br><br>let a, b;<br> a = 1000;<br>b = "108";<br><br>result = a + b;<br>console.log(result);<br><br>Результат: <b>1000108</b><br>Результат (конкатенация) обусловлен тем, что в переменные переданы разные типы данных</p>';
    let a, b;
    a = 1000;
    b = "108";
    result = a + b;
    console.log(result);
}