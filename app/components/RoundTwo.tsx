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
    <div className="absolute top-0 left-0 right-0 bottom-0 pt-36 -z-30 flex flex-row flex-nowrap">
      <div className="flex flex-1 flex-col justify-center justify-evenly items-end">
        {tempTeams.western.map((matchUps) => (
          <MatchCard key={matchUps[0].team1} matchUp={matchUps} />
        ))}
      </div>
      <div className="w-1/3" />
      <div className="flex flex-1 flex-col justify-center justify-evenly">
        {tempTeams.eastern.map((matchUps) => (
          <MatchCard key={matchUps[0].team1} matchUp={matchUps} />
        ))}
      </div>
    </div>
  );
}
