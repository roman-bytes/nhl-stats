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
    <div className="overflow-hidden absolute top-0 left-0 right-0 bottom-0 -z-20 flex flex-row flex-nowrap pt-6">
      <div className="w-1/2 flex flex-col h-full justify-center items-end mr-36">
        {tempTeams.western.map((matchUps) => (
          <MatchCard key={matchUps[0].team1} matchUp={matchUps} />
        ))}
      </div>
      <div className="w-1/2 flex flex-col h-full justify-center">
        {tempTeams.eastern.map((matchUps) => (
          <MatchCard key={matchUps[0].team1} matchUp={matchUps} />
        ))}
      </div>
    </div>
  );
}
