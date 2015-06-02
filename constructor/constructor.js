//Basic syntax, common
var newObject = {
	name: "Truong"
};
console.log(newObject);

//Create from prototype of other objects
var Person = function(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
};

//Create a new object from a prototype
Person.prototype.fullname = function() {
	return this.firstName + this.lastName;
};
var newObject2 = Object.create(Person.prototype); //Extend prototype of Person
newObject2.firstName = "Truong2";
newObject2.lastName = "Nguyen2";
console.log(newObject2.fullname());

//Create an empty object
var newObject3 = new Object();
console.log(newObject3);

//Set value for a property of an object
//Using dot annotation
newObject3.firstName = "Truong3";
console.log(newObject3);

//Using square bracket
newObject3['lastName'] = "Nguyen3";
console.log(newObject3);

//Using defineProperty
Object.defineProperty(newObject3, "firstName", {
	value: "Huyen",
	writable: true,
	enumerable: true,
	configurable: true //Control if properties of object can be changed (added or deleted)
});
console.log(newObject3);

var obj = {};
var objValue = '';
Object.defineProperty(obj, 'name', {
	set: function(value) {
		if (Object.prototype.toString.call(value) === "[object String]") {//Only accept string value for this property
			objValue = value;
		} else {
			objValue = '';
		}
	},
	get: function() {return objValue;}
});