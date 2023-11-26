import { React, useState, useEffect } from "react";
import APIService from "./APIService";

function Form(props) {
  const [title, setTitle] = useState(props.article.title);
  const [body, setBody] = useState(props.article.body);

  useEffect(() => {
    setTitle(props.article.title);
    setBody(props.article.body);
  }, [props.article]);

  const updateArticle = () => {
    APIService.UpdateArticle(props.article.id, { title, body })
      .then((resp) => props.updatedData(resp))
      .catch((error) => console.log(error));
  };

  const insertArticle = () => {
    APIService.InsertArticle({ title, body })
      .then((resp) => props.insertArticle(resp))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {props.article ? (
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>

          <input
            id="title"
            type="text"
            className="form-control"
            value={title}
            placeholder="Please enter title"
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="body" className="form-label">
            Description
          </label>

          <textarea
            id="body"
            rows="5"
            className="form-control"
            value={body}
            placeholder="Please enter description"
            onChange={(e) => setBody(e.target.value)}
          />

          {props.article.id ? (
            <button className="btn btn-success mt-3" onClick={updateArticle}>
              Update
            </button>
          ) : (
            <button className="btn btn-success mt-3" onClick={insertArticle}>
              Insert
            </button>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default Form;
