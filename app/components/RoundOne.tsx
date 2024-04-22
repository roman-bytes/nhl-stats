import { MatchCard } from "./MatchCard";

export function RoundOne({ teams }) {
  return (
    <div className="flex flex-col md:flex-row md:flex-nowrap w-screen h-full pt-4 px-10 lg:pt-36 lg:px-16 -z-10">
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start md:justify-evenly">
        {teams.western.map((matchUps) => (
          <MatchCard
            key={matchUps[0].teamCommonName.default}
            matchUp={matchUps}
            coast="western"
          />
        ))}
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-end md:justify-evenly">
        {teams.eastern.map((matchUps) => (
          <MatchCard
            key={matchUps[0].teamCommonName.default}
            matchUp={matchUps}
            coast="eastern"
          />
        ))}
      </div>
    </div>
  );
}
