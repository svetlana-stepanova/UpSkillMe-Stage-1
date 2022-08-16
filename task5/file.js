// 1. Given the string 'ahb acb aeb aeeb adcb axeb'. 
//Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'.

let str = 'ahb acb aeb aeeb adcb axeb';
let regex = /a.b/g;
console.log(str.match(regex));

// 2. Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest

let str2 = '2 + 3 223 2223';
let regex2 = /2 \+ 3/g;
console.log(str2.match(regex2));

// 3. Get the day, month and year of the current date and output it to the console separately

let today = new Date();
let currentDay = console.log(today.getDay());
let currentMonth = console.log(today.getMonth());
let currentYear = console.log(today.getFullYear());