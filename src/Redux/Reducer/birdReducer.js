import { ADDBIRD, DELETEBIRD, LIKEBIRD } from "../Action/actions";

const initial = [];

const birdReducer = (state = initial, action) => {
  if (action.type === ADDBIRD) {
    return [...state, action.payLoad];
  } else if (action.type === LIKEBIRD) {
    let newArr = JSON.stringify(state);
    newArr = JSON.parse(newArr);

    newArr.forEach((val) => {
      if (val.id === Number(action.payLoad)) {
        val.likes++;
      }
    });
     
   
    return newArr;
  } else if (action.type === DELETEBIRD) {
    return state.filter((val) => Number(action.payLoad) !== val.id);
  }
  return state;
};

export default birdReducer;
