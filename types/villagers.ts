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
    "name-EUen": string;
    "name-USen": string;
    "name-EUde": string;
    "name-EUes": string;
    "name-USes": string;
    "name-EUfr": string;
    "name-USfr": string;
    "name-EUit": string;
    "name-EUnl": string;
    "name-CNzh": string;
    "name-TWzh": string;
    "name-JPja": string;
    "name-KRko": string;
    "name-EUru": string;
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
    "catch-USen": string;
    "catch-EUen": string;
    "catch-EUde": string;
    "catch-EUes": string;
    "catch-USes": string;
    "catch-EUfr": string;
    "catch-USfr": string;
    "catch-EUit": string;
    "catch-EUnl": string;
    "catch-CNzh": string;
    "catch-TWzh": string;
    "catch-JPja": string;
    "catch-KRko": string;
    "catch-EUru": string;
  };
}
