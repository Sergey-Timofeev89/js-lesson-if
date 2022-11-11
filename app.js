// let age="10sd";

// age = Number(age);
// console.log(isNaN (age));

// if (!isNaN(age)) {
    
// } else {
//     console.log("Некорректный возраст");
// }


// if (age>18) {
//     console.log("Добро пожаловать");
// } else if (age===18) {
//     console.log("Поздравляем вам 18 лет!");
// } else if (age===undefined) {
//     console.log("Введите возраст");
// }else {
//     console.log("Вам еще нет 18 лет!");
// }



// let gender= "Муж";
//  if (gender.toLocaleLowerCase()==="муж") {
//     console.log("Вам налево");
//  }

//  if (gender==="Жен") {
//     console.log("Вам направо");
//  }


// let typeUser = "admin"; //user, guest, bot
// switch (typeUser) {
//     case "admin":
//         console.log("Вы администратор!");
//         break;
//     case "user":
//         console.log("Вы пользователь!");
//         break;
//     case "guest":
//         console.log("Вы гость!");
//         break;
//     case "bot":
//         console.log("Вы бот!");
//         break;
//     default:
//         console.log("Неверный тип пользователя");
//         break;
// }

// let i= 0;
// let resultString= "";
// const lastNumber=10;
// while (++i <= lastNumber) {
//     resultString += `${i}${i !== lastNumber ? `, ` : ""}`;
// }
// console.log(resultString);


// let i= 10;
// let resultString= "";
// const lastNumber=0;
// while (lastNumber <= --i) {
//     resultString += `${i}${i !== lastNumber ? `, ` : ""}`;
// }
// console.log(resultString);




// С помощью условных операторов вывести на экран длину 
// наибольшего отрезка из трех данных.

// let lengthA = 9;
// let lengthB = 8;
// let lengthC = 8;

// if (lengthA >= lengthB, lengthA >= lengthC ) {
//     console.log(lengthA);
// } else if (lengthB >= lengthA, lengthB >= lengthC) {
//     console.log(lengthB);
// } else if (lengthC >= lengthA, lengthC >= lengthB) {
//     console.log(lengthC);
// } 

// Реализовать систему рекомендаций для пользователя опираясь
// на значения переменной, хранящей значение температуры 
// в градусах Цельсия.
//    ниже -30: "Оставайтесь дома!";
//    от -30 до -10 включительно: "Сегодня холодно";
//    от -10 до +5 включительно: "Не холодно";
//    от +5 до +15 включительно: "Тепло";
//    от +15 до +25 включительно: "Очень тепло";
//    от +25 до +35 включительно: "Жарко";
//    выше или равно +35: "Пекло!";

// const temperature = 35;

// if (temperature <= -30) {
//     console.log("Оставайтесь дома!");
// } else if (temperature > -30 && temperature <= -10 ) {
//     console.log("Сегодня холодно");
// } else if (temperature > -10 && temperature <= 5) {
//     console.log("Не холодно");
// } else if (temperature > 5 && temperature <= 15) {
//     console.log("Тепло");
// } else if (temperature > 15 && temperature <= 25) {
//     console.log("Очень тепло");
// } else if (temperature > 25 && temperature < 35) {
//     console.log("Жарко");
// } else if (temperature >= 35) {
//     console.log("Пекло!");
// }

// С помощью конструкции switch и переменной, хранящей роль пользователя
// (admin, manager, user ...), выводить на экран информацию о пользователе
// (информацию любого типа, роль, дату рождения, любимый напиток и т.д.).

// let userRole = "admin"; // admin, manager, user, guest
 
// switch (userRole) {
//     case "admin":
//         console.log(alert ("Пьет Coca-Cola"));
//         break;
//     case "manager":
//         console.log(alert ("Пьет Чай"));
//         break;
//     case "user":
//         console.log(alert ("Пьет Sprite"));
//         break; 
//     case "guest":
//         console.log(alert ("Пьет Коктейль"));
//         break;   
//     default:
//         console.log(alert ("Кто вы?"));
//         break;
// }

// Что выведет комбинация данных логический операторов и почему?

// null || 0 || "" || undefined   - undefined (false) т.к. при логическом преобразовании все будут false, то возвращается последнее значение.
// "яблоко" && true && null && 1  - null (false) т.к. возвращает первое ложное значение.
// 0 || true && "false" || null   - "false" (true) т.к. приоритет у оператора &&(И) он выполняется первым действием и вернется "false" (т.к. оба true то возвращается последний), вторым действием будет выполнятся ||(ИЛИ) и вернется первое истенное значение "false".
// 0 && true || "false" && null   - (0 && true) || ("false" && null)  -  0 || null  -  null (false) т.к. при логическом преобразовании все будут false, то возвращается последнее значение.
// !0 && !!1                      - true && true - true т.к. если все true, то возвращает значение последнего операнда.
// !(null || !"апельсин" && true) - !(null || false && true)  -  !(null || false)  -  !false  -  true т.к. !(логическое "НЕ") возвращает противоположное значение.
       
// Решить следующие задачи с использованием циклов while и for.

// Вывести в консоль заданную строку N раз 

// let i = 8;

// for (; i>0; i--) {
//     console.log("Вывести в консоль заданную строку N раз"); 
// } 

// Ежедневно количество доступных автомобилей в салоне уменьшается в два
// раза. Выяснит, на какой день продаж, количество доступных к покупке авто
// станет меньше М, если известно, что в первый день продаж всего было N
// автомобилей.

// 1-решение

// let N = 10000;
// let M = 500;
// let count = 0;

// while(N>M){
//     N=N/2;
//     count++;
// }
// console.log(count);

// 2-решение

// let N = 10000;
// let M = 500;
// let count = 0;

// for (; N >= M; N = N/2) {
//     count++;
//     console.log(count); 
// }

// Проанализировав временной промежуток начиная с 1800 и до 2020 года найти
// и вывести в консоль:
//   Год первого полета человека в космос и количество итераций которое потребовалось для поиска.
//   Количество високосных годов принадлежащих данному отрезку и количество итераций которое 
//   потребовалось для поиска.

// let N = 1800;
// let N2 = 1800;
// let M = 2020;
// let flight = 1961; 

// for (N; N<M; N=N+1) {
//     if(N===flight) break;
//     console.log("Первый полет в космос 12 апреля 1961 года");   
// }
//  for (N2; N2<M; N2=N2+4) {
//     if(N2===M) break;
//      console.log("Количество високосных годов на отрезке");   
// }    
    
// Работа с if-else ДЗ.

// let a = -3;     // 1, 0, -3
// if (a === 0) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// } 

// let a = 1;    // 1, 0, -3
// if (a > 0) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }

// let a = -3;   // 1, 0, -3
// if (a < 0) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }

// let a = 0;    // 1, 0, -3
// if (a >= 0) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }

// let a = -3;    // 1, 0, -3
// if (a <=0 ) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }

// let a = 0;    // 1, 0, -3
// if (a != 0) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }

// let a = 3;    // 'test', 'тест', 3
// if (a === 'test') {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }

// let a = 1;    // '1', 1, 3
// if (a === '1') {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }

// Работа с логическими переменными.

// let test = false;   // true, false
// if (test == true ) {
//     console.log("Верное");
// } else {
//     console.log("Неверно")
// }

// let test = true;
// let result = test === true ? console.log("Верное") : console.log("Неверно")

// let test = true;   // true, false
// if (test != true ) {
//     console.log("Верное");
// } else {
//     console.log("Неверно")
// }

// let test = false;
// let result = test != true ? console.log("Верное") : console.log("Неверно")

// Работа с &&(и) и ||(или)

// let a = -3;    // 5, 0, -3, 2
// if (a > 0 && a < 5 ) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }

// let a = -3;    // 5, 0, -3, 2
// if (a === 0 || a === 2) {
//     a = a+7;
//     console.log (a);
// } else {
//     a = a/10;
//     console.log(a);
// }

// let a = 3;    // 1 и 3, 0 и 6, 3 и 5
// let b = 5;
// if (a <= 1 && b >= 3) {
//     c = a+b;
//     console.log (c);
// } else {
//     c = a-b;
//     console.log(c);
// }

// let a = 11; 
// let b = 5;   
// if (a > 2 && a < 11 || b >= 6 && b < 14 ) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }

// На switch-case

// let num = 1; // 1, 2, 3, 4
// let result = " ";
// switch (num) {
//     case 1:
//         result = 'зима';
//         break;
//     case 2:
//         result = 'весна';
//         break;
//     case 3:
//         result = 'лето';
//         break;
//     case 4:
//         result = 'осень';
//         break;   
//     default:
//         break;
// }
// console.log(result);