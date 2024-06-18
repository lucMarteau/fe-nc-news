import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import "./ArticleCard.css";

const ArticleCard = ({ article }) => {
  return (
    <Card sx={{ maxWidth: 345, marginBottom: 2 }} className="item-card">
      <CardMedia
        sx={{ height: 140 }}
        image={
          article.article_img_url || "/static/images/cards/default-image.jpg"
        }
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
        <Typography
          variant="body2"
          color="text.secondary"
          className="author-text"
        >
          The Author: {article.author}
        </Typography>
      </CardContent>
      <CardActions className="item-buttons">
        <Button
          size="small"
          component={Link}
          to={`/articles/${article.article_id}`}
        >
          See full article
        </Button>
      </CardActions>
    </Card>
  );
};

export default ArticleCard;
