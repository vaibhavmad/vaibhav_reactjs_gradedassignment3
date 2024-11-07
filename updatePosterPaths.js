const fs = require("fs");
const path = "./src/data/data.json";

// Read the JSON file
fs.readFile(path, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading data.json:", err);
    return;
  }

  // Parse the JSON data
  const jsonData = JSON.parse(data);

  // Update each movie's poster field to use only the filename with /img/ prefix
  Object.keys(jsonData).forEach((category) => {
    jsonData[category].forEach((movie) => {
      // Extract just the filename, ignoring any prior path
      const filename = movie.poster.split("/").pop();
      movie.poster = `/img/${filename}`;
    });
  });

  // Write the updated JSON back to the file
  fs.writeFile(path, JSON.stringify(jsonData, null, 2), (err) => {
    if (err) {
      console.error("Error writing updated data.json:", err);
      return;
    }
    console.log("Successfully updated poster paths in data.json");
  });
});
