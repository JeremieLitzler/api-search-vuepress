import db from "../../databases/iamjeremie.me.index.mjs";

export const listResultItems = () => {
  try {
    return db;
  } catch (err) {
    console.log("Error", err);
  }
};
