class numberValidator {
  // Метод для проверки, является ли число четным
  isNumberEven(number) {
    if (typeof number !== 'number') {
      throw new Error('Input must be a number');
    }
    return number % 2 === 0;
  }

  // Метод для получения всех четных чисел из массива
  getEvenNumbersFromArray(array) {
    if (!Array.isArray(array)) {
      throw new Error('Input must be an array');
    }
    return array.filter((number) => {
      if (typeof number !== 'number') {
        throw new Error('Array elements must be numbers');
      }
      return this.isNumberEven(number);
    });
  }
}

module.exports = numberValidator;
