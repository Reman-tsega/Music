import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const View = () => {
  const currentId = useParams();
  const { id } = currentId;
  const { musics: data } = useSelector((state) => state.data);

  return (
    <div className="container mt-5">
      {Object.keys(data).map((userId) => {
        if (userId === id) {
          return (
            <div class="card">
              <div class="card-header lead">User Detail</div>
              <div class="card-body">
                <p class="card-text">Title: {data[id].title}</p>
                <p class="card-text">Author: {data[id].author}</p>
                <p class="card-text">description: {data[id].description}</p>
                <p class="card-text">Image : {data[id].coverImg}</p>
                <Link to="/">
                  <a className="btn btn-info">Go Back</a>
                </Link>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default View;
