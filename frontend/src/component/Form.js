import React, { useEffect, useState } from "react"

const Form = (props) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  useEffect(() => {
    setTitle(props.article.title)
    setDescription(props.article.description)
  }, [props.article])

  return (
    <div>
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={title}
            className="form-control"
            placeholder="Enter Post Title"
          />
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            value={description}
            placeholder="Enter Post Description"
            cols={10}
          />
        </div>
      </div>
      <br />
      <button className="btn btn-primary">Submit</button>
    </div>
  )
}

export default Form
