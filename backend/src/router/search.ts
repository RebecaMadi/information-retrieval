import { Router } from "express";
import { searchController } from "../controllers";

const search = Router();

search.get("/", searchController.findByQuery);

export default search;