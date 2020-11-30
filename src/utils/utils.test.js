const { formatData } = require('./utils');

describe('formatData', () => {
  it('returns an array of formatted objects with required properties', () => {
    const data = [
      {
        name: 'Aachen',
        id: '1',
        nametype: 'Valid',
        recclass: 'L5',
        mass: '21',
        fall: 'Fell',
        year: '1880-01-01T00:00:00.000',
        reclat: '50.775000',
        reclong: '6.083330',
        geolocation: {
          latitude: '50.775',
          longitude: '6.08333',
        },
      },
      {
        name: 'Aarhus',
        id: '2',
        nametype: 'Valid',
        recclass: 'H6',
        mass: '720',
        fall: 'Fell',
        year: '1951-01-01T00:00:00.000',
        reclat: '56.183330',
        reclong: '10.233330',
        geolocation: {
          latitude: '56.18333',
          longitude: '10.23333',
        },
      },
      {
        name: 'Abee',
        id: '6',
        nametype: 'Valid',
        recclass: 'EH4',
        mass: '107000',
        fall: 'Fell',
        year: '1952-01-01T00:00:00.000',
        reclat: '54.216670',
        reclong: '-113.000000',
        geolocation: {
          latitude: '54.21667',
          longitude: '-113.0',
        },
      },
    ];
    const requiredKeys = ['name', 'id', 'mass', 'fall', 'year', 'geolocation'];
    expect(Object.keys(formatData(data)[0])).toEqual(
      expect.arrayContaining(requiredKeys)
    );
  });
  it('doesnt mutate input data ', () => {
    const data = [
      {
        name: 'Aachen',
        id: '1',
        nametype: 'Valid',
        recclass: 'L5',
        mass: '21',
        fall: 'Fell',
        year: '1880-01-01T00:00:00.000',
        reclat: '50.775000',
        reclong: '6.083330',
        geolocation: {
          latitude: '50.775',
          longitude: '6.08333',
        },
      },
      {
        name: 'Aarhus',
        id: '2',
        nametype: 'Valid',
        recclass: 'H6',
        mass: '720',
        fall: 'Fell',
        year: '1951-01-01T00:00:00.000',
        reclat: '56.183330',
        reclong: '10.233330',
        geolocation: {
          latitude: '56.18333',
          longitude: '10.23333',
        },
      },
      {
        name: 'Abee',
        id: '6',
        nametype: 'Valid',
        recclass: 'EH4',
        mass: '107000',
        fall: 'Fell',
        year: '1952-01-01T00:00:00.000',
        reclat: '54.216670',
        reclong: '-113.000000',
        geolocation: {
          latitude: '54.21667',
          longitude: '-113.0',
        },
      },
    ];
    formatData(data);
    expect(data).toEqual([
      {
        name: 'Aachen',
        id: '1',
        nametype: 'Valid',
        recclass: 'L5',
        mass: '21',
        fall: 'Fell',
        year: '1880-01-01T00:00:00.000',
        reclat: '50.775000',
        reclong: '6.083330',
        geolocation: {
          latitude: '50.775',
          longitude: '6.08333',
        },
      },
      {
        name: 'Aarhus',
        id: '2',
        nametype: 'Valid',
        recclass: 'H6',
        mass: '720',
        fall: 'Fell',
        year: '1951-01-01T00:00:00.000',
        reclat: '56.183330',
        reclong: '10.233330',
        geolocation: {
          latitude: '56.18333',
          longitude: '10.23333',
        },
      },
      {
        name: 'Abee',
        id: '6',
        nametype: 'Valid',
        recclass: 'EH4',
        mass: '107000',
        fall: 'Fell',
        year: '1952-01-01T00:00:00.000',
        reclat: '54.216670',
        reclong: '-113.000000',
        geolocation: {
          latitude: '54.21667',
          longitude: '-113.0',
        },
      },
    ]);
  });
  it('formats the year into a date', () => {
    const data = [
      {
        name: 'Aguada',
        id: '398',
        nametype: 'Valid',
        recclass: 'L6',
        mass: '1620',
        fall: 'Fell',
        year: '1930-01-01T00:00:00.000',
        reclat: '-31.600000',
        reclong: '-65.233330',
        geolocation: {
          latitude: '-31.6',
          longitude: '-65.23333',
        },
      },
    ];
    expect(formatData(data)[0].year).toBe('1930');
  });
});
