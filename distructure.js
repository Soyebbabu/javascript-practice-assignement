const person = {name : 'jack Wiliam', age: 17, job: 'facebook scrolling', gfName: 'ema watson', address: "kochu khet", phone: '123456789', friends: ['tomahanks', 'shakib', ' salman'] }

const { phone , gfName , address, sallary} = person;
// const gfName = person.gfName;
//const phone = person.phone;

// console.log(person.gfName, phone, address, sallary);
// console.log(person.gfName, phone, address);
// console.log(person.gfName, phone, address);

const friends = ['shakib khan', 'arman khan', 'salman khan', 'amir khan', 'sharukh khan'];
const [...restfriends] = friends;

console.log(...restfriends);

