// arguments in functions of JS //
/* 
function addNumbers() {
  console.log(arguments);
  let ans = 0;
  for(let i = 0 ; i< arguments.length ; i++ ) {
     ans = ans + arguments[i];
  }
  return ans;
}


let ans2 = addNumbers(10,20,30,40,50,60,70,80,90,100);
console.log("The value is : " , ans2);


// spread operator in JS //

function addNumbers2(...numbers){
   console.log(numbers);
   console.log(arguments);
   let ans = 0 ;
   for (let i = 0 ; i < numbers.length ; i++ ) {
    ans = ans + numbers[i];
   }
   return ans ;
}

let result = addNumbers2(100,200,300,400,500);
console.log(result)

// arrow functions //

const addNumbers3 = (...numbers) => {
      console.log(numbers);
      let ans =0 ;
      for(let i = 0 ; i < numbers.length ; i++ ) {
             ans = ans + numbers[i];
      }
      return ans ;
}

let result2 = addNumbers3(50,150,250,350,450)
console.log(result2);

// if u are using arrow functions , u need to call the function after declaring it //

const sayHello =() => {
  console.log("Hello");
}

sayHello();

// this keyboard in arrow functions //
const obj = {
  value : " 10 " ,
  function : () => {
    console.log(this.value); // will give undefined as in arrow function we cant use the value which is outside the scope of the function //
  }
}
obj.function();

// this keyboard in normal functions //

const obj2 = {
  value : "Saptarshi" ,
  myfunction : function () {
    console.log(this.value); // gives the result //
  }
}

obj2.myfunction();


// calbacks in JavaScript //

function calling (a , b , c ) {
   let ans = a+b ;
   c(ans);
}

calling( 10 ,20 , function display(ans) {
  console.log(ans);
})

// callbacks in arrow function //

function calling2( a , b , c) {
   let ans = a*b ;
   c(ans);
}

calling2 ( 10 ,20 , (result) => {
  console.log(result);
}) 

//arr items //

const arr = ["1" , "2" , "3" , 4 , true ]
console.log(arr);
console.log(arr.length)
arr.push(false);
arr.push("10");
console.log(arr.length);
arr.pop();
arr.pop();
console.log(arr.length);
console.log(arr.lastIndexOf('1'));
console.log(arr.lastIndexOf('10'));
console.log(arr)

//higher order of array //

const arr2 = ["1" , "2" , "3" , 4 , true ] 
console.log(arr2) ;
arr2.slice(1,3);
console.log(arr2);
arr2.splice(1,4);
console.log(arr2);*/