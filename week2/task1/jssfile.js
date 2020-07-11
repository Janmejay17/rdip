function multiply(){
a=Number(document.calculator.number1.value);
b=Number(document.calculator.number2.value);
c=a*b;
document.calculator.total.value=c;
}



function addition(){
a=Number(document.calculator.number1.value);
b=Number(document.calculator.number2.value);
c=a+b;
document.calculator.total.value=c;
}



function subtraction(){
a=Number(document.calculator.number1.value);
b=Number(document.calculator.number2.value);
c=a-b;
document.calculator.total.value=c;
}



function division(){
a=Number(document.calculator.number1.value);
b=Number(document.calculator.number2.value);
c=a/b;
document.calculator.total.value=c;
}
function abs()
{
a=Number(document.calculator.number1.value);
b=Number(document.calculator.number2.value);
c=Math.abs(a-b);
document.calculator.total.value=c;
}
function modulus(){
a=Number(document.calculator.number1.value);
b=Number(document.calculator.number2.value);
c=(a/100)*b;
document.calculator.total.value=c;
}
function sqrt(){
a=Number(document.calculator.number1.value);
c=Math.sqrt(a);
document.calculator.total.value=c;
}