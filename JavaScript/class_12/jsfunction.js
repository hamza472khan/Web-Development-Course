//default peramaters

function addition1(a = 4, b = 6) {//default value
    console.log(a + b);
}
addition1();//console 10
// addition(78,90); // override the values default will be override and will console 168


//==> imediate Invoke function

(function () {
    console.log("kuch bi");

})();

//==> Callback Function
function addition2() {
    return 1 + 2;
}
function finalOutPut(value, add) {
    console.log(value * add());
}
finalOutPut(5, addition2)

function callMe() {
    return "i am a callback function"
}
function greet(name, callMe) {
    console.log("Hellow! " + name);
    // callMe()

}
greet("hamza", callMe);