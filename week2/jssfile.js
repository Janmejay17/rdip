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
function allLetter()
  { 
  var uname = document.registration.username;
  var letters = /^[A-Za-z]\w*$/;
  if(uname.value.match(letters))
  {
  // Focus goes to next field i.e. Address.
  document.registration.address.focus();
  return true;
  }
  else
  {
  alert('Name should start with alphabets only, Username must have alphanumeric characters only');
  uname.focus();

  return false;
  }
  }
function allnumeric()
  { 
  var uzip = document.registration.zip;
  var numbers = /^[0-9]+$/;
  if(uzip.value.match(numbers) && uzip.value.length===10)
  {
  // Focus goes to next field i.e. email.
  document.registration.email.focus();
  return true;
  }
  else
  {
  alert('phone number should contain ten digits and only number');
  uzip.focus();
  return false;

  }
  }
 function ValidateEmail()
  {
  var uemail = document.registration.email;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(uemail.value.match(mailformat))
  {
  document.registration.desc.focus();
  return true;
  }
  else
  {
  alert("You have entered an invalid email address!");
  uemail.focus();
  return false;
  }
  }