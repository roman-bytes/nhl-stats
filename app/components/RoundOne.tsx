import { MatchCard } from "./MatchCard";

export function RoundOne({ teams }) {
  return (
    <div className="flex flex-row flex-nowrap w-screen h-full pt-36 px-16">
      <div className="w-1/2 flex flex-col justify-evenly">
        {teams.western.map((matchUps) => (
          <MatchCard
            key={matchUps[0].teamCommonName.default}
            matchUp={matchUps}
            coast="western"
          />
        ))}
      </div>
      <div className="w-1/2 flex flex-col items-end justify-evenly">
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
