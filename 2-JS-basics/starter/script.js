/**********************
 * Variables and data types
 */

/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
var if = 23;
*/

/**********************
 * Variable mutation and type coercion
 */

/*
var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/



/**********************
 * Basic operators
 */
/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


// Logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);


// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/



/**********************
 * Operator precedence
 */

/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
//x = x * 2;
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);
*/


/**********************
 * Coding Challenge 1
 */

/*
var johnMass, johnHeight, johnBMI, markMass, markHeight, markBMI;

johnMass = 80; // kg
johnHeight = 1.75; // metres
johnBMI = johnMass / (johnHeight * johnHeight);

markMass = 100;
markHeight = 1.70;
markBMI = markMass / (markHeight * markHeight);
console.log(markBMI, johnBMI);

var markHasHigherBMI = markBMI > johnBMI;

console.log('Is Mark\'s BMI higher than John\'s? ' + markHasHigherBMI);
*/


/**********************
 * If /else statements
 */

/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married.');
} else {
    console.log(firstName + ' is not married.');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married.');
} else {
    console.log(firstName + ' is not married.');
}
*/


/**********************
 * Boolean logic
 */

/*
var firstName = 'John';
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
*/


/**********************
 * The Ternary Operator and Switch Statements
 */

/*
var firstName = 'John';
var age = 16;

age >= 18 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(firstName + ' drinks ' + drink);
*/

/*
// Switch statement for a string
var job = 'teacher';
switch (job) {
    case 'teacher':
    case 'lecturer':
        console.log(firstName + ' teaches kids how to code');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Melbourne.');
        break;
    case 'designer':
        console.log(firstName + ' designs great websites');
        break;
    default:
        console.log(firstName + ' does something else');
}

var age = 16;

// Switch statement for a boolean where cases resolve to true
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager');
        break;
    case age >=20 && age < 30:
        console.log(firstName + ' is a young man');
        break;
    default:
        console.log(firstName + ' is a man');
}
*/

/**********************
 * Truthy and Falsy values and equality operators
 */


// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

/*var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operator
if (height === '23') {
    console.log('The == operator does type coercion!');
}*/

/**********************
 * Coding Challenge 2
 */
/*

var johnScoreGame1 = 89,
    johnScoreGame2 = 120,
    johnScoreGame3 = 103,
    mikeScoreGame1 = 116,
    mikeScoreGame2 = 97,
    mikeScoreGame3 = 123,
    maryScoreGame1 = 97,
    maryScoreGame2 = 134,
    maryScoreGame3 = 105;

var avgJohnScore = (johnScoreGame1 + johnScoreGame2 + johnScoreGame3) / 3;
var avgMikeScore = (mikeScoreGame1 + mikeScoreGame2 + mikeScoreGame3) / 3;
var avgMaryScore = (maryScoreGame1 + maryScoreGame2 + maryScoreGame3) / 3;

console.log(avgJohnScore, avgMikeScore, avgMaryScore);

switch(true) {
    case avgJohnScore > avgMikeScore && avgJohnScore > avgMaryScore:
        console.log('John has a higher avg:' + avgJohnScore);
        break;
    case avgMikeScore > avgJohnScore && avgMikeScore > avgMaryScore:
        console.log('Mike has a higher avg:' + avgJohnScore);
        break;
    case avgMaryScore > avgJohnScore && avgMaryScore > avgMikeScore:
        console.log('Mary has a higher avg:' + avgMaryScore);
        break;
    default:
        console.log('It\'s a draw!');
}
*/

/**********************
 * Functions
 */
/*

function calculateAge(birthYear) {
    return 2019 - birthYear;
}

var ageJohn = calculateAge(1967);
var ageMike = calculateAge(1931);
var ageJane = calculateAge(1986);

console.log(ageJohn, ageMike, ageJane);


function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if(retirement > 0 ) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' has retired.');
    }
}

yearsUntilRetirement(1967, 'Evan');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1986, 'Jane');
*/

/**********************
 * Function Statements and Expressions
 */

// Function declaration
// function whatDoYouDo (job, firstName) {}
/*

// Function expression
var whatDoYouDo = function (job, firstName) {
   switch (job) {
       case 'teacher':
           return firstName + ' teaches kids how to code';
       case 'driver':
           return firstName + ' drives a taxi';
       case 'designer':
           return firstName + ' designs websites';
       default:
           return firstName + ' does something else';
   }
};

console.log(whatDoYouDo('teacher', 'Evan'));
*/


/**********************
 * Arrays
 */
/*

// Initialise new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr');
console.log(john);
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);

*/


/**********************
 * Coding Challenge 2
 */
/*

function calculateTip(bill) {
    if (bill < 50) {
        return bill * 0.2;
    } else if (bill >= 50 && bill <= 200) {
        return bill * 0.15;
    } else {
        return bill * 0.1;
    }
}

function calculateBill(bill) {
    return calculateTip(bill) + bill;
}

var tips = [calculateTip(124), calculateTip(48), calculateTip(268)];
console.log(tips);
var bills = [calculateBill(124), calculateBill(48), calculateBill(268)];
console.log(bills);

*/

/**********************
 * Objects and Properties
 */
/*

// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1967;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/**********************
 * Objects and Methods
 */

/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1967,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calculateAge: function () {
        this.age = 2018 - this.birthYear;
    }
};

john.calculateAge();
console.log(john);
*/

/**********************
 * Coding Challenge 4
 */

/*

var john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 85,
    height: 1.75,
    calculateBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};

var mark = {
    firstName: 'Mark',
    lastName: 'Jones',
    mass: 80,
    height: 1.75,
    calculateBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};

if (john.calculateBMI() > mark.calculateBMI()) {
    console.log(john.firstName + ' has a higher BMI [' + john.BMI + '] than ' + mark.firstName + ' [' + mark.BMI + ']');
} else if (mark.BMI > john.BMI) {
    console.log(mark.firstName + ' has a higher BMI [' + mark.BMI + '] than ' + john.firstName + ' [' + john.BMI + ']');
} else {
    console.log(john.firstName + ' and ' + mark.firstName + ' both have the same BMI');
}

*/

/**********************
 * Loops and iterations
 */

// for (var i = 1; i <= 20; i+=2) console.log(i);

/*
var john = ['John', 'Smith', 1990, 'designer', false];

for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

var i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++;
}
*/

// continue and break statements

/*var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}*/


/**********************
 * Coding Challenge 5
 */

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function () {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            // determine percentage based on tipping rules
            var percentage;
            if(this.bills[i] < 50) {
                percentage = .2;
            } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
                percentage = .15;
            } else {
                percentage = .1
            }

            // add result to arrays
            this.tips[i] = this.bills[i] * percentage;
            this.finalValues[i] = this.bills[i] + this.tips[i];
        }
    }
};

var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function () {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            // determine percentage based on tipping rules
            var percentage;
            if(this.bills[i] < 100) {
                percentage = .2;
            } else if (this.bills[i] >= 100 && this.bills[i] < 300) {
                percentage = .1;
            } else {
                percentage = .25
            }

            // add result to arrays
            this.tips[i] = this.bills[i] * percentage;
            this.finalValues[i] = this.bills[i] + this.tips[i];
        }
    }
};

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

console.log(john);
console.log(mark);

if (john.average > mark.average) {
    console.log(john.fullName + ' pays higher tips on average.')
} else {
    console.log(mark.fullName + ' pays higher tips on average.')
}



