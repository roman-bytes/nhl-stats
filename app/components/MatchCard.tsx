export function MatchCard({ matchUp }) {
  const playoffGames = [
    {
      winner: null,
    },
    {
      winner: null,
    },
    {
      winner: null,
    },
    {
      winner: null,
    },
    {
      winner: null,
    },
    {
      winner: null,
    },
    {
      winner: null,
    },
  ];

  console.log("MATCHUP", matchUp);
  return (
    <div className="bg-slate-200 p-4 my-2 w-96">
      <div className="flex flex-row flex-nowrap items-center">
        Games:
        {playoffGames.map(() => (
          <div className="w-4 h-4 rounded-full bg-slate-400 border"></div>
        ))}
      </div>

      {matchUp.map((team) => (
        <div
          className="bg-white flex flex-row-reverse flex-nowrap flex-row p-2 mb-2"
          key={team.teamName.default}
        >
          <div className="text-slate-500">({team.divisionSequence})</div>
          <img
            className="w-8"
            src={team.teamLogo}
            alt={team.teamName.default}
          />
          <div className="font-bold ml-auto">{team.teamAbbrev.default}</div>
          <div className="self-end font-bold">0</div>
        </div>
      ))}
    </div>
  );
}
