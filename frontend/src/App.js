import "./App.css";
import { useState, useEffect } from "react";
import ArticleList from "./components/ArticleList";
import Form from "./components/Form";

function App() {
  const [articles, setArticles] = useState([]);
  const [editedArticle, setEditedArticle] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/get", {
      methods: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setArticles(resp))
      .catch((error) => console.log(error));
  }, []);

  const editArticle = (article) => {
    //console.log("1111")
    setEditedArticle(article);
  };

  const updatedData = (article) => {
    const new_article = articles.map((my_article) => {
      if (my_article.id === article.id) {
        return article;
      } else {
        return my_article;
      }
    });
    setArticles(new_article);
  };

  const openForm = () => {
    setEditedArticle({ title: "", body: "" });
  };

  const insertArticle = (article)=>{
    const new_articles = [...articles,article]
    setArticles(new_articles)
  }

  return (
    <div className="App">
      <div className="row">
        <div className="col">
          <h1>Flask and ReactJS</h1>
        </div>

        <div className="col">
          <button className="btn btn-success" onClick={openForm}>
            Insert Article
          </button>
        </div>
      </div>

      <ArticleList articles={articles} editArticle={editArticle} />
      {editedArticle ? (
        <Form article={editedArticle} updatedData={updatedData} insertArticle={insertArticle}/>
      ) : null}
    </div>
  );
}

export default App;
