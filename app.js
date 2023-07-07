console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 1; i <= 100; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i, "FIZZBUZZ");
    }
    else if (i % 3 == 0) {
        console.log(i, "FIZZ");
    }
    else if (i % 5 == 0) {
        console.log(i, "BUZZ");
    }
}

// Exercise 3 Section
console.log("EXERCISE 3: \n==========\n");
console.log("PART ONE");
let number = 1;
do {
    console.log(number);
    number++;
}
while (number <= 100);
console.log("PART TWO");
let x = 1;
while (x <= 100) {

    if (x % 3 == 0 && x % 5 == 0) {
        console.log(x, "FIZZBUZZ");
    }
    else if (x % 3 == 0) {
        console.log(x, "FIZZ");
    }
    else if (x % 5 == 0) {
        console.log(x, "BUZZ");
    }
    x++;
}

//Exercise 4 Section
console.log("EXERCISE 4: \n==========\n");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
for (let i = 0; i <= n; i++) {
    if (value == n) {
        console.log(value, "Found value!");
        break;
    }
    else {
        console.log("Did not find value.");
    }
}

//Exercise 5 Section
console.log("Exercise 5 \n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (i = start; i <= n; i++) {
    if (i == fizzDivisor && i == buzzDivisor) {
        console.log(i, "FIZZBUZZ");
    }
    else if (i == fizzDivisor) {
        console.log(i, "FIZZ");
    }
    else if (i == buzzDivisor){
        console.log(i, "BUZZ");
    }
}
