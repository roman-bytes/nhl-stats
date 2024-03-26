import { MatchCard } from "./MatchCard";

export function RoundOne({ teams }) {
  return (
    <div className="flex flex-row flex-nowrap h-full w-full mx-auto container pt-6">
      <div className="w-1/2 flex flex-col">
        {teams.western.map((matchUps) => (
          <MatchCard
            key={matchUps[0].teamCommonName.default}
            matchUp={matchUps}
          />
        ))}
      </div>
      <div className="w-1/2 flex flex-col items-end">
        {teams.eastern.map((matchUps) => (
          <MatchCard key={matchUps[0].teamCommonName} matchUp={matchUps} />
        ))}
      </div>
    </div>
  );
}
