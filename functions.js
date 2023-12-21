console.groupCollapsed('Functions types');
(() => {log("Immediately Invoked Function Expression (() => { code })()")})()
log('function definition expression anonymous - \nvar square = function(number) { return number * number; };')
var square = function(number) { return number * number; }
var x = square(4) // x получает значение 16
log('var x = square(4), x =', x)
log("function declaration - function name (){ /*  ....code....  */}")
function name (){ /*  ....code....  */}
console.groupEnd()

console.groupCollapsed('Conditional operator');
log('simple if else \nif (age > 18) log(${age} years old) \nelse log(${age}? You are to small for this)\nTernary operator ? : in one line\nreturn age > 18 ? Yo sap my ${age} years old nugget! : You ${age} years old? Bye')
log(`Lets try age = 16 and age = 21\nResult - ${ageVerify(16)}\nResult2 - ${ageVerify(21)}`)
function ageVerify(age){
    // if else statement 
  if (age > 18) console.log(`${age} years old`)
  else console.log(`${age}? You are to small for this)`)
      // Conditional operator in one line this is the same as first
  return age > 18 ? `Yo sap my ${age} years old nugget!` : 
  `You ${age} years old? Bye`
}
console.groupEnd()

log('Check promise and Closures (замыкания) in function.js')
function displayMsg() {
    const message = 'Скрытое послание';
    return function() {
        log(message)
    }
}
let Myfunc = displayMsg()
Myfunc()

function makeAdder(x) {
    return function (y) {
      return x + y;
    };
  }

let add5 = makeAdder(5);
let add10 = makeAdder(10);
  
log(add5(2));
log(add10(2));

const userLeft = 0
const userMem = 1
function watchTut (){
    return new Promise((resolve,reject)=>{
        if (userLeft) reject('Bye user')
        else if (userMem) reject ('Nice meme')
        else resolve('POBEDA')
    })
}
watchTut().then((message)=>{
    log(message)
}).catch((error)=>{
    log(error)
})

const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'one');
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
});
Promise.all([promise1, promise2]).then((value)=>{
    log(value)
})  // returns all  
Promise.race([promise1, promise2]).then((value) => {
    log(value); // Both resolve, but promise2 is faster
}); // return then faster one is completed
