const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.static("public"));

app.get("/weather/:city", async (req, res) => {

  const city = req.params.city;

  const url = `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${city}&aqi=yes`;

  try {

    const response = await fetch(url);
    const data = await response.json();

    res.json(data);

  } catch (error) {

    res.status(500).json({
      error: "Something went wrong"
    });

  }

});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});