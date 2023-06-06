//1. Create a function that will be able to convert figures from Fahrenheit to Celsius

 const ferToCel = (f) => {
    let Cel = (f - 32) * 5 / 9;
    return Cel;
}

ferToCel(200)//93.333
ferToCel(50)//10;

//2.Create a function that will calculate the average of numbers in an array

 function average(arr){
    var sum = 0;
        for(var number of arr){
            sum += number;
        }

        return sum/arr.length;
} 

average([1,2,3,4,5,6])//3.5
average([1,22,3,40,5,69])//23.333

//3. Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non-zero digits.

 function checkNumber(n, x, y) {
    if (n % x === 0 && n % y === 0) {
            return true;
        } else {
            return false;
        }
};
console.log(checkNumber(20,5,10));


checkNumber(10, 2, 3)//true
checkNumber(10, 3, 4)//false


//4.Create a function that will output the first 100 prime numbers. BIG PROBLEMS

const prime = () => {

    var primenumbers=[];
    var nonPrime=[];

    for(var i=2; i<=1000; i++){
        const numbers=[2,3,5,7];
        if(numbers.includes(i)){
            primenumbers.push(i);
        }else if(
            i%2===0 || i%3==0 || i%5===0 || i%7===0
        ){
            nonPrime.push(i)
        }else{
            primenumbers.push(i)
        }

        if (primenumbers.length===100){
            break
        }
    }

    

    return primenumbers;
};

console.log(prime());


//5. Create a function that will return a boolean specifying if a number is a prime number.
 const primenumbers = (num) => {
    const numbers=[1,2,3,5,7];

    if(numbers.includes(num))return true;

    // check if the number is divisible by 2
    if(num%2===0)return false;
    //check if the number is divisible by 3
    if(num%3===0)return false;
    //check if the number is divisible by 5
    if(num%5===0)return false;
    //check if the number is divisible by 7
    if(num%7===0)return false;
    return true;
};

console.log(primenumbers(7)); //

//6. Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers.

const positiveNum = (arr) =>{
    var positiveNum = [];
    for (var i = 0; i < arr.length; i++){
        if(arr[i] >=0){
            positiveNum.push(arr[i]);
        }
    }

    return positiveNum;
}

(positiveNum([7,3,5,-3,-2,-5,-6,2,-5]));//[7, 3, 5, 2] 


//7.Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "FizzBuzz".

 for (var i = 1; i < 100; i++){
    if(i%3===0 && i%5===0){
        console.log("fizzbuzz")
    }else if(i%5===0){
        console.log("buzz")
            }else if(i%3==0){
                console.log("fizz")
                }else{
                console.log(i)
            }
}

5//buzz
9//fizz
15//fizzbuzz
21//fizz
 

/*8.The marketing team is spending way too much time typing in hashtags. Let’s create a hashtag generator for them, our hashtag generator will meet the following criteria; 
It must start with a hash symbol, #.
Ignore all spaces in the input.
All words must have their first letter capitalized.
If the final result is going to be longer than 140 characters, it should return false.
If the input or result is an empty string, it should return false.*/

function hashtag(str){
    const words = str.split(' ');

    for (var i = 0; i < words.length; i++){
        words[i]=words[i][0].toUpperCase() + words[i].substr(1);
    }

    return '#' + words.join('');
}
hashtag('i hope this is working')//#IHopeThisIsWorking

