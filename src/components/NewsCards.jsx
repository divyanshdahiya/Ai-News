import React from "react";
import NewsCard from "./NewsCard";
import "../index.css";
import { Grid, Grow, Typography } from "@material-ui/core";

const NewsCards = ({ articles }) => {
  console.log(articles);

  const infoCards = [
    {
      color: "#00000040",
      title: "Latest News",
      text: "Give me the latest news",
    },
    {
      color: "#00000040",
      title: "News by Sources",
      info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
      text: "News by CNN",
    },
    {
      color: "#00000040",
      title: "News by Categories",
      info: "Business, Entertainment, General, Health, Science, Sports, Technology",
      text: "Give me the latest Technology news",
    },
    {
      color: "#00000040",
      title: "News by Terms",
      info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
      text: "What's up with PlayStation 5",
    },
  ];

  if (!articles.length) {
    return (
      <div>
        <h3>Find news by -</h3>
        <Grow in>
          <Grid
            container
            alignItems="stretch"
            spacing={3}
            className="intro-cards"
          >
            {infoCards.map((infoCard) => (
              <Grid item xs={12} sm={6} md={4} lg={3} className="intro-cards">
                <div
                  style={{ backgroundColor: infoCard.color }}
                  className="intro-cards"
                >
                  <Typography
                    variant="h5"
                    component="h5"
                    className="info-card-text"
                  >
                    {infoCard.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h6"
                    className="info-card-text"
                  >
                    Try saying: <br /> <i>{infoCard.text}</i>
                  </Typography>
                  {infoCard.info ? (
                    <Typography
                      variant="h6"
                      component="h6"
                      className="info-card-text"
                    >
                      <strong>{infoCard.title.split(" ")[2]}</strong>: <br />
                      {infoCard.info}
                    </Typography>
                  ) : null}
                </div>
              </Grid>
            ))}
          </Grid>
        </Grow>
      </div>
    );
  }

  return (
    <div className="news-cards">
      <Grow in>
        <Grid container alignItems="stretch" spacing={3}>
          {articles.map((article, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <NewsCard article={article} i={i} />
            </Grid>
          ))}
        </Grid>
      </Grow>
    </div>
  );
};

export default NewsCards;
