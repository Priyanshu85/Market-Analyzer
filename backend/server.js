// Modules
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const googleTrends = require("google-trends-api");

// App Config
const app = express();
app.use(
  cors({
    origin: "https://market-analyzer.vercel.app/",
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.post("/", async (req, res) => {
  // Trends Functionality
//   const response = await googleTrends.dailyTrends({
//     trendDate: new Date('2019-01-10'),
//     geo: 'US',
//   });
//   console.log(res);
// res.status(200).json(response);

const data = req.body

console.log(data)

const response = await googleTrends.interestByRegion({keyword: data.term, startTime: new Date(data.startDate), endTime: new Date(data.endDate), geo: 'IN'})

res.status(200).json(response);
});

// App Listen
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Server is running on port 8000");
});