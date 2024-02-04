console.time()
const arr = [1,2,3,4,5,6,7,8,9,9,1];
var sum = 0 
arr.forEach(u => sum = sum + u)
console.log(sum)
console.timeEnd()