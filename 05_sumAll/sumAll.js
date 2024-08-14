const sumAll = function(start, end) {

	if(validate(start) && validate(end)){
		let max = Math.max(start, end);
		let min = Math.min(start, end);
		return sumToN(max) - sumToN(min - 1);
	}

	return 'ERROR';

};

function sumToN(n){
	return (n+1) * (n/2);
}

function validate(n){
	if(n == null) return false;
	if(typeof n !== 'number') return false;
	if(n <= 0) return false;
	if(n % 1 != 0) return false;
	return true;
}

// Do not edit below this line
// module.exports = sumAll;

module.exports = {
	sumAll: sumAll,
	validate: validate,
};

