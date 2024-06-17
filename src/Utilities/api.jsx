import axios from "axios"

export const getArticles = () => {
return axios
.get("https://be-nc-news-4mam.onrender.com/api/articles")
.then((response) => {
  console.log(response)
  return response.data.articleData
})
}