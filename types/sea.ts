export interface Sea {
  id: number;
  "file-name": string;
  name: {
    "name-USen": string;
    "name-EUen": string;
    "name-EUnl": string;
    "name-EUde": string;
    "name-EUes": string;
    "name-USes": string;
    "name-EUfr": string;
    "name-USfr": string;
    "name-EUit": string;
    "name-CNzh": string;
    "name-TWzh": string;
    "name-JPja": string;
    "name-KRko": string;
    "name-EUru": string;
  };
  availability: {
    "month-northern": string;
    "month-southern": string;
    time: string;
    isAllDay: boolean;
    isAllYear: boolean;
    "month-array-northern": Array<number>;
    "month-array-southern": Array<number>;
    "time-array": Array<number>;
  };
  speed: string;
  shadow: string;
  price: number;
  "catch-phrase": string;
  image_uri: string;
  icon_uri: string;
  "museum-phrase": string;
}
