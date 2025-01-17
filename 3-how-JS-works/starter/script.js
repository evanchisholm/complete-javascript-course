///////////////////////////////////////
// Lecture: Hoisting

/*calculateAge(1968);

function calculateAge(year) {
    console.log(2019 - year);
}

// error if before function expression
// retirement(1967);

var retirement = function(year) {
    console.log(65 - (2019 - year));
}

retirement(1967);

// variables
// variable is known but value is not set yet, so undefined
console.log(age);
// Global scope variable
var age = 23;

function foo() {
    // function scope variable
    var age = 65
    console.log(age);
}
foo();
console.log(age);*/



///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the difference between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

// console.log(this);

/*
calculateAge(1984);

function calculateAge(year) {
    console.log(2019 - year);
    console.log(this);
}
*/

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2019 - this.yearOfBirth);

        /*function innerFunction() {
            console.log(this);
        }
        innerFunction();*/
    }
};

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

// method borrowing
mike.calculateAge = john.calculateAge;
mike.calculateAge();

