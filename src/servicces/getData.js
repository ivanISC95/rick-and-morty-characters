export default function getData({keyword}){
    const URL_DATA = `https://rickandmortyapi.com/api/character/?page=${keyword}`;
    return fetch(URL_DATA)
    .then(res => res.json())
    .then(response => {
        return response.results;                  
    })
}
