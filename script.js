// კონსოლში გამოტანით


let minus = (a,b) =>a - b
let plus = (a,b) =>Number(a) + Number(b)
let multify = (a, b) => a * b
let divide = (a, b) => a / b
let percent=(a,b)=> (a*b)/100

function calc() {
    let a = prompt('გთხოვთ შეიყვანოთ პირველი რიცხვი')
    while (isNaN(a)) {
        a = prompt('მიუთითეთ მხოლოდ რიცხვი')
    }
    let op = prompt('აირჩიეთ მოქმედება: (+, -, *, /, %)')
    while (!['+', '-', '*', '/', "%"].includes(op)) {
        op = prompt('შერჩეული მოქმედება არ არის ჩამონათვალში')
    }
    let b = prompt('გთხოვთ შეიყვანეთ მეორე რიცხვი')
    while (isNaN(b)) {
        b = prompt('მიუთითეთ მხოლოდ რიცხვი')
    }
    if (op == '-') {
        console.log(minus(a, b))
        alert(minus(a, b))
    }
    else if (op == '+') {
        alert(plus(a, b))
    }
    else if (op == '*') {
        alert(multify(a, b))
    }
    else if (op == '/') {
       alert(divide(a, b))
        }
    
    else if (op =='%'){
        alert(percent(a,b))
    }
   
}
calc()

// ეკრანზე გამოტანით


// function calculate() {
//     var p = document.getElementById("calculator").value;
//     var q = eval(p);
//     document.getElementById("calculator").value = q;
// }
// function display(value) {
//     document.getElementById("calculator").value += value;
// }
// function clearScreen() {
//     document.getElementById("calculator").value = "";
// }
