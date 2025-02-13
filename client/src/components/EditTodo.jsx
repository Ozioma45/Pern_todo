import React, { Fragment, useState } from "react";

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);

  //edit description function
  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:5000/todos/${todo.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      console.log(response);
      window.location = "/";
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <Fragment>
        <button
          type="button"
          className="btn btn-warning btn-lg "
          data-toggle="modal"
          data-target={`#id${todo.todo_id}`}>
          Edit
        </button>

        <div
          className="modal fade"
          id={`id${todo.todo_id}`}
          role="dialog"
          onClick={() => setDescription(todo.description)}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  onClick={() => setDescription(todo.description)}>
                  &times;
                </button>
                <h4 className="modal-title">Edit Todo</h4>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-warning"
                  data-dismiss="modal"
                  onClick={(e) => updateDescription(e)}>
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                  onClick={() => setDescription(todo.description)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default EditTodo;
