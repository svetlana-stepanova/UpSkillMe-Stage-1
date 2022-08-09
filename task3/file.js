// 1. Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console.

let movies = [ 'The Avengers', 'Avengers: Infinity War', 'Avengers: Endgame', 'Avengers: Age of Ultron' ];
for (let movie of movies) {
    console.log(movie)
};

// 2. Given an array of car manufacturers, convert the array to a string and back to an array.

let carManufacturers = [ 'Toyota', 'Volkswagen Group', 'Hundai', 'General Motors'];

let carManufacturersToString = carManufacturers.join(', ');
console.log(carManufacturersToString);
console.log(typeof carManufacturersToString);

let carManufacturersToArray = carManufacturersToString.split(' ');
console.log(carManufacturersToArray);
console.log(Array.isArray(carManufacturersToArray));

// 3. Given an array of the names of your friends, add the words hello to each element of the array.

let friends = ['Robert', 'Scarlett', 'Chris', 'Mark' ];

for (i = 0; i < friends.length; i++) {
    friends[i] = 'Hello ' + friends[i] 
}

console.log(friends);

//4. Convert numeric array to Boolean

let numbers = [0, 1, 2, 3, 4];

for (i = 0; i < numbers.length; i++) {
    numbers[i] = Boolean(numbers[i])
};
console.log(numbers);

// 5. Sort the array [1,6,7,8,3,4,5,6] in descending order

let arr = [1, 6, 7, 8, 3, 4, 5, 6];
arr.sort((a, b) => b - a);
console.log(arr);

// 6. Filter array [1,6,7,8,3,4,5,6] by value> 3.

let arrayOfNumbers = [1, 6, 7, 8, 3, 4, 5, 6];
arrayOfNumbers = arrayOfNumbers.filter((value) => value > 3 );
console.log(arrayOfNumbers);

// 7. Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number.

function indexNumber (array, number) {
    return array.indexOf(number)
};
console.log(indexNumber([1,2,3,4,7,8], 2));

// 8. Implement a loop that will print the number 'a' until it is less than 10.

let a = 20;

while (!(a < 10)) {
    console.log(a);
    a--
};

// 9. Implement a loop that prints prime numbers to the console.

label:
for (let i = 2; i <= 15; i++) {

  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue label
  }

  console.log(i)
};

// 10. Implement a loop that prints odd numbers to the console

let num = 0;
while (num < 15) {

    if (num % 2 !== 0) {
        console.log(num)
    };

    num++
};