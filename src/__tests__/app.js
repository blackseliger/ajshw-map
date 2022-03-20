import ErrorRepository from '../js/app';

test('should return SyntaxError', () => {
  const expected = 'SyntaxError';
  const result = new ErrorRepository().translate(1);
  expect(result).toEqual(expected);
});
test('should return ReferenceError', () => {
  const expected = 'ReferenceError';
  const result = new ErrorRepository().translate(2);
  expect(result).toEqual(expected);
});
test('should return RangeError', () => {
  const expected = 'RangeError';
  const result = new ErrorRepository().translate(3);
  expect(result).toEqual(expected);
});
test('should return Unknown error', () => {
  const expected = 'Unknown error';
  const result = new ErrorRepository().translate(4);
  expect(result).toEqual(expected);
});
