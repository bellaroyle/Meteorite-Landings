import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = (props) => {
  const coordinates = props.data.map((props) => {
    if (props.geolocation) {
      const position = [
        props.geolocation.latitude,
        props.geolocation.longitude,
      ];
      return position;
    } else return null;
  });

  return (
    <MapContainer center={[51.505, -0.09]} zoom={1} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {coordinates.map((position, index) => {
        return position ? (
          <Marker position={position} key={props.data.id}>
            <Popup>
              <h3>{props.data[index].name}</h3>
              <p>
                Mass: {props.data[index].mass} grams <br></br> Year it{' '}
                {props.data[index].fall.toLowerCase()}: {props.data[index].year}{' '}
                <br></br>
                Class: {props.data[index].recclass}
              </p>
            </Popup>
          </Marker>
        ) : (
          ''
        );
      })}
    </MapContainer>
  );
};

export default Map;
