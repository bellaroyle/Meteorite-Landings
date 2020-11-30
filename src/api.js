import { formatData } from "./utils/utils";

export const getData = () => {
  return fetch("https://data.nasa.gov/resource/gh4g-9sfh.json")
    .then((res) => res.json())
    .then((data) => {
      return formatData(data);
    });
};
