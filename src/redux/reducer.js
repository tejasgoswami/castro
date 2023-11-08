import { USER,AIRDROP } from "./constants";

export const userData = (data = [], action) => {
  const userData = localStorage.getItem('userDetails')
  ? JSON.parse(localStorage.getItem('userDetails'))
  : data.length ? data : null;
  switch (action.type) {
    case USER:
      return { ...action};

    default:
      return {data : userData};
  }
};
