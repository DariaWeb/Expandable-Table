const baseURL = 'https://demo6922545.mockable.io'

const get = (url) => {
  return fetch(url)
  .then (response => {
    if (response.status === 200) return response.json()
  })
  .catch(error => {
    console.error("Error in GET", error)
  })

}

export const getAssociationScores = () => {
  return get(baseURL)
}