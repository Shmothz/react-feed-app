import axios from 'axios';

const instance = axios.create({
  baseURL: "https://newsapi.org/v2/",
})

const apiKey = '5e7dc4bb93244b698cca91d69ac8aabd' // пока что не уверен, что надо так

export const newsAPI = {
  getNews (country, pageSize) {
    const params = new URLSearchParams({
      apiKey,
      country,
      pageSize
    })
    return  instance.get(`/top-headlines?${params.toString()}`)
  },
  getFilterNews (country, pageSize, q) {
    const params = new URLSearchParams({
      apiKey,
      country,
      pageSize,
      q
    })
    return  instance.get(`/top-headlines?${params.toString()}`)
  }
}