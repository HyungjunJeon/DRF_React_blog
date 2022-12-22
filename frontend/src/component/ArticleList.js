import React from "react"

const ArticleList = (props) => {
  return (
    <div>
      {props.articles &&
        props.articles.map((article) => {
          return (
            <div key={article.id}>
              <h1>{article.title}</h1>
              <p>{article.description}</p>
              <div className="row">
                <div className="col-md-1">
                  <button className="btn btn-primary">Update</button>
                </div>
                <div className="col-md-1">
                  <button className="btn btn-danger">Delete</button>
                </div>
              </div>
              <hr className="postline" />
            </div>
          )
        })}
    </div>
  )
}

export default ArticleList
