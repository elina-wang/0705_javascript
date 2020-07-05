console.log("我是JS!")

// 文件物件模式
// DOM
// getElementById 藉由ID搜抓到元素, innerHTML 透過HTML寫入字串。
// JQ寫法為 $("#box1").innerHTML = "hello";
document.getElementById("box1").innerHTML = "hello";

//Variables 變數
// 四大資料類別
// 數字、浮點數、字串、布林值(true / false)

var a = 10;
var b = 1.5;
var c = "文字";
var d = true;

// 運算子
// 數學加減乘除餘 + - * / %
// 程式內的 = 為指定符號
// =右邊執行完畢後再指定回左邊

a = a + 1;
b = b * 3;

console.log(a);
console.log(b);

// **指數
// ++ --遞增遞減1

var e = 4;
e = e ** 3;
console.log(e);

var f = 5;
f++;
console.log(f);

var g = 7;
g--;
console.log(g);

// 指定運算子 =
// 加減乘除餘 + - * / % ** 通用

var H = 10;
H **= 5;
console.log(H);

// 函式 function / method
// 語法： 函式 函式名稱(參數1,參數2,參數3,...) {程式內容}

function functionA() {
    console.log("我是函式");

}

// 需要呼叫才能執行
functionA();
functionA();

function addTen(a) {
    a += 10;
    console.log("加10:" + a )
    

}

addTen(8);
addTen(20);

function mul(a, b) {
    console.log("相乘結果:" + a * b)

}

a = 10;
b = 5;

mul(a, b);

// JS object

var car = {
    brand : "VOVO",
    cc : 2000,
    color : "black",
    drive : function() {
        console.log("開車中...");
    }
};

console.log("汽車品牌:" + car.brand);
car.drive();

// 練習事件

var box2 = document.getElementById("box2");

box2.onclick = () => {
    console.log("點擊!");
}

box2.onmouseenter = () => {
    console.log("滑入!");
}

box2.onmouseleave = () => {
    console.log("滑出!");
} 

// 陣列資料

// var {
//     numberA:10;
//     numberB:5;
//     numberC:20;
// }

// var numbers {
//     A : 10; 
//     B : 5;
//     C : 20;
// }

var numbers = [10,5,20];
console.log("陣列第三筆資料:" + numbers[2]);

numbers[1] = 500;
console.log("陣列第二筆資料:" + numbers[1]);

console.log("陣列的數量:" + numbers.length);

// 比較運算子 > < >= <= != !==

var tA = 100;
var tB = 80;
console.log(tA > tB);

// 顛倒運算子

var tC = true;
console.log(!tC);

var num1 = 8;
var num2 = "9";
console.log(num1 == num2);    //比較值
console.log(num1 === num2);   //比較值和類別

// 並且 &&
// 只要有一個 false 結果就是 false
console.log(true && true);          // t
console.log(true && false);         // f
console.log(false && true);         // f
console.log(false && false);        // f

// 或者 ||
// 只要有一個 true 結果就是 true
console.log(true || true);          // t
console.log(true || false);         // t
console.log(false || true);         // t
console.log(false || false);        // f



