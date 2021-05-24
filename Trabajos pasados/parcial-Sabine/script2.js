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


function suma2() {
    num1 = document.getElementById("numBox2").value*1;
    console.log(num1);
    result= ++num1;
    document.getElementById("numBox2").value = result;
}
function resta2() {
    num1 = document.getElementById("numBox2").value*1;
    console.log(num1);
    result= --num1;
    document.getElementById("numBox2").value = result;
}


function suma3() {
    num1 = document.getElementById("numBox3").value*1;
    console.log(num1);
    result= ++num1;
    document.getElementById("numBox3").value = result;
}
function resta3() {
    num1 = document.getElementById("numBox3").value*1;
    console.log(num1);
    result= --num1;
    document.getElementById("numBox3").value = result;
}


function suma4() {
    num1 = document.getElementById("numBox4").value*1;
    console.log(num1);
    result= ++num1;
    document.getElementById("numBox4").value = result;
}
function resta4() {
    num1 = document.getElementById("numBox4").value*1;
    console.log(num1);
    result= --num1;
    document.getElementById("numBox4").value = result;
}


function suma5() {
    num1 = document.getElementById("numBox5").value*1;
    console.log(num1);
    result= ++num1;
    document.getElementById("numBox5").value = result;
}
function resta5() {
    num1 = document.getElementById("numBox5").value*1;
    console.log(num1);
    result= --num1;
    document.getElementById("numBox5").value = result;
}


function suma6() {
    num1 = document.getElementById("numBox6").value*1;
    console.log(num1);
    result= ++num1;
    document.getElementById("numBox6").value = result;
}
function resta6() {
    num1 = document.getElementById("numBox6").value*1;
    console.log(num1);
    result= --num1;
    document.getElementById("numBox6").value = result;
}

function onClickCalculator (){

    this.numero1=parseInt(document.getElementById("numBox1").value);
    this.numero2=parseInt(document.getElementById("numBox2").value);
    this.numero3=parseInt(document.getElementById("numBox3").value);
    this.numero4=parseInt(document.getElementById("numBox4").value);
    this.numero5=parseInt(document.getElementById("numBox5").value);
    this.numero6=parseInt(document.getElementById("numBox6").value);

    Calcular()
}

function Calcular (){
    //resultadoC = operacion;
    //return resultadoC;
    var result="";
    result = (this.numero1 + this.numero2+ this.numero3+ this.numero4+ this.numero5+ this.numero6)*1000;
    document.getElementById("result").innerHTML= result;
    return result;

//document.getElementById("result").innerHTML='< class="input resultadoI"> ' + result +'</div>'; 
    
}
