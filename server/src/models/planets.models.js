const { parse } = require("csv-parse");
const fs = require("fs");
const path = require("path");

const results = [];

function isPlanetHabitable(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    // flux is near to earths flux (light and energy)
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    // planets radius is nearly this large as compare to earths
    planet["koi_prad"] < 1.6
  );
}

function loadPlanetsData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(path.join(__dirname, "..", "..", "data", "kepler_data.csv"))
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", (data) => {
        if (isPlanetHabitable(data)) {
          results.push(data);
        }
      })
      .on("error", (error) => {
        console.log(error);
        reject(error);
      })
      .on("close", () => {
        console.log("🔒 file closed...");
      })
      .on("end", () => {
        console.log(`🌍 planets data loaded: ${results.length} planets found`);
        resolve();
      });
  });
}

module.exports = {
  planets: results,
  loadPlanetsData,
};
