import "dotenv/config.js";
import Express from "express"
import { connectDataBase } from "./db/config.js";

const app = Express()
connectDataBase();
console.log(process.env, "DB_HOST");


app.listen(3000, () =>console.log("Server Is Running on Port 3000"));