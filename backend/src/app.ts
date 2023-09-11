import express , {Express} from "express";
import cors from "cors"
import errorMidleware from "./middlewares/error";
import * as router from "./router";

const app : Express = express();

app.use(express.json());
app.use(cors());
app.use(errorMidleware);
app.use("/search", router.search);

export default app;