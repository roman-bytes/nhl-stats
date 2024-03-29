import { MatchCard } from "./MatchCard";

export function StanleyCup({ teams }) {
  // TODO: Temp matchUps until we get live data, or roundTwo is current.
  const tempTeams = {
    finals: [
      [
        {
          team1: "hello",
        },
        {
          team2: "world",
        },
      ],
    ],
  };
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 pt-36 -z-20 flex justify-center items-end">
      <div className="flex flex-col">
        {tempTeams.finals.map((matchUps) => (
          <MatchCard key={matchUps[0].team1} matchUp={matchUps} />
        ))}
      </div>
    </div>
  );
}
