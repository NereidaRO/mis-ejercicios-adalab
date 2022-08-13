// Fichero src/services/api.js
const callToApi = (searchName) => {
  // Recibimos por parámetros searchName, que nos lo pasan desde App dentro del useEffect
  // Llamamos al fetch interpolando la URL de la API más el nombre buscado
  return fetch(`https://swapi.dev/api/people/?search=${searchName}`)
    .then((response) => response.json())
    .then((response) => {
      // La respuesta del API es un objeto que dentro tiene la propiedad results que es un array
      // Recorremos el array results obteniendo solo el nombre
      // Esto lo hacemos para limpiar la respuesta de la API antes de devolverla al componente App
      // Esto es opcional pero recomendado
      const result = response.results.map((character) => {
        return {
          name: character.name,
        };
      });
      // Retornamos los resultados de la API al componente App
      return result;
    });
};

export default callToApi;
