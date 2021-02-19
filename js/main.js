// Замыкание
(function() {
  /**
  * Получения случайного числа в задонном интервале
  *
  * @param {Number}  min   минимальное число
  * @param {Number}  max  максимальное число
  * @param {Number} Math.random()   Псевдослучайное число с плавающей запятой от 0 (включительно) до 1 (не считая).
  */

  // Возвращает случайное число в заданном интервале. Возвращаемое значение не менее (и может быть равно) min и не более (и не равно) max.
  let getRandomArbitrary = function (min, max) {
    return Math.random() * (max - min) + min;
  }

  /**
  * Корректировка округления десятичных дробей.
  *
  * @param {String}  type  Тип корректировки.
  * @param {Number}  value Число.
  * @param {Integer} exp   Показатель степени (десятичный логарифм основания корректировки).
  * @returns {Number} Скорректированное значение.
  */
  let decimalAdjust = function (type, value, exp) {
    // Если степень не определена, либо равна нулю...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // Если значение не является числом, либо степень не является целым числом...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    // Сдвиг разрядов
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Обратный сдвиг
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }

  // Десятичное округление к ближайшему
  if (!Math.round10) {
    Math.round10 = function(value, exp) {
      return decimalAdjust('round', value, exp);
    };
  }

  // заданный интервал [0, 102) округление до десятых
  return Math.round10(getRandomArbitrary(0, 102), -1);
})();
