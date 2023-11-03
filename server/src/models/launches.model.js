const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: latestFlightNumber,
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

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      customer: ["TM", "NASA"],
      upcoming: true,
      success: true,
      flightNumber: latestFlightNumber,
    })
  );
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
};
