import { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards";
import "./index.css";
import NewsLogo from "./news-logo.png";

function App() {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: process.env.React_App_ALAN_KEY,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
        }
      },
    });
    console.log(
      process.env.React_App_ALAN_KEY + "this is the keyyyyyyyyyyyyyyyyyyyyyy"
    );
  }, []);

  return (
    <div className="app">
      <div className="app-header">
        <div className="header-text">
          <h2>AI News App </h2>
          <p>Let the AI give the news to you </p>
        </div>
        <img className="news-logo" src={NewsLogo} alt="new logo" />
      </div>

      <NewsCards articles={newsArticles} />
    </div>
  );
}

export default App;
