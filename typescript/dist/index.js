"use strict";
const d0 = document.getElementById("d0");
const d1 = document.getElementById("d1");
const d2 = document.getElementById("d2");
const d3 = document.getElementById("d3");
const d4 = document.getElementById("d4");
const d5 = document.getElementById("d5");
const d6 = document.getElementById("d6");
const d7 = document.getElementById("d7");
const d8 = document.getElementById("d8");
const d9 = document.getElementById("d9");
const mul = document.getElementById("mul");
const min = document.getElementById("min");
const plus = document.getElementById("plus");
const divide = document.getElementById("div");
const point = document.getElementById("point");
const equal = document.getElementById("eq");
const reset = document.getElementById("reset");
const calScreen = document.getElementById("screen");
const operators = ["-", "+", "*", "/"];
const showOnScreen = (input) => {
    if (calScreen.innerText === "0" || calScreen.innerText === "invalid") {
        if (input === ".") {
            input = "0.";
        }
        if (input !== "*" && input !== "/" && input !== "+" && input !== "=") {
            calScreen.innerText = input;
        }
    }
    else {
        calScreen.innerText += input;
    }
};
const calculate = (str) => {
    let num1 = "";
    let num2 = "";
    let op = "";
    for (let i = 0; i < str.length; i++) {
        if (i === 0 && str[i] === "-")
            continue;
        if (operators.includes(str[i])) {
            num1 = str.slice(0, i);
            op = str[i];
            num2 = str.slice(i + 1, str.length);
            break;
        }
    }
    if (Number(num1) && Number(num2)) {
        calScreen.innerText = eval(num1 + op + num2);
    }
    else {
        calScreen.innerText = "invalid";
    }
};
d0.addEventListener("click", () => showOnScreen("0"));
d1.addEventListener("click", () => showOnScreen("1"));
d2.addEventListener("click", () => showOnScreen("2"));
d3.addEventListener("click", () => showOnScreen("3"));
d4.addEventListener("click", () => showOnScreen("4"));
d5.addEventListener("click", () => showOnScreen("5"));
d6.addEventListener("click", () => showOnScreen("6"));
d7.addEventListener("click", () => showOnScreen("7"));
d8.addEventListener("click", () => showOnScreen("8"));
d9.addEventListener("click", () => showOnScreen("9"));
mul.addEventListener("click", () => showOnScreen("*"));
min.addEventListener("click", () => showOnScreen("-"));
plus.addEventListener("click", () => showOnScreen("+"));
divide.addEventListener("click", () => showOnScreen("/"));
point.addEventListener("click", () => showOnScreen("."));
reset.addEventListener("click", function () {
    calScreen.innerText = "0";
});
equal.addEventListener("click", () => calculate(calScreen.innerText));
