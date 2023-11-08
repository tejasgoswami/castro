import { USER } from "./constants";

export const userDetails = (data) => {
  return {
    type: USER,
    data,
  };
};
