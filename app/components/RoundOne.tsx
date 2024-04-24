import { MatchCard } from "./MatchCard";

function checkEastCoast(series) {
  switch (series) {
    case "A":
      return true;

    case "B":
      return true;

    case "C":
      return true;

    case "D":
      return true;

    default:
      return false;
  }
}

function checkWestCoast(series) {
  switch (series) {
    case "E":
      return true;

    case "F":
      return true;

    case "G":
      return true;

    case "H":
      return true;

    default:
      return false;
  }
}

export function RoundOne(teams) {
  console.log("TEAMS", teams);
  return (
    <div className="flex flex-col md:flex-row md:flex-nowrap w-screen h-full pt-4 px-10 lg:pt-36 lg:px-16 -z-10">
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start md:justify-evenly">
        {teams.teams.map(
          (matchUp) =>
            checkWestCoast(matchUp.seriesLetter) && (
              <MatchCard
                key={matchUp.seriesLetter}
                coast="west"
                matchUp={matchUp}
              />
            )
        )}
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-end md:justify-evenly">
        {teams.teams.map(
          (matchUp) =>
            checkEastCoast(matchUp.seriesLetter) && (
              <MatchCard
                key={matchUp.seriesLetter}
                coast="east"
                matchUp={matchUp}
              />
            )
        )}
      </div>
    </div>
  );
}
