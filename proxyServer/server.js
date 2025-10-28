import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

// 1. UPDATED: Listen for "/menu/ANY_ID_HERE"
app.get("/menu/:resId", async (req, res) => {
  try {
    // 2. UPDATED: Get the "resId" from the URL
    const { resId } = req.params;

    // 3. UPDATED: Use the dynamic "resId" in the Swiggy API call
    const url =
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9966135&lng=77.5920581&restaurantId=" + resId;

    const headers = {
      // --- REMEMBER TO PASTE YOUR FRESH COOKIE HERE ---
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', 
      'cookie': '__SW=sOuV1MMix34oawc_OC4-58D5n9Ija5nK; _device_id=90fdaf9b-da91-da5a-1761-329891332064; fontsLoaded=1; userLocation={%22lat%22:12.9352403%2C%22lng%22:77.624532%2C%22address%22:%22Koramangala%2C%20Bengaluru%2C%20Karnataka%2C%20India%22%2C%22area%22:%22%22%2C%22showUserDefaultAddressHint%22:false}; _guest_tid=349a721b-6a8c-4afc-89ba-d93e49fe1020; _sid=nk609d50-172f-42c6-9b33-929c54f90bca; aws-waf-token=ae400b9c-5746-4672-a2be-fceedd558958:BQoAZB4HdAoIAAAA:IsrYY04B6V4UTJ8ql2eqnuTE6/UhJ5kKHmaY8UDuZOBjVLxArFFVsrSYlkWtLUwvXEFCS8VS8AUo2yXoRmIwIh2JdtARDBv25Nff5j35+/E9jGGkNa5EDEzbnFtsIavkPWBzRCqFJFV1/oPp87+C6qPt4V1BYBl8COd/i6VKjhF1p9dqOkxgSb4nS4Bc9Y4Xtw==',
      // ---
      
      'Origin': 'https://www.swiggy.com',
      'Referer': 'https://www.swiggy.com/'
    };

    const response = await fetch(url, { headers });

    if (!response.ok) {
      throw new Error(`Swiggy API responded with status: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);

  } catch (err) {
    console.error("Error in /menu route:", err.message);
    res.status(500).json({ error: "Failed to fetch or parse data from Swiggy", details: err.message });
  }
});

// Make sure this is port 5001
app.listen(5001, () => {
  console.log("✅ server.js is running on http://localhost:5001");
  console.log("(This terminal should now 'hang'. Do not close it.)");
}).on('error', (err) => {
  console.error("--- SERVER LISTEN ERROR ---", err);
  process.exit(1);
});