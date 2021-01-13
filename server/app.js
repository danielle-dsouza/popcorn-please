import express from "express";
import fetch from "node-fetch";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const base_url = `http://www.omdbapi.com/?t=`;
const api_key = `apikey=${process.env.API_KEY}`;

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, "build/")));

app.get("/search/:query", async (request, response) => {
  const queryParams = request.params.query;
  const query = queryParams.replace(/\s/g, "+");
  const api_url = `${base_url}${query}&${api_key}`;
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  response.json(json);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
