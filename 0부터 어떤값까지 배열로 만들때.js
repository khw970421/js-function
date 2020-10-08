
// [...Array(n).keys()]

console.log([...Array(15).keys()]);

console.log([ ...Array(10).keys() ]
    .map(function (i){ console.log(i)}))
