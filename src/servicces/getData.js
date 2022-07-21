export default function getData(){
    const URL_DATA = 'https://rickandmortyapi.com/api/character';
    return fetch(URL_DATA)
    .then(res => res.json())
    .then(response => {
        return response.results;                  
    })
}