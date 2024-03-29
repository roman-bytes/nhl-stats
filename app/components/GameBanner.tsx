import { format } from "date-fns";

type GameBannerProps = {
  games: ScoreboardGames;
};

export function GameBanner({ games }: GameBannerProps) {
  const date = new Date().toLocaleDateString();
  const todaysDate = format(date, "yyyy-MM-dd");

  console.log("Formatted Day", format(todaysDate, "dd"));

  console.log("TODAYS DATE", todaysDate);
  const todaysGames = games.gamesByDate.filter(
    (games: GamesByDate) => games.date === todaysDate
  );
  console.log("GAMES", todaysGames);

  return (
    <div className="flex flex-col w-screen fixed top-0 overflow-hidden bg-white">
      <div className="flex overflow-x-scroll hide-scroll-bar">
        <div className="flex flex-nowrap">
          {todaysGames.map((gameDay) => (
            <>
              <div className="inline-block bg-slate-300 border-r hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="flex px-6 py-3 max-w-xs overflow-hidden text-slate-800flex justify-center items-center flex-nowrap flex-col">
                  <div className="font-inter font-extrabold text-2xl mb-3">
                    {format(date, "MMM")}
                  </div>
                  <div className="font-inter text-4xl font-light">
                    {format(date, "d")}
                  </div>
                </div>
              </div>
              {gameDay.games.map((game) => (
                <div
                  className="inline-block bg-white w-56 border-r hover:shadow-xl transition-shadow duration-300 ease-in-out"
                  key={`${game.id}`}
                >
                  <div className="p-4 flex flex-col flex-nowrap max-w-xs overflow-hidden">
                    <div>
                      {(game.gameState === "OFF" ||
                        game.gameState === "FINAL") && (
                        <div className="font-light bg-slate-200 text-sm text-center mb-3">
                          FINAL
                        </div>
                      )}

                      {(game.gameState === "FUT" ||
                        game.gameState === "PRE") && (
                        <div className="font-light bg-slate-200 text-sm text-center mb-3">
                          {format(game.startTimeUTC, "h:mm a")}
                        </div>
                      )}

                      {(game.gameState === "LIVE" ||
                        game.gameState === "CRIT") && (
                        <div className="flex flex-row font-light text-sm mb-3 items-center">
                          <div className="p-1 bg-green-800 text-white rounded-sm">
                            {game.period}
                            {game.period === 1 && "ST"}
                            {game.period === 2 && "ND"}
                            {game.period === 3 && "RD"}
                          </div>
                          <div className="ml-2">{game.clock.timeRemaining}</div>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-row">
                      <img
                        src={`${game.awayTeam.logo}`}
                        alt={game.awayTeam.name.default}
                        className="w-8"
                      />
                      <span className="pl-2 font-extrabold">
                        {game.awayTeam.abbrev}
                      </span>
                      <div className="flex-grow text-right font-extrabold">
                        {game.awayTeam.score}
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <img
                        src={`${game.homeTeam.logo}`}
                        alt={game.homeTeam.name.default}
                        className="w-8"
                      />
                      <span className="pl-2 font-extrabold">
                        {game.homeTeam.abbrev}
                      </span>
                      <div className="flex-grow text-right font-extrabold">
                        {game.homeTeam.score}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
