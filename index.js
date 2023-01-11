// Iteration 1: Names and Input
const hacker1 = "Anna"; 
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Jaya";
console.log(`The navigators's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
 console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}
  
else if (hacker1.length < hacker2.length) {
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}
  
else {
console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
const nameCapital = hacker1.toUpperCase();

let updateName = ``;

for (let i=0; i< nameCapital.length; i++) {
updateName += `${nameCapital[i]} `

};
console.log(updateName);



const lastIndex = hacker2.length -1;
let updateName2 = ``;

for (let j= lastIndex; j>= 0; j--) {
updateName2 += `${hacker2[j]}`

}
console.log(updateName2)



if (hacker1.localeCompare(hacker2)=== -1) {
console.log(`The driver's name goes first.`)
}

else if (hacker1.localeCompare(hacker2)=== 1) {
console.log(`Yo, the navigator goes first definitely.`)
}

else {
console.log(`What?! You both have the same name?`) 
}