import "./App.css"
import ArticleList from "./component/ArticleList"
import { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.css"
import NavBar from "./component/NavBar"
import Form from "./component/Form"

const App = () => {
  const [articles, setArticles] = useState([])
  const [editArticle, setEditArticle] = useState("")

  useEffect(() => {
    fetch("http://localhost:8000/api/articles/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "f10a9ac5e2d8a17ae11d1281991c93b30502b281",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setArticles(resp))
      .catch((error) => console.log(error))
  })

  const editBtn = (article) => {
    setEditArticle(article)
  }

  return (
    <div className="App">
      <NavBar />
      <br />
      <div className="row">
        <div className="col">
          <button className="btn btn-primary">Create Post</button>
        </div>
      </div>
      <br />
      <ArticleList articles={articles} editBtn={editBtn} />
      <Form article={editArticle} />
    </div>
  )
}

export default App
