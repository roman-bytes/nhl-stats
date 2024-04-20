export function MatchCard({ matchUp, coast }) {
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

  return (
    <div className="bg-slate-200 w-full sm:w-72 rounded-md border-4 border-white hover:bg-slate-300">
      {matchUp.map((team: FullTeam) => (
        <div
          className={`relative border border-white flex flex-nowrap p-2 ${
            coast === "eastern" && "flex-row-reverse"
          }`}
          key={team?.teamName?.default}
        >
          <div
            className={`flex text-slate-500 border-2 border-white font-extrabold absolute bg-slate-900 text-white w-8 h-8 rounded-full items-center justify-center -right-4 ${
              coast === "western" && "-left-4"
            }`}
          >
            {team?.divisionSequence}
          </div>
          {team.teamLogo ? (
            <img
              className="w-20"
              src={team?.teamLogo}
              alt={team?.teamName?.default}
            />
          ) : (
            <div className="w-20 h-20 bg-slate-800 rounded-md" />
          )}
          <div
            className={`font-bold flex items-center text-xl ${
              coast === "eastern" ? "ml-auto mr-4" : "mr-auto ml-4"
            }`}
          >
            {team?.teamAbbrev?.default}
          </div>
          <div className="font-bold flex items-center text-2xl p-4">0</div>
        </div>
      ))}
    </div>
  );
}
