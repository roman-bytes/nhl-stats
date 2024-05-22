import { useMachine } from "@xstate/react";
import toggleCardMachine from "~/machines/toggleCardMachine";
import { MatchCard } from "./MatchCard";

export function RoundTwo({ teams }) {
  const [state, send] = useMachine(toggleCardMachine);

  function checkEastCoast(series) {
    switch (series) {
      case "I":
        return true;

      case "J":
        return true;

      default:
        return false;
    }
  }

  function checkWestCoast(series) {
    switch (series) {
      case "K":
        return true;

      case "L":
        return true;
      default:
        return false;
    }
  }
  return (
    <div className="hidden absolute top-0 left-0 right-0 bottom-0 pt-36 px-28 -z-30 lg:flex container mx-auto flex-col md:flex-row md:flex-nowrap w-screen h-full">
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
      <div className="w-1/3" />

      <div className="w-full md:w-1/2 flex flex-col items-center md:items-end md:justify-evenly">
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
