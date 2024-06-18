import { useEffect, useState } from 'react';
import { getArticles } from "../Utilities/api";
import "./Articles.css";
import ArticleCard from './ArticleCard';

export function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticles()
      .then((response) => {
        setArticles(response);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>...loading</p>;
  if (error) return <p>...error: {error}</p>;

  return (
    <div>
      <ul>
        {articles.map((article) => (
          <li key={article.article_id}>
            <ArticleCard article={article} />
          </li>
        ))}
      </ul>
    </div>
  );
}
