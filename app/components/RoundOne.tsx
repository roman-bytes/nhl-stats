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
  return (
    <div className="hidden absolute lg:flex lg:top-0 lg:bottom-0 lg:left-0 lg:right-0 md:flex-row md:flex-nowrap pt-4 px-10 lg:pt-36 lg:px-16 -z-50">
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
