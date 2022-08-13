const callToApi = () => {
  return fetch("https://api.tvmaze.com/search/shows?q=paranormal")
    .then((response) => response.json())
    .then((response) => {
      const result = {
        name: response.name,
        score: response.score,
      };
      return result; //este return está dentro del then
    });
};

export default callToApi;
