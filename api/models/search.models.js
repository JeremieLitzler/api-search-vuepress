import db from "../../databases/iamjeremie.me.index.js";

export const listResultItems = () => {
  try {
    return db;
  } catch (err) {
    console.log("Error", err);
  }
};
