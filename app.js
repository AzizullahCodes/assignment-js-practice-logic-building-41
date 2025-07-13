/* problem-soving assignment no 41 */
/*_______________________ Question no 1 ______________________

You have two arrays:
["HTML", "CSS"] and ["JavaScript", "React"]
Concatenate them.
Expected Output:
["HTML", "CSS", "JavaScript", "React"]
_________________________ Answer ____________________________*/
// let a = ['html','css'];
// let b = ['javascript','react'];
// let updated = a.concat(b);
// console.log(updated);
/*_______________________ Question no 2 ______________________

You have two arrays:
[10, 20, 30] and an empty array []
Concatenate them.
Expected Output:
[10, 20, 30]
_________________________ Answer ____________________________*/
// let a = [10,20,30];
// let b = [];
// let updated = a.concat(b);
// console.log(updated);
/*_______________________ Question no 3 ______________________
Slice Last Two Elements
Question:
You have the array:
["HTML", "CSS", "JavaScript", "React", "Node"]
Use .slice() to get the last two elements.

Expected Output:
["React", "Node"]
_________________________ Answer ____________________________*/ 
// let array = ["HTML", "CSS", "JavaScript", "React", "Node"];
// let newArray = array.slice(array.length-2);
// console.log(newArray)

/*_______________________ Question no 4 ______________________
 Negative Index Slicing
Question:
You have the array:
[5, 10, 15, 20, 25, 30]
Use .slice() with negative indexes to get [15, 20].

Expected Output:
[15, 20]


_________________________ Answer ____________________________*/
// let array = [5, 10, 15, 20, 25, 30];
// let newArray = array.slice(2,4);
// console.log(newArray)
/*_______________________ Question no 5 ______________________
: Check Login Access
Question:
Create a condition to allow login only if the username is "admin" and the password is "1234".
Expected Output:
Allow login only when both are correct.
_________________________ Answer ____________________________*/
// let username = 'admin';
// let password = '1234';
// if(username === 'admin' && password === 1234){console.log('you are allowed')}
// else{console.log('not allowed')}
/*_______________________ Question no 6 ______________________
Discount Eligibility
Question:
A customer gets a discount if their age is less than 18 OR greater than 60.
Expected Output:
Show message: "You are eligible for a discount" only in those cases.
_________________________ Answer ____________________________*/
// let age = prompt('enter your age');
// if(age < 18 || age > 60){console.log('eligible for discount')}
// else{console.log('not eligible for discount ')}
/*_______________________ Question no 7 ______________________
Alarm System
Question:
An alarm should ring if door is open OR window is open.

Expected Output:
Show: "Alarm ON" when any of the two is open
_________________________ Answer ____________________________*/
// let ques1 = prompt('is door open reply yes/not');
// let ques2 = prompt('is window open reply yes/no');
// if(ques1 === 'yes' || ques2 === 'yes'){console.log('alarm on')}
// else{console.log('alarm off')}

/*_______________________ Question no 7 ______________________
 Number Sign and Type
Question:
Check if a number is:
Positive or Negative
And then, check if it's even or odd
Expected Output:
Examples:
-5 → "Negative Odd"
8 → "Positive Even"
_________________________ Answer ____________________________*/
// let num = prompt('enter number');
// if(num >= 1){if(num % 2 === 0){console.log('number is positive and even')}
// else{console.log('Number is odd')}}
// else if(num === '0'){console.log('Number is zero')}
// else{console.log('Number is negative')}
/*_______________________ Question no 8  ______________________
Login System
Question:
Check:

If username is "admin"

Then check if password is "1234"

If both are correct → "Login Successful"

If password is wrong → "Incorrect Password"

If username is wrong → "Invalid Username"
_________________________ Answer ____________________________*/
// let username = prompt('enter user name');

// if(username === 'admin'){let password = prompt('enter password');
//     if(password === '1234'){console.log('login successful')}
// else{console.log('incorrect password')}}
// else{console.log('invalid user name')}

/*_______________________ Question no 9 ______________________
Traffic Signal
Question:
If signal color is "red", "yellow", or "green":

If "red" → check time > 30 sec → "Too Long!", else "Wait"

If "yellow" → "Ready"

If "green" → "Go"
_________________________ Answer ____________________________*/
// let color = prompt('enter color of signal red,yellow or green');
// if(color === 'red'){let time = prompt('enter time in secods 20,10 etc');
//     if(time > 30){console.log('Too Long!')}
//     else{console.log('wait')}
// }
// else if(color === 'yellow'){console.log('ready')}
// else{console.log('go')}
/*_______________________ Question no 10 ______________________
nested if statement
_________________________ Answer ____________________________*/
// let getAge = document.getElementById('age').value;

// if(getAge >=18){let education = document.getElementById('education').value;
//     if(education === '12'){document.getElementById('p').innerHTML = 'you are eligible for job'}
//     else{document.getElementById('p').innerHTML = 'your age is less'}
// }
// else{document.getElementById('p').innerHTML = 'You are child'}

// function checkeligibility(){let getAge = document.getElementById('age').value;
//     if(getAge >= 18){let education = document.getElementById('education').value;
//         if(education === 'inter'){document.getElementById('p').innerHTML = 'you are eligible'}
//         else{document.getElementById('p').innerHTML = 'you have low education'}
//     }
//     else{document.getElementById('p').innerHTML = 'you have less age than requirement'}
// }

/*_______________________ Question no 11 ______________________
  Beginner Tasks
Show Current Date and Time
Create a script that prints the current date and time using Date().

Extract Year Only
Print only the current year (e.g., 2025).

Get Month Name
Print the current month name (e.g., "July"), not the number.

Get Day of the Week
Print the current day name (e.g., "Sunday").

Format: DD-MM-YYYY
Display today’s date in the format 13-07-2025.
_________________________ Answer ____________________________*/
// let current = new Date();
// console.log(current, typeof current);
// let date = current.toLocaleDateString();
// console.log(date);

// let time = current.toLocaleTimeString();
// console.log(time);
// let dayName = ['sun','mon','tue','wed','thur','fri','saturday'];
// let day = current.getDay();
// let ans = dayName[day];
// console.log(ans);
// let year = current.getFullYear();
// console.log(year);

// let monthName = ['jan','feb','mar','apr','may','jun','july','aug','sep','oct','nov','dec'];
// let month = current.getMonth();
// let requirement = monthName[month];
// console.log(requirement);
/*_______________________ Question no 12 ______________________
Calculate Age
Write a program that takes a user’s birth year as input and displays their age.
_________________________ Answer ____________________________*/ 
// let current = new Date();
// let birth = new Date('May 1 1985');
// let currentInMilliSeconds = current.getTime();
// let birthInMilliseconds = birth.getTime();
// console.log(currentInMilliSeconds);
// console.log(birthInMilliseconds);
// let difference = currentInMilliSeconds - birthInMilliseconds;
// console.log(difference);
// let ageInYears = Math.floor(difference/(1000*60 * 60*24*30*12))
// console.log(ageInYears);
/*_______________________ Question no 13 ______________________
Check Leap Year
Ask the user for a year and tell if it’s a leap year or not.
_________________________ Answer ____________________________*/
// let isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
// let year = prompt('enter year');
// if((year % 4 === 0 && year % 100 !== 0)||(year % 400 === 0))
//     {console.log('leap year')}
// else{console.log('not leap year')}
/*_______________________ Question no 14 ______________________
Countdown Timer
Take a future date (e.g., "December 31, 2025") and display how many days are left from today.
______________________ Answer ____________________________*/
// let current = new Date();
// let currentInMilliSeconds = current.getTime();
// let required = new Date('july 14, 2025');
// let requiredInMillisecods = required.getTime();
// let difference = requiredInMillisecods - currentInMilliSeconds;
// console.log(difference);
// let dayCounting = Math.floor(difference/(1000*60*60*24))
// console.log(dayCounting);
/*_______________________ Question no 15 ______________________
Add Days to Current Date
Add 7 days to the current date and show the result.
_________________________ Answer ____________________________*/
// let current = new Date();
// console.log(current);
// current.setMinutes(40)
// console.log(current);
/*_______________________ Question no 16 ______________________
call function inside function
_________________________ Answer ____________________________*/
// funtion one
// function addition(a,b){let ans = a + b;
//     return ans;
// }
// // fun 2
// function multiplication(a,b,c){let u = addition(a,b);
//     let multiplication = u * c;
//     return multiplication;
// }
// // fun 3 
// function subtraction(a,b,c,d){let z = multiplication(a,b,c);
//     let subtr = z - d;
//     return subtr;
// }
// // fun 4
// function division(a,b,c,d,e){let get = subtraction(a,b,c,d);
//     let division = get/3;
//     return division;
// }
// let Output = division(2,3,4,2,3);
// console.log(Output)
/*_______________________ Question no 17 ______________________
a2 + 2ab + b3
create a formula by function?
_________________________ Answer ____________________________*/
// function formula(){let a = 2;
//     let b = 3;
//     let ans = a*a +(2*a*b) + b*b;
//     return ans;
// }
// let final = formula();
// console.log(final)
/*_______________________ Question no 18 ______________________
multiply all indexs of array with each other
_________________________ Answer ____________________________*/
// multiplication();
// function multiplication(){let result = 1;
//     let array = [2,3,4];
//     for(let i = 0; i<array.length;i++){result = result*array[i]}
//     console.log(result)
// }
            
/*_______________________ Question no 19 ______________________
sum all the numbers of array by function
_________________________ Answer ____________________________*/
// function sum(arr){let result = 0;
//     for(let i = 0;i < arr.length; i++){result = result + arr[i]}
//     console.log(result)
// }
// sum([2,3,4])
/*_______________________ Question no 20 ______________________
find max number in an array by funtion 
_________________________ Answer ____________________________*/

// function finding(arr){let max =Math.max(...arr);
//     console.log(max)
// }
// finding([4,24,8])
// function finding(arr){let maxNumber = arr[0];
//     for(let i = 0; i< arr.length; i++){if(arr[i]> maxNumber){maxNumber = arr[i]}}
//     return maxNumber;
// }
// let ans = finding([88,777,34]);
// console.log(ans)

/*_______________________ Question no 21 ______________________
get even number array from an array
_________________________ Answer ____________________________*/
// function even(arr){let evenNumber = [];
// for(let i = 0;i < arr.length;i++){if(arr[i]%2 === 0){evenNumber.push(arr[i])}}
// return evenNumber;
// }
// let Output = even([2,7,3,8,9,12]);
// console.log(Output)
/*_______________________ Question no 22 ______________________
determine all index of arry square
_________________________ Answer ____________________________*/ 
// function squaring(arr){let squareNumber = [];
//     let result = 0;
//     for(let i = 0; i< arr.length;i++){squareNumber.push(arr[i]* arr[i])
//     }
//     console.log(squareNumber)
// }
//     squaring([2,3,4])

/*_______________________ Question no 23 ______________________
double array return
_________________________ Answer ____________________________*/
// let ans = doubling([2,8,3]);
// console.log(ans)
// function doubling(Array){let double = [];
//     for(let i = 0;i <Array.length;i++){double.push(Array[i]*2)}
//     return double;
// }
/*_______________________ Question no 24 ______________________
classList
_________________________ Answer ____________________________*/
// function adding(){let get = document.getElementById('dis');
//   get.classList.add('back');
// }

// function removing(){let get = document.getElementById('dis');
//   get.classList.remove('back');
// }
// function togg(){let get = document.getElementById('dis');
//   get.classList.toggle('back');
// }


/*_______________________ Question no 25 ______________________
className
_________________________ Answer ____________________________*/

// function adding(){let get = document.getElementById('dis');
//   let heading = document.getElementById('heading');
//   heading.className =heading.className + ' ak';
//   get.className = 'back'}



/*_______________________ Question no 26 ______________________
Check If Button Has disabled Attribute
Question:
Create a button in HTML. Use JavaScript to check if it has the disabled attribute using hasAttribute(). Show a message based on the result.

Expected Output Example (Console):

If button has attribute: "Button is disabled"

If not: "Button is active"
_________________________ Answer ____________________________*/
// let getbtn = document.getElementById('btn');
// let check = getbtn.hasAttribute('disabled'
// )
// console.log(check)
// if(check === true){console.log('button is disabled')}
// else{console.log('button is active')}

/*_______________________ Question no 27 ______________________
Get Link's href Attribute
Question:
Create an <a> tag with an href attribute in HTML. Use getAttribute() in JS to get and show the href value in the console.

Expected Output Example (Console):
https://example.com
_________________________ Answer ____________________________*/
// let getAnchor = document.getElementById('anchor');
// let need = getAnchor.getAttribute('href');
// console.log(need);
/*_______________________ Question no 28 ______________________
Change the Title Attribute of a Paragraph
Question:
Make a <p> tag with title="Hello". Use JavaScript to change its title
 to "Welcome to JavaScript" using setAttribute().

Tooltip should show "Welcome to JavaScript"
_________________________ Answer ____________________________*/
// let get = document.getElementById('para');
// console.log(get);
// get.setAttribute('title','welcome to javascript');

/*_______________________ Question no 29 ______________________
queryselector and queryAllselector
_________________________ Answer ____________________________*/
// const get = document.querySelector('p');
// console.log(get)
// const get = document.querySelectorAll('p');
// console.log(get)
/*_______________________ Question no 30 ______________________
Change Text of an Element
Question:
Select the <h1> element with class .heading and change its text to "Welcome User".
HTML:
<h1 class="heading">Old Title</h1>
Expected Output:
<h1 class="heading">Welcome User</h1>
_________________________ Answer ____________________________*/

// let get = document.querySelector('h1');
// get.innerHTML = 'Welcome User';
// console.log(get)
/*_______________________ Question no 31 ______________________
Change Color of All Paragraphs
Question:
Select all <p> elements and change their color to blue.
HTML:
<p>This is para 1</p>
<p>This is para 2</p>
<p>This is para 3</p>
Expected Output:
All paragraphs should display in blue color.

_________________________ Answer ____________________________*/
// let get = document.querySelectorAll('p');
//   for(let i = 0; i<get.length;i++){get[i].style.color = 'blue'}

/*_______________________ Question no 32 ______________________
repeat();
_________________________ Answer ____________________________*/ 
// let str = 'hello';
// let num = 10;
// let ans = (str+ ' ').repeat(num);
// console.log(ans)
/*_______________________ Question no 33 ______________________
: print following pattern by repeat( )?
*
**
***
****
*****
******
*******
********
_________________________ Answer ____________________________*/
// let pattern = '';
// let time = 10;
// let sign = '*'
// for(let i = 0;i<time;i++){pattern = pattern + sign.repeat(i) +'\n';
 
// }
//  console.log(pattern)

/*_______________________ Question no 34 ______________________
mask any data by repeat( ) ; show 3252-7688-787876-98 like 3252-7688*******-98
_________________________ Answer ____________________________*/
// let data = "3252-7688-787876-98";
// ;
// let first = data.slice(0,10);
// console.log(first);
// let last = data.slice(data.length-3);
// console.log(last);
// let sign = '*';
// let need = sign.repeat(7);
// console.log(need)
// let result = first + need + last;
// console.log(result)

/*_______________________ Question no 35 ______________________
create a Student Object
Create an object student with the following properties:
name: "Ali"
age: 20
course: "JavaScript"
isEnrolled: true
👉 Your Task: Display all properties using console.log().
_________________________ Answer ____________________________*/
// let student = {name:'Ali',
//   age :20,
//   course:'js'
// }
// console.log(student);
/*_______________________ Question no 36 ______________________
 Add and Update Properties
Given an object:

let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2018
};
👉 Your Task:
Add a new property color: "white"
Update year to 2022
Log the updated object
_______________________ Answer ____________________________*/
// let car = {brand :'toyota',
//   model : 'corolla',
//   year : 2018,
// }
// car.color = 'white';
// car.year = 2022;
// console.log(car)
/*_______________________ Question no 37 ______________________
Loop Through Object
Create an object fruit with 4 properties: name, color, taste, and price.

👉 Your Task: Use for...in loop to print each key and its value.
_________________________ Answer ____________________________*/
// let fruit = {name :'apple',
//   color : 'red',
//   taste : 'delicious',
//   price : 200,
// }
// console.log(fruit);
// for(let key in fruit){console.log(key + ': ' + fruit[key])}

/*_______________________ Question no 38 ______________________
Object Inside Object
Create an object person with:
name: "Sana"
age: 30
address: { city: "Lahore", country: "Pakistan" }
👉 Your Task: Access and print person.address.city
_________________________ Answer ____________________________*/
// let person = {name : 'sana',
//   age : 30,
//   address : {city: 'Lahore',
//     country : 'Pakistan',
//   }
// }
// let ans = person.address.city;
// console.log(ans)

/*_______________________ Question no 39 ______________________
Array of Objects
Create an array books that contains 3 objects. Each object should have:
title
author
year
👉 Your Task: Loop through the array and print each book's title.
_________________________ Answer ____________________________*/
// let books = [{title :'Islam',
//   author :'Iqbal',
//   year : 1920,
// },
// {title :'Science',
//   author :'Neuton',
//   year : 1887,
// },
// {title : 'Arts',
//   author : 'Baironi',
//   year : 1232,
// }]
// console.log(books);
// for(let i = 0; i < books.length;i++){console.log(books[i].title + ' :' + books[i].author)}
/*_______________________ Question no 40 ______________________
 Object Methods
Create an object calculator with:

a method add(a, b) that returns the sum

a method subtract(a, b) that returns the difference

👉 Your Task: Call both methods and print results.
_________________________ Answer ____________________________*/
// let calculator = {add: function(a,b){return a + b;},
// subtract: function(a,b){return a - b;}}
// console.log('addition', calculator.add(3,8));
// console.log('subtraction', calculator.subtract(8,2))
/*_______________________ Question no 41 ______________________
 Check if Property Exists
Create an object laptop with keys: brand, ram, price.
👉 Your Task: Use hasOwnProperty("ram") to check and print if the property exists.
_________________________ Answer ____________________________*/
// let laptop = {brand : 'Dell',
//   ram : '60GB',
//   price : 20000,
// }
// let check = laptop.hasOwnProperty('ram');
// let check = 'rami' in laptop;
// console.log(check);
// delete laptop.ram;
// console.log(laptop)

/*_______________________ Question no 42 ______________________
Count Properties
Create an object with any 5 properties.

👉 Your Task: Count how many properties are in the object using Object.keys().
________________________ Answer ____________________________*/ 
// let store = {item1 : 'sugar',
//   item2 : 'Honey',
//   itme3 : 'Biscuit',
//   item4 : 'Tea',
//   item5 : 'Dalda',
// }
// let count = Object.keys(store).length;
// console.log(count);

/*_______________________ Question no 43 ______________________
Merge Two Objects
Create two objects:

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
👉 Your Task: Merge them into a single object using spread syntax.
_________________________ Answer ____________________________*/
// let obj1 = {a:1,
//   b:2
// }
// let obj2 = {c:3,
//   d:4
// }
// let ans = {...obj1,...obj2};
// console.log(ans)
/*_______________________ Question no 44 ______________________

_________________________ Answer ____________________________*/
// let users = [{id :1, name : 'Ali'},
//   {id :2, name :'sana'
//   },
//   {id:3, name :'anees'}
// ]
// console.log(users);
// let user = users.find(function(item){return item.id === 2;});
// console.log(user)


/*_______________________ Question no 45 ______________________
get data of object by id
_________________________ Answer ____________________________*/

// let data = { 101 : {name :'ali',age : 20},
// 102 : {name : 'hashir', age :90,}}
// console.log(data[102]);



/*_______________________ Question no 46 ______________________

Question:
Find the user object where the name is "Ahmed" from the given array.
Expected Output:
{ id: 3, name: "Ahmed" }
_________________________ Answer ____________________________*/
// let obj = [{id : 1,
//   name :'ahmed'
// },
// {id : 2,
//   name :'saqib'
// },
// {id : 3,
//   name : 'mubin'
// }]

// let result = obj.find(function(item){return item.id === 2;})
// console.log(result)
/*_______________________ Question no 47 ______________________
access data of object by for loop and id
_________________________ Answer ____________________________*/
// let users = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Sana" },
//   { id: 3, name: "Ahmed" }
// ];
// let result;
// for(let i = 0; i <users.length; i++){if(users[i].id === 3){result = users[i];
//   break;
// }}

// console.log(result)

/*_______________________ Question no 48 ______________________
access data of object by for loop and id
_________________________ Answer ____________________________*/
// let  employees = [{id : 1,
//   name :'Hashim',
//   designation : 'Manager'
// },{id : 2,
//   name : 'Hakim',
//   designation : 'Assistan Manager'
// },{id: 3, 
//   name : 'knvl',
//   designation : 'Finance Manager'
// }]
// let result;
// for(let i = 0; i<employees.length;i++){if(employees[i].id === 2){result = employees[i];
//   break;
// }}
// console.log(result);
// let len = Object.keys(employees).length;
// console.log(len);

// let students = [{id : 1,
//   name :'knvl'
// },
// {id : 4,
//   name :'nasreen'
// },
// {id :8,
//   name : 'rukhsana'
// }];
// let final;
// for(let i = 0;i <students.length;i++){if(students[i].id === 8){final = students[i];
//   break;
// }}
// console.log(final);
// let lnt = Object.keys(students).length;
// console.log(lnt);

// let newObject = {...employees,...students};
// console.log(newObject)
/*_______________________ Question no 49 ______________________
store data and show on dom  by id
_________________________ Answer ____________________________*/
// let employees = [{id : 1,
//   name : 'Aziz',
//   designation : 'software Engineer'
// },
// {id : 2,
//   name : 'Knvl',
//   designation : 'Doctor'
// }]
// console.log(employees, typeof employees);
// let convert = JSON.stringify(employees);
// localStorage.setItem('information',convert);
// console.log(convert);
// let origion = JSON.parse(convert);
// console.log(origion);
// let need;
// for(let i = 0;i<origion.length;i++){if(origion[i].id === 1){need = origion[i];
//   break;
// }}

// let output = document.getElementById('output');
// if(need){output.innerHTML = `<p>ID: ${need.id}</p>
// <p>Name : ${need.name}</p>
// <p>Designation : ${need.designation}</p>`;}
// else{output.innerHTML = '<p> No employee found</p>'}
/*_______________________ Question no 50 ______________________
create an object store data in local storage and fetch data by id and render on dom?
_________________________ Answer ____________________________*/
let studentRecord = [{id:1,
  name :'Aziz',
  class : 'Matric'
},
{id : 2,
  name : 'Haider',
  class : 'Intermediate'
},
{id : 3,
  name : 'Sabir',
  class : 'BA'
}]
// now we store it to local storage 
 let Str = JSON.stringify(studentRecord);
localStorage.setItem('studentsInformation',Str);
// now we get back data from localstorage 
let origional = JSON.parse(Str);
console.log(origional,typeof origional);
let get;
for(let i = 0; i <origional.length;i++){if((origional[i].id === 1)){get = origional[i];
  break;
}}
console.log(get);
let getdiv = document.getElementById('output');
if(get){getdiv.innerHTML = `<p>ID : ${get.id}</p> 
<p>Name: ${get.name}</p>
<p>Class: ${get.class}</p>`}
else{getdiv.innerHTML = `<p> No employee found</p>`}




