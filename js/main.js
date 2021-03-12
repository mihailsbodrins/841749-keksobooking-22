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
  const getRandomFloat = function (min, max) {
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
  return Math.round10(getRandomFloat(0, 102), -1);
})();

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const CHECKINOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];


const madeAd = () => {
  const location = {
    x: getRandomFloat(35.65000, 35.70000, 5),
    y: getRandomFloat(139.70000, 139.80000, 5),
  };
  return {
    author: {
      avatar: 'img/avatars/user0${getRandom(1,8)}.png',
    },
    offer: {
      title: 'Japanese Dream',
      address: '${location.x}, ${location.y}',
      price: getRandom(0, 250000),
      type: TYPES[getRandom(0, TYPES.length -2)],
      rooms: getRandom(1, 5),
      guests: getRandom(1, 6),
      checkin: CHECKINOUT[getRandom(0, CHECKINOUT.length -1)],
      checkout: CHECKINOUT[getRandom(0, CHECKINOUT.length -1)],
      features: getRandomArrayFromAnother(FEATURES),
      description: 'Всё самое лучшие для вас в японском минимализме',
      photos: getRandomArrayFromAnother(PHOTOS),
    },
    location: location,
  }
}

/**
 * получение случайного элемента из массива
 * @param {Array} arr — исходный массив
 * @return {*} — случайный элемент
 */
// const getRandomElementFromArray = (arr) => {
//   const randomIndex = getRandom(0, arr.length);
//   return arr[randomIndex];
// };
const getRandom = (min, max) => {
  // получить случайное число от (min-0.5) до (max+0.5)
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};
const getRandomFloat = (min, max) => {
  return (Math.random() * (max - min) + min).toFixed(5);
};
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
const getRandomArrayFromAnother = (array) => {
  shuffle(array)
  return array.splice(1, getRandom(1, array.length));
};

const makeAds = (count) => {
  let ads = [];
  for (let i = 0; i < count; i++) {
    ads[i] = madeAd();
  }
  return ads;
}

// const sameMadeAdd = getRandomElementFromArray.map;

// console.log(sameMadeAdd);
