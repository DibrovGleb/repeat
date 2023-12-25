const {log} = console;

let people =[
    {name:'Stephen', age : 25},
    {name:'Keil', age: 30}
]
console.groupCollapsed('Console methods (this is console.group method)')
log('We can use %c to style elements in console')
log('Here`s example %cRed, %cBlue, color: red, color: blue')
log('Result %cRed, %cBlue', 'color: red','color: blue')
log('console.time() and console.timeLog, console.timeEnd')
console.time('example')
console.timeLog('example')
console.timeEnd('example')
log('console.table')
console.table(people)
console.groupEnd()
let arr = [1,2,3,4,5]
let arr2 = [[1,2],[3,4],5]
let o1 = { a: 1 }, o2 = { b: 2 }, o3 = { c: 3 }
let obj = Object.assign(o1, o2, o3); - //copy of 3 objects o1, o2, and o3

console.groupCollapsed('Array methods')
log('Objects - let o1 = { a: 1 }, o2 = { b: 2 }, o3 = { c: 3 }\nlet obj = Object.assign(o1, o2, o3); - //copy of 3 objects o1, o2, and o3\nFirst object o1 also changes -',o1,o2,o3)
log('Two arrays first - ', arr, ' second ', arr2)
log('at', arr.at(0)) // shows variable in specified index
log('some', arr.some(test => test === 2)) // finds function value in arr and return true or false
log('reduce', arr.reduce((total, value) => total * value)) // applies a function and return only one val
log('map', arr.map(x => x * x)) // applies function on all elements and returns new array
log('flat', arr2.flat()) // make two-dimensional array into 1
log('filter', arr.filter(element => element === 3)) // return new array with all === elements
log('forEach'), arr2.forEach(element => log(element)) // applies function on all elements in array
log('findIndex', arr.findIndex(element => element === 4)) // return index of element or -1
log('find', arr.find(element => element === 5)) // return element or undefined
log('sort', arr.sort((a,b)=> a-b)) // from smallest to largest
log('sort', arr.sort((a,b)=> b-a)) // from largest to smallest
log('concat', arr.concat(arr2)) // merge 2 arrays and return one new array
log('fill', arr.fill(0,1,4)) // fill array with the value (0), in index range from 1 to 4
log('includes', arr.includes(6)) // if arr contains value in () return true if not false
log('reverse', arr.reverse()) // reverse the order values in array
arr.unshift(10); log('unshift', arr) // add value in start of array .push() - in the end
arr.shift(); log('shift', arr) // delete first element in array .pop() - last element 
arr.splice(1, 3, 'a', 'b'); log('splice', arr) // delete elements from index 1 to 3 and insert a,b
arr.slice(0,2); arr.slice(2)//return new arr from index range or from index to end of arr
const b = Array.from(arr); log('Array.from', b) // copy array Array.of(...arr) - multiply arrays
let c = arr.join(' and '); log('join', c) // return array as string separated by value
log(Array.isArray('Array.isArray',c)) // return true or false
console.groupEnd()

console.groupCollapsed('String methods')
let month = 'Декабрь, Ноябрь, Октябрь, Сентябрь';
log('Basic string - ',month)
let monthr = month.split(',').reverse().join(','); // to arr and back to string
log('String after split(",").reverse().join(",") -', monthr)
// split() - splits string into array 
// join() - turn array into string separated by value
let str = "552Simple DIMPLE string"
log('Variable - ',str)
log('Number.parseInt', Number.parseInt(str)) // return str turned into int (552)
log('repeat', str.repeat(2)) // repeats string specified times
log('substring', str.substring(14)) // extract chars from start to end or from value to end
log('toLowerCase', str.toLowerCase()) // convert string to lowercase letters, toUpperCase - conversely
log('replace', str.replace(/s/gi,"p")) // replace all s in string with p
log('match', str.match(/imp/gi)) // returns array with the matches
log(str = 50040); log('toString', str.toString()) // converts the variable type to a string
log(str="     string bong     "); log('trim', str.trim()) // removes whitespace unnecessary
console.groupEnd()
