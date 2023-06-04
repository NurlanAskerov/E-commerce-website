const fetchApi = (params) => {
    const BASE_URL='https://fakestoreapi.com'
    console.log(`${BASE_URL}`)
  return (
    fetch(`${BASE_URL+params}`)
    .then(res=>res.json())
  )
}

export default fetchApi