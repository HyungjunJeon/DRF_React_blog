import "./App.css"
import ArticleList from "./component/ArticleList"
import { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.css"
import NavBar from "./component/NavBar"

const App = () => {
  const [articles, setArticles] = useState([])

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

  return (
    <div className="App">
      <NavBar />
      <br />
      <ArticleList articles={articles} />
    </div>
  )
}

export default App
