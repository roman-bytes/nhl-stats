import { MatchCard } from "./MatchCard";

export function ConferenceFinals({ teams }) {
  function checkEastCoast(series) {
    switch (series) {
      case "N":
        return true;
      default:
        return false;
    }
  }

  function checkWestCoast(series) {
    switch (series) {
      case "M":
        return true;
      default:
        return false;
    }
  }

  return (
    <div className="hidden lg:absolute top-0 left-0 right-0 bottom-0 pt-36 -z-30 lg:flex flex-row flex-nowrap">
      <div className="flex flex-1 flex-col justify-center justify-evenly items-end">
        {teams.map(
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
      <div className="w-1/6" />
      <div className="flex flex-1 flex-col justify-center justify-evenly">
        {teams.map(
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
