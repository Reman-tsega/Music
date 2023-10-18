import React, { useState, useEffect } from "react";
import MusicForm from "./MusicForm";
import firebaseDb from "../firebase";

const Musics = () => {
  const [data, setData] = useState({});
  const [currentId, setCurrentId] = useState("");

  useEffect(() => {
    firebaseDb.child("musics").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({
          ...snapshot.val(),
        });
      } else {
        setData({});
      }
    });
  }, []);

  const addOrEdit = (obj) => {
    if (currentId === "") {
      firebaseDb.child("musics").push(obj, (err) => {
        if (err) {
          console.log(err);
        } else {
          setCurrentId("");
        }
      });
    } else {
      firebaseDb.child(`musics/${currentId}`).set(obj, (err) => {
        if (err) {
          console.log(err);
        } else {
          setCurrentId("");
        }
      });
    }
  };

  const onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this record ?")) {
      firebaseDb.child(`musics/${id}`).remove((err) => {
        if (err) {
          console.log(err);
        } else {
          setCurrentId("");
        }
      });
    }
  };

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">Music Register</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <MusicForm
            addOrEdit={addOrEdit}
            data={data}
            currentId={currentId}
          />
        </div>
        <div className="col-md-7">
          <table className="table table-borderless table-stripped">
            <thead className="thread-light">
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Description</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(data).map((id) => {
                return (
                  <tr key={id}>
                    <td>{data[id].title}</td>
                    <td>{data[id].author}</td>
                    <td>{data[id].descrtiption}</td>
                    <td>{data[id].coverImg}</td>
                    <td>
                      <a
                        className="btn text-primary"
                        onClick={() => setCurrentId(id)}
                      >
                        <i className="fas fa-pencil-alt" />
                      </a>
                      <a
                        className="btn text-danger"
                        onClick={() => onDelete(id)}
                      >
                        <i className="fas fa-trash-alt" />
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Musics;
