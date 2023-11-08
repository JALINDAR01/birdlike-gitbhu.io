import { createStore } from "redux";
import birdReducer from "./Reducer/birdReducer";
const store = createStore(birdReducer);

export default store;