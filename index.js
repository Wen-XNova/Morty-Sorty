import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://rickandmortyapi.com/api/character/?";

app.use(express.static("public")); 

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data...", });
});

app.post("/", async (req, res) => {
  try {
    const status = req.body.status;
    const gender = req.body.gender;

    const response = await axios.get(
      API_URL + "status=" + status + "&gender=" + gender 
    );

    let random = response.data.results[Math.floor(Math.random() * response.data.results.length)]
    let stat = random.status; 
    let gen = random.gender;

    res.render("index.ejs", 
      { content: random, 
        count: response.data.info.count, 
        status: stat, 
        gender: gen,
        message: "Processing... Processing... Oh wow, a match! Even a glorified calculator like me is impressed."
      });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: "Processing... Processing... Nope. No characters match your so-called 'criteria.'",
    });
  }
});

app.post("/get-name", async (req, res) => {
  const searchId = req.body.name;

  try {
    const result = await axios.get(API_URL + "name=" + searchId);
    let random = result.data.results[Math.floor(Math.random() * result.data.results.length)]
    let stat = random.status; 
    let gen = random.gender;

    res.render("index.ejs", 
      { content: random, 
        count: result.data.info.count, 
        status: stat, 
        gender: gen,
        message: "Processing... Processing... Oh wow, a match! Even a glorified calculator like me is impressed."
      });

  } catch (error) { 
    res.render("index.ejs", { error: "Processing... Processing... Nope. No characters match your so-called 'criteria.'" });
  }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });