function myFunction2(){
    document.getElementById('paragraph').innerHTML = '2.	Объявить две переменные: admin и name. Записать в name строку "Василий"; Скопировать значение из name в admin. Вывести admin (должно вывестись «Василий»).<br><br>let admin, name;<br>name = \'Василий\';<br>admin = name;<br>console.log(admin);<br><br> Загляните в консоль';
    let admin, name;
    name = 'Василий';
    admin = name;
    console.log(admin)
}