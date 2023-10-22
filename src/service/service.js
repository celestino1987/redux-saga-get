async function geatData() {
    const response = await fetch("https://rickandmortyapi.com/api/character/?page=2");
    const data = await response.json();
   return data
  }
export default geatData