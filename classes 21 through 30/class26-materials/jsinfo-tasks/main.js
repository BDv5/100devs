//thejsway ch 1

//name
let myName = 'Brent'
console.log(myName)

//log math
console.log(6 + 3)
console.log(6 - 3)
console.log(6 * 3)
console.log(6 / 3)

//thejsway ch2

//name
const firstName = prompt('Enter your first name')
const lastName = prompt('Enter your last name')

console.log('Your name is ' + firstName + ' ' + lastName)

//price
let rawPrice = prompt('What is the raw price of the goods?')
let totPrice = Number(rawPrice) * 1.206

console.log(totPrice)

//temp
let celsius = prompt('What is the current temp in celsius?')
let fahrenheit = (Number(celsius) * (9/5)) + 32

console.log(fahrenheit)

//thejsway ch3

//day of the wek
const day = prompt('What day is it?').toLowerCase()

switch (day) {
    case 'sunday':
        console.log('Monday')
        break;
    case 'monday':
        console.log('Tuesday')
        break;
    case 'tuesday':
        console.log('Wednesday')
        break;
    case 'wednesday':
        console.log('Thursday')
        break;
    case 'thursday':
        console.log('Friday')
        break;
    case 'friday':
        console.log('Saturday')
        break;
    case 'saturday':
        console.log('Sunday')
        break;
    default:
        console.log('That is not a day of the week')         
}

//compare numbers
let n1 = Number(prompt('enter the 1st number'))
let n2 = Number(prompt('enter the 2nd number'))

if (n1 === n2) {
    console.log('the numbers are equal')
} else if (n1 !== n2) {
    console.log('the numbers are not equal')
}

//month days
let month = Number(prompt('enter the number of the month to check'))

if (month === 4 || month === 6 || month === 9 || month === 11) {
    console.log('There are 30 days in month ' + month)
} else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
    console.log('There are 31 days in month ' + month)
}else if (month === 2) {
    console.log('There are 28 days in month ' + month)
} else {
    console.log('that is not a correct month number')
}


//thejsway ch4

//Carousel

let howManyTurns = Number(prompt('enter the number of turns'))

for (let i = 1; i <= howManyTurns; i++) {
    console.log('This is turn ' + i)
}

//Parity 

let startNum = Number(prompt('enter the starting number between 1 & 10'))

for (startNum; startNum <= 10; startNum++) {
    if (startNum % 2 === 0) {
        console.log(startNum + ' is Even!')        
    } else {
        console.log(startNum + ' is Odd!')
    }
}

//Input validation

function isYourNumber100() {
    let num = Number(prompt('Enter a number'))
    if (num > 100) {
        console.log('you lose, try again')
        isYourNumber100()
    } else if (num <= 100) {
        console.log('You Win')
    }
}

//Multiplication table

function multitable() {
    let yourNumber = Number(prompt('Enter a number that you would like to see the multiplication table for'))

    if (yourNumber >= 2 && yourNumber <= 9) {
        for (let i =1; i <= 9; i++) {
            console.log(yourNumber + ' x ' + i + ' = ' + ' ' + (yourNumber * i))
        }    
    } else if (yourNumber < 2 || yourNumber > 9) {
            alert('pick a number between 2 & 9')
            multitable()
        }
}

//Neither yes nor no

function yesOrNO () {
    let word = prompt('Enter a word').toLowerCase()
    if (word === 'yes' || word === 'no') {
        console.log('yay, you won!')
    } else { 
        alert('pick a new word')
        yesOrNO()
    }
}

//FizzBuzz

function fizzyBuzz () {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz')
        }else if (i % 3 === 0) {
            console.log('Fizz')
        }else if (i % 5 === 0) {
            console.log('Buzz')
        }else {
            console.log(i)
        }
    }
}    

//the JSway ch5

//imporoved hello

const nameFirst = prompt('enter your first name')
const nameLast = prompt('enter your last name')

function sayHello(firstName, lastName) {
    const message = `Hello, ${firstName} ${lastName}!`
    return message
}

//number squaring

function square1(x) {
    return x *= x
}

const square2 = x => x *= x

function square1B() {
    for (let i = 0; i <= 10; i++){
        console.log(i *i)
    }
}

const square2B = () => {
    for (let i = 0; i <= 10; i++){
        console.log(i *i)
    }   
}

//minimum of two numbers

function minNum(n1, n2){
    if (n1 <= n2){
        console.log(n1)
    }else if (n1 > n2){
        console.log(n2)
    }
}

//javascript.info array methonds

//camelize

function camelize(str) {
    return str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('')
}

//filter range
let arr = [5, 3, 8 , 1]

function filterRange(arr, a, b) {
    return arr.filter(n => (n >= a && n <= b))
}

let filtered = filterRange(arr, 1, 4)

//filter in place

let arr1 = [5, 3, 8, 1]

function filterRangeInPlace(arr, a, b) {
    return arr.filter(n => (n >= a && n <= b))
}

//sort decreasing
let arr2 = [5, 2, 1, -10, 8]

function sortDecreasing(arr) {
    return arr.sort(function(a, b) {
        return a - b
    }).reverse()
}

//copy and sort
let arr3 = ['HTML', 'JavaSxript', 'CSS']

function copySorted(arr) {
    return arr.slice().sort()
}

let sorted = copySorted(arr3)

//map to names
/*You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

For instance: */
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(u => u.name)

alert( names ); // John, Pete, Mary 

//map to objects

let john1 = { name: "John", surname: "Smith", id: 1 };
let pete1 = { name: "Pete", surname: "Hunt", id: 2 };
let mary1 = { name: "Mary", surname: "Key", id: 3 };
let users1 = [ john, pete, mary ];

let usersMapped = users1.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}))

//sort users by age

function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age)
}

sortByAge(arr)

//shuffle an array

let arr4 = [1, 2, 3]

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
    
shuffle(arr4);
alert(arr4);

//get average age

function getAverageAge(arr) {
    let avgAge = 0
        for (i = 0; i < arr.length; i++) {
        avgAge += arr[i].age
    }
    return Math.ceil(avgAge / arr.length)
}

// or  function getAverageAge(users) {
//  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
//}

/*Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr. */

function unique(arr) {
    let newArr = []
    for (let str of arr){
        if (!newArr.includes(str)) {
            newArr.push(str)
        }
    }
  
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O 

/*Create keyed object from array
importance: 4

Let’s say we received an array of users in the form {id:..., name:..., age:... }.

Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
*/

let users2 = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];
  

function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value
      return obj
    }, {})
}

let usersById = groupById(users2)

  //https://javascript.info/object#tasks

/*Hello, object
importance: 5

Write the code, one line for each action:*/

//Create an empty object user.
let userO = {}
//Add the property name with the value John.
userO.name = 'John'
//Add the property surname with the value Smith.
userO.surname = 'Smith'
//Change the value of the name to Pete.
userO.name = "Pete"
//Remove the property name from the object.
delete userO.name

/*Check for emptiness
importance: 5

Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
*/

let schedule = {}

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}
console.log(isEmpty(schedule))

/*Sum object properties
importance: 5
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
If salaries is empty, then the result must be 0.
We have an object storing salaries of our team:
*/

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = 0
for (key in salaries) {
    sum += salaries[key]    
}

/*Multiply numeric property values by 2
importance: 3

Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
*/

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function multiplyNumeric(menu) {
    for (let key in menu) {
        if(typeof menu[key] == 'number') {
            menu[key] *= 2
        }
    }      
  }