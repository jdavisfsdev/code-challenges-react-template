let characters = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark'
  },
  {
    name: 'Jon A.',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn'
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister'
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen'
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell'
  },
  {
    name: 'Euron',
    spouse: null,
    children: [],
    house: 'Greyjoy'
  },
  {
    name: 'Jon S.',
    spouse: null,
    children: [],
    house: 'Snow'
  }
];

const sortByChildren = (charArray) => {
 
};

export function containsW(str) {
  let regex = /w/;
  return regex.test(str);
}

export function isNum(input) {
  let regex = /\d/;
  return regex.test(input);
}

export function containsWorld(input) {
  let regex = /(?:world)/;
  return regex.test(input);
}

export function isCapitalized(str) {
  let regex = /^[A-Z]/;
  return regex.test(str);
}

export function citiesAtoJ(arr) {
  let regex = /^[A-J]/;
  let cities = [];
  for (let i = 0; i < arr.length; i++) {
    cities.push(regex.test(arr[i]));
  }
  return cities;
}