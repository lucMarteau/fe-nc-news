import { useEffect, useState } from "react"
import { getArticleComments, getArticlesById } from "../Utilities/api"
import { useParams } from "react-router-dom"
import "./ArticlePage.css"
import CommentCard from "./CommentCard"



export function ArticlePage() {
  const [article, setArticle] = useState([])
  const [comments, setComments] = useState([])
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

  useEffect(() => {
    if (article) {
      getArticleComments(article.article_id)
        .then((comments) => {
          setComments(comments);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  }, [article]);

  if (loading) return <p>...loading</p>;
  if (error) return <p>...error: {error}</p>;

  return (
    <>
      <div>
        <h2>{article.title}</h2>
        <img className="article-image" src={article.article_img_url} alt={article.title} />
        <p className="article-body">{article.body}</p>
        <button>Leave a comment</button>
        <h3>User comments:</h3>
        <ul>
          {comments.map((comment) => (
            <li key={comment.comment_id}>
              <CommentCard comment={comment} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
} 