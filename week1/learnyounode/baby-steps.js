let total = 0;
let myOb = process.argv
for (let i = 2; i < myOb.length; i++) {
    total += Number(myOb[i]);
}
console.log(total);