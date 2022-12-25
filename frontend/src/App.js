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

  const articleForm = () => {
    setEditArticle({ title: "", description: "" })
  }

  const insertedInformation = (article) => {
    const new_articles = [...articles, article]
    setArticles(new_articles)
  }

  const deleteBtn = (article) => {
    const new_article = articles.filter((myarticle) => {
      if (myarticle.id === article.id) {
        return false
      }

      return true
    })
    setArticles(new_article)
  }

  const updatedInformation = (article) => {
    const new_article = articles.map((myarticle) => {
      if (myarticle.id === article.id) {
        return article
      } else {
        return myarticle
      }
    })
    setArticles(new_article)
  }

  return (
    <div className="App">
      <NavBar />
      <br />
      <div className="row">
        <div className="col">
          <button className="btn btn-primary" onClick={articleForm}>
            Create Post
          </button>
        </div>
      </div>
      <br />
      <ArticleList articles={articles} editBtn={editBtn} deleteBtn={deleteBtn} />
      <Form
        article={editArticle}
        updatedInformation={updatedInformation}
        insertedInformation={insertedInformation}
      />
    </div>
  )
}

export default App
