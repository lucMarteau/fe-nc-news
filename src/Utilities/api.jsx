import axios from "axios";

export const getArticles = () => {
  return axios
    .get("https://be-nc-news-4mam.onrender.com/api/articles")
    .then((response) => {
      return response.data.articleData;
    });
};
export const getArticlesById = (article_id) => {
  return axios
    .get(`https://be-nc-news-4mam.onrender.com/api/articles/${article_id}`)
    .then((response) => {
      console.log(response);
      return response.data.article;
    });
};
