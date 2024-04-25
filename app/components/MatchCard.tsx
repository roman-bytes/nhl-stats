export function MatchCard({ matchUp, coast }) {
  function replaceDarkWithLight(inputString) {
    return inputString.replace(/dark/g, "light");
  }

  return (
    <section className="bg-slate-200 w-full sm:w-72 rounded-md border-4 mb-6 border-white hover:bg-slate-300">
      <div
        className={`relative border border-white flex flex-nowrap p-2 ${
          coast === "east" && "flex-row-reverse"
        }`}
      >
        <div
          className={`flex text-xs text-slate-500 border-2 border-white font-semibold absolute bg-slate-900 text-white w-8 h-8 rounded-full items-center justify-center -right-4 ${
            coast === "west" && "-left-4"
          }`}
        >
          {matchUp?.topSeedRankAbbrev}
        </div>
        {matchUp?.topSeedTeam?.logo ? (
          <img
            className="w-20"
            src={replaceDarkWithLight(matchUp?.topSeedTeam?.logo)}
            alt={matchUp?.topSeedTeam?.name.default}
          />
        ) : (
          <div className="w-20 h-20 bg-slate-800 rounded-md" />
        )}

        <div
          className={`font-bold flex items-center text-xl ${
            coast === "east" ? "ml-auto mr-4" : "mr-auto ml-4"
          }`}
        >
          {matchUp?.topSeedTeam?.abbrev}
        </div>
        <div className="font-bold flex items-center text-2xl p-4">
          {matchUp?.topSeedWins}
        </div>
      </div>
      <div
        className={`relative border border-white flex flex-nowrap p-2 ${
          coast === "east" && "flex-row-reverse"
        }`}
      >
        <div
          className={`flex text-xs text-slate-500 border-2 border-white font-semibold absolute bg-slate-900 text-white w-8 h-8 rounded-full items-center justify-center -right-4 ${
            coast === "west" && "-left-4"
          }`}
        >
          {matchUp?.bottomSeedRankAbbrev}
        </div>
        {matchUp?.bottomSeedTeam?.logo ? (
          <img
            className="w-20"
            src={replaceDarkWithLight(matchUp?.bottomSeedTeam?.logo)}
            alt={matchUp?.bottomSeedTeam?.name?.default}
          />
        ) : (
          <div className="w-20 h-20 bg-slate-800 rounded-md" />
        )}

        <div
          className={`font-bold flex items-center text-xl ${
            coast === "east" ? "ml-auto mr-4" : "mr-auto ml-4"
          }`}
        >
          {matchUp?.bottomSeedTeam?.abbrev}
        </div>
        <div className="font-bold flex items-center text-2xl p-4">
          {matchUp?.bottomSeedWins}
        </div>
      </div>
    </section>
  );
}
