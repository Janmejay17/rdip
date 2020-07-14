//task1
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
//task2
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
//task3

//task 3
//palindromes
function TestFunction()
{
var InputStr = document.getElementById('tbox').value; 
var resStr = checkingPalindrome(InputStr);
alert('The input string "'+InputStr+'" is "'+resStr+'"'); 
}
function checkingPalindrome(InputStr)
{
var origString;
InputStr = InputStr.toLowerCase();

origString= InputStr;

InputStr = InputStr.split(''); 
InputStr = InputStr.reverse();
InputStr = InputStr.join(''); 
var revString = InputStr;
if(origString == revString){
return 'Palindrome word';
}
else
{
return 'not a Palindrome word';
}
}

//anagrams




function checkAnagram() {
  var str1 = document.getElementById('word1').value;
  var str2 = document.getElementById('word1').value;
  if(str1 !== null && str2 !== null) {
    if(str1.length !== str2.length) {
      alert("Words are not anagrams.");
      return false;
    }
    var hTable = {};
    for(var i = 0; i < str1.length; i++) {
      if(hTable.hasOwnProperty(str1[i])) {
        hTable[str1[i]] = hTable[str1[i]] + 1;
    } else {
     hTable[str1[i]] = 1; 
    }
  }
   
  for(var i = 0; i < str2.length; i++) {
    if(hTable.hasOwnProperty(str2[i])) {
      hTable[str2[i]] = hTable[str2[i]] - 1;
    } else {
      alert("Words are not anagrams.");
      return false;
    }
  }
    
  for(var i in hTable) {
    if(hTable[i] !== 0) {
      alert("Words are not anagrams.");
      return false;
    } else {
       alert("Words are anagrams!");
       break;
    }
  }
}
}
//task4