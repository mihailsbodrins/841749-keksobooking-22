/**
 * Получение случайного числа в задонном интервале
 *
 * @param {Number} min -  минимальное число
 * @param {Number} max - максимальное число
 * @return {Number} - Псевдослучайное число с плавающей запятой от 0 (включительно) до 1 (не считая).
 */
const getRandomFloat = (min, max) => {
  return Math.random() * (max - min) + min;
}

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

/**
 * Функция для генерации объекта недвижимости
 *
 * @return {Object} - объект недвижимости
 */
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
 * Получение случайного элемента из массива
 *
 * @param {Array} arr — исходный массив
 * @param {Number} min -  минимальное число
 * @param {Number} max - максимальное число
 * @param {Number} count - количество вариантов
 * @return {*} — случайный элемент
 */
const getRandomElementFromArray = (arr) => {
  const randomIndex = getRandom(0, arr.length);
  return arr[randomIndex];
};
const getRandom = (min, max) => {
  // получить случайное число от (min-0.5) до (max+0.5)
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};
const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
const getRandomArrayFromAnother = (arr) => {
  shuffle(arr)
  return arr.splice(1, getRandom(1, arr.length));
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
