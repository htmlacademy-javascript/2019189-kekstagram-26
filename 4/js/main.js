const ID = [];
const URL = [];
const DESCRIPTION = ['описание один','описание два','описание три','описание четыре','описание пять'];

const MESSAGE = [
'Всё отлично!',
'В целом всё неплохо. Но не всё.',
'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
	]
const NAME = ['Артём','Антон','Стас','Никита','Максим','Саша','Дима']

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};

for (let i = 0; i < 25; i++) { // создаём массив ID
  ID[i] = i + 1;
}
for (let i = 0; i < 25; i++) { // создаём массив URL (для фоток)
  URL[i] = i + 1;
}

// делаем описание к фотке
const createObjectDop = () => {
  // делаем уникальность для комментария, склеиваем два разных сообщения
  for (let i = 0; i < MESSAGE.length - 1; i++) {
    randomMessageFirst = getRandomArrayElement(MESSAGE);
    randomMessageSecond = getRandomArrayElement(MESSAGE);
    if (randomMessageFirst != randomMessageSecond) {
      randomMessage = randomMessageFirst + ' ' + randomMessageSecond;   
      }
    }
  
  return {
    comment_id: getRandomPositiveInteger(1, 1000),        
    comment_avatar: 'img/avatar-' + getRandomPositiveInteger(1, 6) + '.svg',
    comment_message: randomMessage,
    comment_name: getRandomArrayElement(NAME),
  };
};
const oneObjectDop = Array.from({length: 1}, createObjectDop);

// создаём объект и добавляем к нему описание
const createObject = () => {
  
  return {
    id: getRandomArrayElement(ID),
    url: 'photos/' + getRandomArrayElement(URL) + '.jpg',
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomPositiveInteger(15, 200),
    fotoDescription: oneObjectDop, // + описание к фото
  };
};


const oneObject = Array.from({length: 1}, createObject); // пока что "1" для теста
console.log(oneObject);
