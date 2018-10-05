const fetchAllPokemon = () => {
  return $.ajax({
    method: "GET",
    url: "api/pokemon"
  });
};

const fetchSinglePokemon = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/pokemon/${id}`
  });
};

export { fetchAllPokemon, fetchSinglePokemon };
