const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer  IS1",
  launchDate: new Date("December 29, 2030"),
  target: "Kepler-442 b",
  customer: ["TM", "NASA"],
  upcoming: true,
  success: false,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

module.exports = {
  getAllLaunches
};
