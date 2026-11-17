export const competition2027 = {
  date: "May 8, 2027",
  dateTime: "2027-05-08",
  venue: "Western University",
  building: "Amit Chakma Engineering Building",
  teamCapacity: 5,
  registrationDeadline: "December 20, 2026",
  maxBuildBudget: "$1,500 CAD",
  registrationFee: "$50 CAD",
  registrationFeeUrl:
    "https://estore.eng.uwo.ca/products/chrc---canadian-humanoid-robotics-competition",
  hours: "9:00 AM to 5:00 PM ET",
  hoursNote: "Subject to change",
};

const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const siteBasePath = configuredBasePath.replace(/\/$/, "");

export function publicAsset(path: string) {
  return `${siteBasePath}${path.startsWith("/") ? path : `/${path}`}`;
}

export const confirmedCompetitors: { name: string; institution: string; logo?: string }[] = [
  {
    name: "WE Bots",
    institution: "Western University",
    logo: "/images/we-bots-logo.png",
  },
];

export const remainingTeamSpots = Math.max(
  0,
  competition2027.teamCapacity - confirmedCompetitors.length,
);

export function teamAvailability() {
  if (remainingTeamSpots === 0) return "All team spots are filled";
  const label = remainingTeamSpots === 1 ? "team spot" : "team spots";
  return remainingTeamSpots + " " + label + " remaining";
}
