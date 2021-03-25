import {getRandomFloat} from './util.js';
import {getRandomElementFromArray} from './util.js';

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
};

/**
 * Функция для получения определённого количества вариантов
 *
 * @param {Number} count — число вариантов
 * @return {*} — перечисляет количество
 */
 const makeAds = (count) => {
  let ads = [];
  for (let i = 0; i < count; i++) {
    ads[i] = madeAd();
  }
  return ads;
};
