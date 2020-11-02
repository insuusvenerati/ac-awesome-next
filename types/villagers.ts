export enum Hobbies {
  "Education",
  "Fashion",
  "Fitness",
  "Music",
  "Nature",
  "Play",
}

export enum Species {
  "Alligator",
  "Anteater",
  "Bear",
  "Bird",
  "Bull",
  "Cat",
  "Chicken",
  "Cow",
  "Cub",
  "Deer",
  "Dog",
  "Duck",
  "Eagle",
  "Elephant",
  "Frog",
  "Goat",
  "Gorilla",
  "Hamster",
  "Hippo",
  "Horse",
  "Kangaroo",
  "Koala",
  "Lion",
  "Monkey",
  "Mouse",
  "Octopus",
  "Ostrich",
  "Penguin",
  "Pig",
  "Rabbit",
  "Rhino",
  "Sheep",
  "Squirrel",
  "Tiger",
  "Wolf",
}

export interface Villager {
  id: number;
  "file-name": string;
  name: {
    "name-USen": "Cyrano";
    "name-EUen": "Cyrano";
    "name-EUde": "Theo";
    "name-EUes": "Cirano";
    "name-USes": "Cirano";
    "name-EUfr": "Cyrano";
    "name-USfr": "Cyrano";
    "name-EUit": "Cirano";
    "name-EUnl": "Cyrano";
    "name-CNzh": "阳明";
    "name-TWzh": "陽明";
    "name-JPja": "さくらじま";
    "name-KRko": "사지마";
    "name-EUru": "Сирано";
  };
  personality: string;
  "birthday-string": string;
  birthday: string;
  species: Species;
  gender: "Male" | "Female";
  subtype: string;
  hobby: Hobbies;
  "catch-phrase": string;
  icon_uri: string;
  image_uri: string;
  "bubble-color": string;
  "text-color": string;
  saying: string;
  "catch-translations": {
    "catch-USen": "ah-CHOO";
    "catch-EUen": "ah-CHOO";
    "catch-EUde": "schneuf";
    "catch-EUes": "achús";
    "catch-USes": "achús";
    "catch-EUfr": "ATCHOUM";
    "catch-USfr": "ATCHOUM";
    "catch-EUit": "ett-CCIÙ";
    "catch-EUnl": "ha-TSJOE";
    "catch-CNzh": "有的";
    "catch-TWzh": "有的";
    "catch-JPja": "でごわす";
    "catch-KRko": "임돠";
    "catch-EUru": "апчхи";
  };
}
