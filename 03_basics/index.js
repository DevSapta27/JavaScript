// arguments in functions of JS //

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