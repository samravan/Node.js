const array = process.argv;
array.shift();
array.shift();

let sum = 0;
array.forEach(element => {
  sum += parseInt(element);
})

console.log(sum);