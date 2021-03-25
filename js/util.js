/**
 * Получение случайного числа в задонном интервале
 *
 * @param {Number} min -  минимальное число
 * @param {Number} max - максимальное число
 * @return {Number} - Псевдослучайное число с плавающей запятой от 0 (включительно) до 1 (не считая).
 */
const getRandomFloat = (min, max) => {
  return Math.random() * (max - min) + min;
};

/**
 * Функция для получение случайного элемента из массива
 *
 * @param {Array} arr — исходный массив
 * @return {*} — случайный элемент
 */
const getRandomElementFromArray = (arr) => {
  const randomIndex = getRandom(0, arr.length);
  return arr[randomIndex];
};

/**
 * Функция для получение случайного числа
 *
 * @param {Number} min -  минимальное число
 * @param {Number} max - максимальное число
 * @return {*} — случайное число
 */
const getRandom = (min, max) => {
  // получить случайное число от (min-0.5) до (max+0.5)
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

/**
 * Функция для перемешивание элементов в случайном порядке.
 *
 * @param {Array} arr — исходный массив
 */
const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
};

/**
 * Функция для получение случайного элемента
 *
 * @param {Array} arr — исходный массив
 * @return {*} — случайный элемент
 */
const getRandomArrayFromAnother = (arr) => {
  shuffle(arr)
  return arr.splice(1, getRandom(1, arr.length));
};


