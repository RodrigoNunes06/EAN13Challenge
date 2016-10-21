class EANUtils {

  static checkNumber (numbers) {
    var sum = 0;
    for(var i = 0; i < numbers.length; i++) {
      var number = parseInt(numbers[i]);
      if ((i % 2) == 0){
        sum += number;
      } else {
        sum += number*3;
      }
    }

    return sum;
  }

  static isValidEAN13(numbers) {
    var sum = EANUtils.checkNumber(numbers);
    if ((sum % 10) == 0){
      return true
    }

    return false
  }

  static calculateControlDigit(numbers){
    var sum = EANUtils.checkNumber(numbers)
    return sum % 10
  }

}

export default EANUtils;
