import Map from "./Map"


const List = (props) => {

  console.log(props.data);
  return (
    <ul>
      {props.data.map((data) => {
        return (
          <li key={data.id}>
            <h2>{data.name}</h2>
            <p>
              The {data.name} meteorite weighing {data.mass} grams,{' '}
              {data.fall === 'Fell'
                ? data.fall.toLowerCase()
                : 'was ' + data.fall.toLowerCase()}{' '}
              in the year {data.year}
            </p>
            <Map />
          </li>
        );
      })}
    </ul>
  );
};

export default List;
