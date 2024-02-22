let arr = [1,2,3,4,5,6,7,8,9]
let sum = arr.reduce(function (x, y) {
	return x + y;
}, 0);
console.log("Sum using Reduce method: " + sum);
