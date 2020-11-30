import { formatData } from './utils/utils';

export const getData = () => {
  return fetch('https://data.nasa.gov/resource/gh4g-9sfh.json?$limit=10')
    .then((res) => res.json())
    .then((data) => {
      return formatData(data);
    });
};
