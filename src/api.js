import { formatData } from "./utils/utils";

export const getData = (toFilterBy = false) => {
  let string = "https://data.nasa.gov/resource/gh4g-9sfh.json?$limit=25";
  if (toFilterBy) {
    string += `&$order=${toFilterBy} desc`;
  }

  return fetch(string)
    .then((res) => res.json())
    .then((data) => {
      return formatData(data);
    });
};
