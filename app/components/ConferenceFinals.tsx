import { useMachine } from "@xstate/react";
import toggleCardMachine from "~/machines/toggleCardMachine";
import { MatchCard } from "./MatchCard";

export function ConferenceFinals({ teams }) {
  const [state, send] = useMachine(toggleCardMachine);

  function checkEastCoast(series) {
    switch (series) {
      case "M":
        return true;
      default:
        return false;
    }
  }

  function checkWestCoast(series) {
    switch (series) {
      case "N":
        return true;
      default:
        return false;
    }
  }

  return (
    <div className="container mx-auto pt-36 -z-10 w-screen h-full lg:flex flex-row flex-nowrap">
      <div className="flex flex-1 flex-col justify-center justify-evenly items-end">
        {teams.map(
          (matchUp) =>
            checkWestCoast(matchUp.seriesLetter) && (
              <MatchCard
                key={matchUp.seriesLetter}
                coast="west"
                matchUp={matchUp}
                isActive={state.context.activeCardId === matchUp.seriesLetter}
                onToggle={() =>
                  send({ type: "TOGGLE_CARD", cardId: matchUp.seriesLetter })
                }
              />
            )
        )}
      </div>
      <div className="w-1/6" />
      <div className="flex flex-1 flex-col justify-center justify-evenly">
        {teams.map(
          (matchUp) =>
            checkEastCoast(matchUp.seriesLetter) && (
              <MatchCard
                key={matchUp.seriesLetter}
                coast="east"
                matchUp={matchUp}
                isActive={state.context.activeCardId === matchUp.seriesLetter}
                onToggle={() =>
                  send({ type: "TOGGLE_CARD", cardId: matchUp.seriesLetter })
                }
              />
            )
        )}
      </div>
    </div>
  );
}
