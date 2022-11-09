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



// for (let index = 0; index < 10; index++) {   
// }
// console.log(index);


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
