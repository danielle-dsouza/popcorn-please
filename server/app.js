import express from "express";
import fetch from "node-fetch";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import * as fs from "fs";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const base_url = `http://www.omdbapi.com/?t=`;
const api_key = `apikey=${process.env.API_KEY}`;

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, "build/")));

app.get("/data", async (request, response) => {
  // Typeahead Array
  try {
    fs.readFile("titles.txt", (err, data) => {
      if (err) throw err;
      const titles = data.toString().split("\n");
      response.json(titles);
    });
  } catch (err) {
    null;
  }
});

app.get("/search/:query", async (request, response) => {
  try {
    const queryParams = request.params.query;
    const query = queryParams.replace(/\s/g, "+");
    const api_url = `${base_url}${query}&${api_key}`;
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    response.json(json);
  } catch (err) {
    null;
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
