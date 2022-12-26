import React, { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import APIService from "./APIService"

const Form = (props) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [token] = useCookies(["mytoken"])

  useEffect(() => {
    setTitle(props.article.title)
    setDescription(props.article.description)
  }, [props.article])

  const updateArticle = () => {
    APIService.UpdateArticle(props.article.id, { title, description }, token["mytoken"]).then(
      (resp) => props.updatedInformation(resp)
    )
    setTitle("")
    setDescription("")
  }

  const insertArticle = () => {
    APIService.InsertArticle({ title, description }, token["mytoken"]).then((resp) =>
      props.insertedInformation(resp)
    )
    setTitle("")
    setDescription("")
  }

  return (
    <div>
      {props.article ? (
        <div>
          <div className="col-md-7">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  value={title}
                  className="form-control"
                  placeholder="Enter Post Title"
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="description">Description</label>
                <textarea
                  className="form-control"
                  value={description}
                  placeholder="Enter Post Description"
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                />
              </div>
            </div>
            <br />
            {props.article.id ? (
              <button onClick={updateArticle} className="btn btn-success">
                Update
              </button>
            ) : (
              <button onClick={insertArticle} className="btn btn-primary">
                Post
              </button>
            )}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Form
