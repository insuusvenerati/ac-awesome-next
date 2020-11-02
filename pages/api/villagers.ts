const fetch = require("isomorphic-unfetch");
const data = require("../../acnhapi/v1a/villagers.json");
import { NextApiRequest, NextApiResponse } from "next";

export default async function getAllVillagers(req: NextApiRequest, res: NextApiResponse) {
  try {
    // const limit = parseInt(req.query.limit as string);
    // const skip = parseInt(req.query.skip as string);

    // const response = await fetch("../../acnhapi/v1a/villagers.json");
    // console.log(response);
    // const data = await response.json();
    // console.log(data);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
}
