import {
    listResultItems,
  } from "../models/search.models.mjs";
   
  export const listResults = (req, res) => {
    try {
      const resp = listResultItems();
      res.status(200).json(resp);
    } catch (err) {
      res.status(500).send(err);
    }
  };
  