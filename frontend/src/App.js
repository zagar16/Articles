import "./App.css";
import { useState, useEffect } from "react";
import ArticleList from "./components/ArticleList";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/get", {
      methods: "GET",
      headers: {
        "Content-Type": "applications/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setArticles(resp))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <h1>Flask and ReactJS</h1>

      <ArticleList articles= {articles}/>
      <h1>End</h1>
    </div>
  );
}

export default App;
