import { MatchCard } from "./MatchCard";

export function RoundTwo({ teams }) {
  // TODO: Temp matchUps until we get live data, or roundTwo is current.
  const tempTeams = {
    eastern: [
      [
        {
          team1: "hello",
        },
        {
          team2: "world",
        },
      ],
      [
        {
          team1: "hello",
        },
        {
          team2: "world",
        },
      ],
    ],
    western: [
      [
        {
          team1: "hello",
        },
        {
          team2: "world",
        },
      ],
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
    <div className="flex flex-row flex-nowrap h-full w-full mx-auto container pt-6">
      <div className="w-1/2 flex flex-col">
        {tempTeams.western.map((matchUps) => (
          <MatchCard key={matchUps[0].team1} matchUp={matchUps} />
        ))}
      </div>
      <div className="w-1/2 flex flex-col items-end">
        {tempTeams.eastern.map((matchUps) => (
          <MatchCard key={matchUps[0].team1} matchUp={matchUps} />
        ))}
      </div>
    </div>
  );
}
