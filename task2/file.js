// 1. Create a car object, add a color property to it with the value equals 'black'

let car = {
    model: 'Mercedes',
};
car.color = 'black';
console.log(car);

// 2.  Change the color property of the car object to 'green'

car.color = 'green';
console.log(car);

// 3. Add the power property to the car object, which is a function and displays the engine power to the console

car.power = () => console.log(`The engine power is: 155`);
car.power();
console.log(car);

// 4.  Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted
// pears and apples

function sum(pears, apples) {
    return pears + apples
};

console.log(sum(105,50));

// 5. Your name is saved in the payment terminal, write a function to define the name in the terminal 
//(if you entered your name, then hello + name, if not, then there is no such name)

let userName = 'Svetlana';

function checkUserName(name) {
    if (name == userName) {
        console.log(`Hello ${name}!`);
    }
    else {
        console.log('There is no such name.');
    };
};
checkUserName('Svetlana');

// 6. Write a function for calculating the type of argument and type output to the console

function dataType(argument) {
    console.log(typeof argument);
};

dataType(true);

// 7. Write a function that determines whether a number is prime or not

function isPrime(number) {
    let prime;

    if (number <= 1) {
        prime = false;
    }
    else if (number == 2) {
        prime = true;
    };

    for (i = 2; i < number; i++) {

        if (number % i == 0) {
            prime = false;
            break;
        }
        else {
            prime = true;
        };
    };

    console.log(`The number is prime: ${prime}`);
};

isPrime(29);

