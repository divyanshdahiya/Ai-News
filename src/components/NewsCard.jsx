import React from "react";
import "../index.css";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  CardActions,
  Button,
} from "@material-ui/core";

const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  i,
}) => {
  console.log(i);
  return (
    <Card sx={{ maxWidth: 345 }} style={{ cursor: "default" }}>
      <CardActionArea clasName="card" style={{ cursor: "default" }}>
        <CardMedia
          style={{ cursor: "default" }}
          component="img"
          image={
            urlToImage ||
            "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"
          }
        />

        <CardContent style={{ cursor: "default" }}>
          <Typography gutterBottom variant="body2" component="h2">
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography gutterBottom variant="body2" component="h2">
            {source.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography variant="h5" color="textSecondary">
          {i + 1}
        </Typography>
        <Button size="small" color="primary" className="card-btn">
          <a href={url} target="blank">
            Show More
          </a>
        </Button>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
