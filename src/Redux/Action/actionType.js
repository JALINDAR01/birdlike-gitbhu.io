import { ADDBIRD, LIKEBIRD, DELETEBIRD } from "./actions";

export const add_bird = (data) => {
  return { type: ADDBIRD, payLoad: data };
};

export const like_bird = (data) => {
  return {
    type: LIKEBIRD,
    payLoad: data,
  };
};

export const delete_bird = (data) => {
  return {
    type: DELETEBIRD,
    payLoad: data,
  };
};
