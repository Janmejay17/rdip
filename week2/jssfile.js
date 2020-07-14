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


//task-4
function input1()
{
  var get1=Math.floor(Math.random()*(1000))
  document.getElementById("boxx1").value=get1;
  return get1;
}
function input2()
{
  var get2=Math.floor(Math.random()*(1000))
  document.getElementById("boxx2").value=get2;
  return get2;
}
function survival(a,b)
{
  a=a%10;
  b=b%10;
  var map1 = new Map([[0,1],[1,1],[2,2],[3,3],[4,1],[5,1],[6,2],[7,2],[8,3],[9,3]]);
  a1=map1.get(a);
  b1=map1.get(b);
 
  var map = new Map([[1,"Human"],[2,"Cockroach"],[3,"Nuclear Bomb"],[4,"Tie"]]);

  if(a1==3 && b1==3 ||
   a1==1 && b1==1 ||
    a1==2 && b1==2)
  {
    if(a1==1 && b1==1)
    {
      document.getElementById("return").innerHTML=map.get(1)+" Vs "+map.get(1);
    return "So its a,"+(map.get(4));
  }
  if(a1==2 && b1==2)
    {
      document.getElementById("return").innerHTML=map.get(2)+" Vs "+map.get(2);
    return "So its a,"+(map.get(4));
  }
  if(a1==3 && b1==3)
    {
      document.getElementById("return").innerHTML=map.get(3)+" Vs "+map.get(3);
    return "So its a,"+(map.get(4));
  }
  }
  else if(a1==1 && b1==2 ||
     a1==2 && b1==1)
  {
    document.getElementById("return").innerHTML=map.get(1)+" Vs "+map.get(2);
    return "Survivor is : "+(map.get(1));
  }
   else if(a1==2 && b1==3 ||
    a1==3 && b1==2)
  {
    document.getElementById("return").innerHTML=map.get(2)+" Vs "+map.get(3);
    return "Survivor is : "+(map.get(2));
  }
   else if(a1==1 && b1==3 ||
    a1==3 && b1==1)
  {
      document.getElementById("return").innerHTML=map.get(1)+" Vs "+map.get(3);
    return "Survivor is : "+(map.get(3));
  }

}

