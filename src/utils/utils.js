exports.formatData = (data) => {
  // remove recs and nametype
  return data.map((meteorite) => {
    const formatted = { ...meteorite };
    delete formatted.nametype;
    delete formatted.recclass;
    delete formatted.reclat;
    delete formatted.reclong;
    return formatted;
  });
};
