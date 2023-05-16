const suma = (x,y,z) => x+y+z;

let numeros = [7,8,9]
var a =[1,2,3,4,5]
var b =[6,7,8,9,10]

a=[...b]
console.log(a)

console.log("----------En ES5")
console.log(suma.apply(null, numeros))
console.log(a.concat(b))


console.log("----------")


console.log("----------En ES6")
console.log(suma(...numeros))
console.log([...a,...b])



