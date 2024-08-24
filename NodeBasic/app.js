class Customer {
	constructor(myName){
		this.name = myName;
		this.age = 20;
	}

	place = "dhanbad";

	hi(){
		console.log(this.age);
	}
}

let customer1 = new Customer("Mayank");
console.log(customer1)
customer1.hi();

let array1 = [2,4,5,8];

let array2 = array1.map((x)=>2*x);
let array3 = array1.filter((x)=>x%2!=0);
console.log(array2);
console.log(array3);