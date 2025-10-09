const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send({ data: "server Running" });
});
import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

main();


app.listen(port),
  () => {
    console.log("server running on port");
  };
