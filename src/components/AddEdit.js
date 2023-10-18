import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { isEmpty } from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { addMusicStart, editMusicStart } from "../redux/actions";

const AddEdit = () => {
  const values = {
    title: "",
    author: "",
    description: "",
    coverImg: "",
  };
  const [initialState, setState] = useState(values);
  const [error, setError] = useState("");
  // const [data, setData] = useState({});

  const { musics: data } = useSelector((state) => state.data);

  //   console.log("currentId", currentId);

  const dispatch = useDispatch();

  const { title, author, description, coverImg } = initialState;

  const currentId = useParams();
  const history = useHistory();

  const { id } = currentId;

  console.log("currentId", currentId);

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
  // }, [id]);

  useEffect(() => {
    if (isEmpty(id)) {
      console.log("initialState", initialState);
      setState({ ...values });
    } else {
      setState({ ...data[id] });
    }
  }, [id,data]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({
      ...initialState,
      [name]: value,
    });
  };

  const handleSubmit = (e, obj) => {
    e.preventDefault();
    console.log("initialState", initialState);
    if (
      isEmpty(title) ||
      isEmpty(description) ||
      isEmpty(author) ||
      isEmpty(coverImg)
    ) {
      setError("Please fill all input field");
    } else if (isEmpty(id)) {
      dispatch(addMusicStart(initialState));
      setError("");
      history.push("/");
    } else {
      dispatch(editMusicStart({ initialState, id }));
      setError("");
      history.push("/");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          {error && <div style={{ color: "red" }}>{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="bmd-label-floating">Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="bmd-label-floating">Author</label>
              <input
                type="text"
                className="form-control"
                name="author"
                value={author}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="bmd-label-floating">Description</label>
              <input
                type="description"
                className="form-control"
                name="description"
                value={description}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="bmd-label-floating">coverImg</label>
              <input
                type="text"
                className="form-control"
                name="coverImg"
                value={coverImg}
                onChange={handleInputChange}
              />
            </div>
            <button className="btn btn-default">Cancel</button>
            <button type="submit" className="btn btn-success btn-raised">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEdit;
