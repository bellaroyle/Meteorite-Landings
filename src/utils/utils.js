exports.formatData = (data) => {
  // remove recs and nametype
  return data.map((meteorite) => {
    const formatted = { ...meteorite };
    delete formatted.nametype;
    delete formatted.recclass;
    delete formatted.reclat;
    delete formatted.reclong;
    formatted.year = formatted.year ? formatted.year.slice(0, 4) : null;

    return formatted;
  });
};
