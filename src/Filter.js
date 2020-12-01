const Filter = () => {
  const filterByYear = () => {};

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event)
    }
    
  return (
    <form onSubmit={(event)=> {handleSubmit(event)}}>
      <input id='mass' value='mass' type='checkbox' name='mass'></input>
      <label for='mass'>Mass</label>
      <input
        onClick={() => {
          filterByYear();
        }}
        id='year'
        value='year'
        type='checkbox'
        name='year'
      ></input>
          <label for='year'>Year</label>
          <button>Submit</button>
    </form>
  );
};

export default Filter;
