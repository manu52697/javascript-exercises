const sumModule = require('./sumAll');
const sumAll = sumModule.sumAll;
const validate = sumModule.validate;

//const sumAll = require('./sumAll')


describe('sumAll', () => {
  test('sums numbers within the range', () => {
    expect(sumAll(1, 4)).toEqual(10);
  });
  test('works with large numbers', () => {
    expect(sumAll(1, 4000)).toEqual(8002000);
  });
  test('works with larger number first', () => {
    expect(sumAll(123, 1)).toEqual(7626);
  });
  test('returns ERROR with negative numbers', () => {
    expect(sumAll(-10, 4)).toEqual('ERROR');
  });
  test('returns ERROR with non-integer parameters', () => {
    expect(sumAll(2.5, 4)).toEqual('ERROR');
  });
  test('returns ERROR with non-number parameters', () => {
    expect(sumAll(10, "90")).toEqual('ERROR');
  });
  test('returns ERROR with non-number parameters', () => {
    expect(sumAll(10, [90, 1])).toEqual('ERROR');
  });
});

describe('validate', () => {
	test('accepts positive integers', () => {
		expect(validate(1)).toEqual(true);
	});
	test('rejects null', () => {
		expect(validate(null)).toEqual(false);
	});
	test('rejects non numbers', () => {
		expect(validate('hello')).toEqual(false);
	});

	test('rejects negative numbers', () => {
		expect(validate(-3)).toEqual(false);
	});
	test('rejects non integers', () => {
		expect(validate(2.5)).toEqual(false);
	});
	
});
