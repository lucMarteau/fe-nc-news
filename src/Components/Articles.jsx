import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { getArticles } from "../Utilities/api";
import { useEffect, useState } from "react";
import "./Article.css"

export function Articles() {
  const [articles, SetArticles] = useState([])

  useEffect(() => {
    getArticles().then((response) => {
      SetArticles(response)

    })
  }, [])

  return (
    <div>
      {articles.map((article) => (
        <li key={article.article_id}>
        <Card sx={{ maxWidth: 345, marginBottom: 2 }} key={article.id} className="item-card">
          <CardMedia
            sx={{ height: 140 }}
            image={article.article_img_url || "/static/images/cards/default-image.jpg"}
            title={article.title}
          />
          <CardContent>
            <div>
            <Typography gutterBottom variant="h5" component="div">
              {article.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Topic: {article.topic}
            </Typography>
            </div>
            <Typography variant="body2" color="text.secondary" className="author-text">
              The Author: {article.author}
            </Typography>
          </CardContent>
          <CardActions className="item-buttons">

            <Button size="small">See full article</Button>
          </CardActions>
        </Card>
        </li>
      ))}
    </div>
  );
}
