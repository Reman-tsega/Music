import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// Link
import { useSelector, useDispatch } from "react-redux";
import { getMusicStart, deleteMusicStart } from "../redux/actions";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ListRecord = () => {
  // const [data, setData] = useState({});
  const { musics: data } = useSelector((state) => state.data);
  // console.log("data", data);
  // console.log("state", state);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMusicStart());
  }, []);

  // useEffect(() => {
  //   firebaseDb.child("musics").on("value", (snapshot) => {
  //     if (snapshot.val() !== null) {
  //       setData({
  //         ...snapshot.val(),
  //       });
  //     } else {
  //       setData({});
  //     }
  //   });
  // }, []);

  const onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this record ?")) {
      dispatch(deleteMusicStart(id));
      dispatch(getMusicStart());
    }
  };

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="jumbotron">
              <h1 className="display-2">music List</h1>
            </div>
            <table className="table table-bordered table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Title</th>
                  <th scope="col">Author</th>
                  <th scope="col">description</th>
                  <th scope="col">Cover img</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(data).map((id, index) => {
                  return (
                    <tr key={id}>
                      <th scope="row">{index + 1}</th>
                      <td>{data[id].title}</td>
                      <td>{data[id].author}</td>
                      <td>{data[id].description}</td>
                      <td>{data[id].coverImg}</td>
                      <td>
                        <Link to={`/update/${id}`}>
                          <p className="btn text-primary">
                            <i className="fas fa-pencil-alt" />
                          </p>
                        </Link>

                        <p
                          className="btn text-danger"
                          onClick={() => onDelete(id)}
                        >
                          <i className="fas fa-trash-alt" />
                        </p>
                        <Link to={`/view/${id}`}>
                          <p className="btn text-info">
                            <i className="fas fa-eye" />
                          </p>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListRecord;
