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


// 判斷式
// if (布林值) {當布林值為true時，執行程式}

if (true) {
    console.log ("我是判斷式");
}

// ifelse判斷式
// if (布林值為true) {執行程式} else{若布林值為false則執行此處程式}

var bool = false;

if (bool) {
    console.log ("布林值為true")
} else {
    console.log ("布林值為false")    
}

// 如果分數 >= 60 :及格
// 如果分數 <= 59 :補考
// 如果分數 <= 40 :被當
// else if 可以有無限多個
var score = document.getElementById ("score");
var result = document.getElementById ("result");

score.onchange = () => {

    var s = parseInt (score.value);
    
    if (s >= 60) {
        result.innerText = "分數:" + s + "-及格" ;

    }
    
    else if (s >= 40) {
        result.innerText = "分數:" + s  + "-補考" ;
    }

    else {
        result.innerText = "分數:" + s  + "-重修" ; 
    }
    
    
}

// 迴圈 Loop for 
// 語法
// for (初始值；條件-布林值；迭代器_迴圈結束後會執行的區域) {程式}
// 初始值：迴圈開始的值
// 條　件：迴圈會執行的條件 - 當條件為 true 執行，false 結束迴圈
// 迭代器：初始值處理 - 遞增 ++

for (let i = 0 ; i < 10; i++) {
    console.log ("迴圈:" + i);
    
}

// 陣列
// products.length 陣列.長度(數量)
// ["拿鐵","摩卡","黑咖啡","蜂蜜牛奶"] 排序是0,1,2,3 長度是 4
var products = ["拿鐵","摩卡","黑咖啡","蜂蜜牛奶"];
for (let i = 0; i < products.length; i++) {
    console.log (products[i]);
     }

var ps = document.getElementsByClassName ("product");

console.log(ps);

for (let i = 0; i < ps.length; i++) {
    ps[i].innerText = products[i]
    
}


// const 常數 不能更動
const pi = 123456;
// pi = pi + 10;

// let 與 var 差異
// let 在同樣的區塊內不能重複 - 安全
// 只在區塊內有效

var countA = 10;
var countA = 7;
// let countA = 5; // 重複 瀏覽器顯示錯誤

{
    let countA = 5;
    console.log(countA);
}

console.log(countA);

var countB = 99;

{
    var countB = 77;
}

console.log(countB);

let countC = 99;

{
    let countC = 77;
}

console.log(countC);