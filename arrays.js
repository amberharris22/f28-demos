let backpack = []

backpack.push('jedi robe')
backpack.push('light saber', 'crippling sense of failure and guilt')

backpack.splice(1,1)

backpack.push('wookie coat')

backpack.pop()

backpack.push('blue milk', 'baby yoda', 'a child named luke', 'com device', 'high ground', 'blaster')

let stroller = backpack.splice(3,2)

console.log(backpack)
console.log(stroller)

console.log(backpack.length)

// for loop that lists all items in backpack and console.log each item

for(let i=0; i<backpack.length; i++){
    console.log(backpack[i])
}