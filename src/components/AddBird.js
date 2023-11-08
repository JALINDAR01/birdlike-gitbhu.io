import React from "react";
import { add_bird, like_bird, delete_bird } from "../Redux/Action/actionType";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const AddBird = () => {
  //useState to get input

  const dispatch = useDispatch();

  const birdData = useSelector((state) => state);
  // console.log(birdData);
  const [input, setInput] = useState("");
  const [birdId, setId] = useState(1);
  function handelInput(e) {
    setInput(e.target.value);
  }

  function addData() {
    input && dispatch(add_bird({ id: birdId, name: input, likes: 0 }));
    setId(birdId + 1);
    setInput("");
  }

  function likeBirdEvent(e) {
    dispatch(like_bird(e.target.id));
  }

  function deleteBirdEvent(e){
    dispatch(delete_bird(e.target.id));
  }
  return (
    <div className="AddBird">
      <input type="text" value={input} onInput={handelInput}></input>
      <button onClick={addData}>Add</button>
      <ul>
        {birdData &&
          birdData.map((val) => (
            <li key={val.id}>
              <p>{val.name}</p>
              <span>likes: {val.likes}</span>
              <button id={val.id} onClick={likeBirdEvent}>
                +
              </button>
              <button id={val.id} onClick={deleteBirdEvent}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AddBird;
