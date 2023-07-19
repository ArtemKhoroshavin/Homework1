let user = { 
    name: 'Alex',
    age: 23,
    city: 'London',
    isAdmin: true,

} 
for (const key in user) {
    console.log(key);
}

let sum = (a, b) => {
    console.log(a+b);
}
sum(5, 8);

sum2(6, 2);
function sum2 (a, b) {
    console.log(a+b);
}


let cirkle1 = {
radius:10 
}