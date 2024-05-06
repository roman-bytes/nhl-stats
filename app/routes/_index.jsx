import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Overlay } from "~/components/Overlay";
import { GameBanner } from "~/components/GameBanner";
import { RoundOne } from "~/components/RoundOne";
import { RoundTwo } from "~/components/RoundTwo";
import { ConferenceFinals } from "~/components/ConferenceFinals";
import { StanleyCup } from "~/components/StanleyCup";

// TODO use for keeping track of each round - automate if possible
const currentRound = {
  roundOne: true,
  roundTwo: false,
  semiFinals: false,
  finals: false,
};

export const meta = () => {
  return [{ title: "Stanley Cup Playoff Bracket" }];
};

export const loader = async () => {
  // Playoff API
  const playoffs = await fetch(
    "https://api-web.nhle.com/v1/playoff-bracket/2024"
  )
    .then((response) => response.json())
    .catch((error) => {
      console.error("ERROR-playoff: ", error);
      return error;
    });

  // Pulling from standings
  const standingsData = await fetch("https://api-web.nhle.com/v1/standings/now")
    .then((response) => response.json())
    .catch((error) => {
      console.error("ERROR-standings: ", error);
      return error;
    });

  // Scoreboard specific API
  const gamesData = await fetch("https://api-web.nhle.com/v1/scoreboard/now")
    .then((response) => response.json())
    .catch((error) => {
      console.error("ERROR-scoreboard: ", error);
      return error;
    });

  if (standingsData.code || gamesData.code) {
    return json({
      ok: false,
      error: standingsData,
    });
  }

  console.log("playoffs", playoffs);

  return json({
    ok: true,
    games: gamesData,
    playoffs,
  });
};

export default function Index() {
  const data = useLoaderData();
  console.log("data", data);
  const { games, playoffs } = data;

  if (!data.ok) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="bg-white rounded-md text-red-700 w-1/4 h-1/3 font-semibold font-sans justify-center flex items-center border shadow-black">
          Whoops, something went wrong. Check your network connection.
        </div>
      </div>
    );
  }

  return (
    <>
      <GameBanner games={games} />
      <div className="lg:-z-10 lg:absolute lg:top-0 lg:left-0 lg:right-0 lg:bottom-0 pt-36 lg:pt-36 flex justify-center items-center lg:items-start">
        <img
          className="container px-6 lg:px-96"
          src={playoffs.bracketLogo}
          alt="Stanley Cup Playoffs"
        />
      </div>
      <RoundOne
        teams={playoffs.series.filter((matchUp) => matchUp.playoffRound === 1)}
      />
      <Overlay />
      <RoundTwo
        teams={playoffs.series.filter((matchup) => matchup.playoffRound === 2)}
      />
      <ConferenceFinals />
      <StanleyCup />
    </>
  );
}
