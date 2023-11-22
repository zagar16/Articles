import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/get", {
      'methods': "GET",
      headers: {
        "Content-Type": "applications/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setArticles(resp))
      .catch((error) => console.log(error));
  }, []);

  console.log(articles)

  return (
    <div className="App">
      <h1>Flask and ReactJS</h1>

      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
            <p>{article.date}</p>
          </div>
        );
      })}
      <h1>End</h1>
    </div>
  );
}

export default App;
