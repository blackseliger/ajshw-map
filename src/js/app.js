export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [1, 'SyntaxError'],
      [2, 'ReferenceError'],
      [3, 'RangeError'],
    ]);
  }

  translate(code) {
    return this.errors.has(code) ? this.errors.get(code) : 'Unknown error';
  }
}

const errorRepository = new ErrorRepository();
console.log(errorRepository.translate(2));
