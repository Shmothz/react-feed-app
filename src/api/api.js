import axios from 'axios';

const instance = axios.create({
  baseURL: "https://newsapi.org/v2/",
})

const API_KEY = '5e7dc4bb93244b698cca91d69ac8aabd' // пока что не уверен, что надо так

export const newsAPI = {
  getNews (country, pageSize) {
    const params = new URLSearchParams({
      apiKey: API_KEY,
      country,
      pageSize
    })
    return  instance.get(`/top-headlines?${params.toString()}`)
  },
  getFilterNews (country, pageSize, q) {
    const params = new URLSearchParams({
      apiKey: API_KEY,
      country,
      pageSize,
      q
    })
    return  instance.get(`/top-headlines?${params.toString()}`)
  }
}