import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import openaiRouter from "./routes/openairoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

config();
const app = express();


// Middlewares
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));


// Logging - remove in production
app.use(morgan("dev"));

// Routes
app.use("/api/v1", appRouter);
app.use("/api/v1/openai", openaiRouter);

export default app;
