import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/menu", async (req, res) => {
  try {
    const url =
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9966135&lng=77.5920581&restaurantId=10591";
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Error fetching from Swiggy:", err);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(5000, () => console.log("✅ Proxy running on http://localhost:5001"));