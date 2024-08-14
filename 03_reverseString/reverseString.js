const reverseString = function(str) {
	let res = []
	let chars = str.split('')

	while(chars.length > 0) {
		c = chars.pop()
		res.push(c)
	}


	return res.join('')
};

// Do not edit below this line
module.exports = reverseString;
