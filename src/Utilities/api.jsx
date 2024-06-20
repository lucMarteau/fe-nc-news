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
      return response.data.article;
    });
};
export const getArticleComments = (article_id) => {
  return axios
  .get(`https://be-nc-news-4mam.onrender.com/api/articles/${article_id}/comments`)
  .then((response) => {

    return response.data.commentData
  })
}
export const patchArticleVotes = (article_id, incrementVote) => {
  return axios
    .patch(`https://be-nc-news-4mam.onrender.com/api/articles/${article_id}`, { inc_votes: incrementVote })
    .then((response) => {
      return response.data;
    });
};

export const postArticleComment = (article_id, commentData) => {

  return axios
  .post(`https://be-nc-news-4mam.onrender.com/api/articles/${article_id}/comments`, {username: "grumpy19", body: commentData })
  .then((response) => {
    return response.data.commentData
  })
}
export const deleteArticleComment = ( comment_id ) => {
  return axios.delete(`https://be-nc-news-4mam.onrender.com/api/comments/${comment_id}`)
}