const normalperson = {
    firstName: ' Rahim',
    lastName : 'uddin',
    salary : 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill : function(amount){
        console.log(this)
        this.salary = this.salary - amount;
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

const heroChargeBill = normalperson.chargeBill.bind(heroPerson);

heroChargeBill(2000);
heroChargeBill(3000);

console.log(heroPerson.salary);
console.log(normalperson.salary)

const friendlyChargeBill = normalperson.chargeBill.bind(friendlyPerson);
friendlyChargeBill(1500);
// normalperson.chargeBill.bind(150);
// normalperson.chargeBill(3000);
// console.log(normalperson.salary);
