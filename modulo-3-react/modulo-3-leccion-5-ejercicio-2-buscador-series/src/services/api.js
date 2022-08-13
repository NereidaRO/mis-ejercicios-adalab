const callToApi = (searchName) => {
  return fetch(`https://api.tvmaze.com/search/shows?q=${searchName}`)
    .then((response) => response.json())
    .then((response) => {
      const result = response.results.map((film) => {
        return {
          name: film.name,
          score: film.score,
        };
      });
      return result; //return de dentro del then
    });
};

export default callToApi;
