const convertToCelsius = function(temp) {
	let res = (temp - 32) * (5/9);
	return fmtResult(res)
};

const convertToFahrenheit = function(temp) {
	let res = (x * 9 / 5) + 32;
	return fmtResult(res);
};

function fmtResult(temp){
	if(temp % 1 != 0) return temp.toFixed(1);
	return temp;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
