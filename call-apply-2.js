const normalperson = {
    firstName: ' Rahim',
    lastName : 'uddin',
    salary : 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill : function(amount, tips, tax){
        console.log(this)
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}

const heroPerson = {
    firstName : "Hero",
    lastName: " Balam",
    salary: 20000
}

const friendlyPerson = {
    firstName : "Hero",
    lastName: " Gollam",
    salary: 20000
}

// normalperson.chargeBill();

// const heroChargeBill = normalperson.chargeBill.bind(heroPerson);

// heroChargeBill(2000);
// heroChargeBill(3000);

// console.log(heroPerson.salary);
// console.log(normalperson.salary)

// const friendlyChargeBill = normalperson.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(1500);
// normalperson.chargeBill.bind(150);
// normalperson.chargeBill(3000);
// console.log(normalperson.salary);

// normalperson.chargeBill.call(heroPerson, 900, 100, 10);
// normalperson.chargeBill.call(heroPerson, 3000, 300, 30);
// console.log(heroPerson.salary);

// normalperson.chargeBill.call(friendlyPerson, 5000, 500, 50);

// console.log(friendlyPerson.salary);
// console.log(normalperson.salary);

normalperson.chargeBill.apply(heroPerson, [3000, 300, 30]);
normalperson.chargeBill.apply(heroPerson, [4000, 400, 40]);
console.log(heroPerson.salary);