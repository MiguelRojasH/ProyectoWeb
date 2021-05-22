var num1;
var result;

function suma() {
    num1 = document.getElementById("numBox1").value*1;
    console.log(num1);
    result= ++num1;
    document.getElementById("numBox1").value = result;
}
function resta() {
    num1 = document.getElementById("numBox1").value*1;
    console.log(num1);
    result= --num1;
    document.getElementById("numBox1").value = result;
}