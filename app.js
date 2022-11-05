let age="10sd";

age = Number(age);
console.log(isNaN (age));

if (!isNaN(age)) {
    
} else {
    console.log("Некорректный возраст");
}


if (age>18) {
    console.log("Добро пожаловать");
} else if (age===18) {
    console.log("Поздравляем вам 18 лет!");
} else if (age===undefined) {
    console.log("Введите возраст");
}else {
    console.log("Вам еще нет 18 лет!");
}



let gender= "Муж";
 if (gender.toLocaleLowerCase()==="муж") {
    console.log("Вам налево");
 }

 if (gender==="Жен") {
    console.log("Вам направо");
 }


let typeUser = "admin"; //user, guest, bot
switch (typeUser) {
    case "admin":
        console.log("Вы администратор!");
        break;
    case "user":
        console.log("Вы пользователь!");
        break;
    case "guest":
        console.log("Вы гость!");
        break;
    case "bot":
        console.log("Вы бот!");
        break;
    default:
        console.log("Неверный тип пользователя");
        break;
}

// let i= 0;
// let resultString= "";
// const lastNumber=10;
// while (++i <= lastNumber) {
//     resultString += `${i}${i !== lastNumber ? `, ` : ""}`;
// }
// console.log(resultString);


let i= 10;
let resultString= "";
const lastNumber=0;
while (lastNumber <= --i) {
    resultString += `${i}${i !== lastNumber ? `, ` : ""}`;
}
console.log(resultString);



// for (let index = 0; index < 10; index++) {   
// }
// console.log(index);