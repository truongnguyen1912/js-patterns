//MODULE
var testModule = (function() {
	var counter = 0;
	
	//Private method
	var increment = function(value) {
		counter += value;
	};
	
	return {
		increment: function(value) {
			increment(value);
		},
		resetCounter: function() {
			counter = 0;
		},
		getCounter: function() {
			return counter;
		}
	};
})();

testModule.increment(100);
console.log(testModule.getCounter());

testModule.resetCounter();
console.log(testModule.getCounter());