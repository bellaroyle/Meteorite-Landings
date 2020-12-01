import { formatData } from "./utils/utils";

export const getData = (mass = false, year = false) => {
  
  let string = 'https://data.nasa.gov/resource/gh4g-9sfh.json?$limit=10';
  if (mass) string += "&$order=mass desc"
  //if (year) string += "&$order=year desc"
  return fetch(string)
    .then((res) => res.json())
    .then((data) => {
      return formatData(data);
    });
};
