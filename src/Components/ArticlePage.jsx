import { useEffect, useState } from "react"
import { getArticlesById } from "../Utilities/api"
import { useParams } from "react-router-dom"
import "./ArticlePage.css"


export function ArticlePage() {
  const [article, setArticle] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);
  const { article_id } = useParams();

  useEffect(() => {
    getArticlesById(article_id)
    .then((article) => {
      console.log("API test on individual Article")
      setArticle(article)
      setLoading(false)
    })
    .catch((error) => {
      setError(error.message);
      setLoading(false);
    });
  }, [article_id])

  if (loading) return <p>...loading</p>;
  if (error) return <p>...error: {error}</p>;

  return (
    <>
      <h2>{article.title}</h2>
      <img className="article-image" src={article.article_img_url} alt={article.title} />
      <p className="article-body">{article.body}</p>
    </>
  )
} 