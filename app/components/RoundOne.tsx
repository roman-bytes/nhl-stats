import { MatchCard } from "./MatchCard";

export function RoundOne({ teams }) {
  return (
    <div className="flex flex-col lg:flex-row lg:flex-nowrap w-screen h-full pt-4 px-2 lg:pt-36 px-16">
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start lg:justify-evenly">
        {teams.western.map((matchUps) => (
          <MatchCard
            key={matchUps[0].teamCommonName.default}
            matchUp={matchUps}
            coast="western"
          />
        ))}
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end lg:justify-evenly">
        {teams.eastern.map((matchUps) => (
          <MatchCard
            key={matchUps[0].teamCommonName}
            matchUp={matchUps}
            coast="eastern"
          />
        ))}
      </div>
    </div>
  );
}
