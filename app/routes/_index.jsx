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
  const standingsData = await fetch("https://api-web.nhle.com/v1/standings/now")
    .then((response) => response.json())
    .catch((error) => {
      console.error("ERROR-standings: ", error);
      return error;
    });
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

  const { standings } = standingsData;

  // Splint into divisions
  const divisionalTeams = {
    metropolitan: standings.filter(
      (team) =>
        team.divisionName === "Metropolitan" && team.divisionSequence <= 4
    ),
    atlantic: standings.filter(
      (team) => team.divisionName === "Atlantic" && team.divisionSequence <= 4
    ),
    pacific: standings.filter(
      (team) => team.divisionName === "Pacific" && team.divisionSequence <= 4
    ),
    central: standings.filter(
      (team) => team.divisionName === "Central" && team.divisionSequence <= 4
    ),
  };

  const matchUps = {
    western: [
      [
        ...divisionalTeams.atlantic.filter(
          (team) => team.divisionSequence === 1
        ),
        ...divisionalTeams.atlantic.filter(
          (team) => team.divisionSequence === 4
        ),
      ],
      [
        ...divisionalTeams.atlantic.filter(
          (team) => team.divisionSequence === 2
        ),
        ...divisionalTeams.atlantic.filter(
          (team) => team.divisionSequence === 3
        ),
      ],
      [
        ...divisionalTeams.pacific.filter(
          (team) => team.divisionSequence === 1
        ),
        ...divisionalTeams.pacific.filter(
          (team) => team.divisionSequence === 4
        ),
      ],
      [
        ...divisionalTeams.pacific.filter(
          (team) => team.divisionSequence === 2
        ),
        ...divisionalTeams.pacific.filter(
          (team) => team.divisionSequence === 3
        ),
      ],
    ],
    eastern: [
      [
        ...divisionalTeams.central.filter(
          (team) => team.divisionSequence === 1
        ),
        ...divisionalTeams.central.filter(
          (team) => team.divisionSequence === 4
        ),
      ],
      [
        ...divisionalTeams.central.filter(
          (team) => team.divisionSequence === 2
        ),
        ...divisionalTeams.central.filter(
          (team) => team.divisionSequence === 3
        ),
      ],
      [
        ...divisionalTeams.metropolitan.filter(
          (team) => team.divisionSequence === 1
        ),
        ...divisionalTeams.metropolitan.filter(
          (team) => team.divisionSequence === 4
        ),
      ],
      [
        ...divisionalTeams.metropolitan.filter(
          (team) => team.divisionSequence === 2
        ),
        ...divisionalTeams.metropolitan.filter(
          (team) => team.divisionSequence === 3
        ),
      ],
    ],
  };

  return json({
    ok: true,
    matchUps: matchUps,
    games: gamesData,
  });
};

export default function Index() {
  const data = useLoaderData();
  console.log("data", data);
  const { matchUps, games } = data;

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
      <RoundOne teams={matchUps} />
      <div className="absolute top-0 left-0 right-0 bottom-0 pt-36 flex justify-center items-start">
        <img
          className="w-64"
          src="/2023-nhl-stanley-cup-playoffs.png"
          alt="Stanley Cup Playoffs"
        />
      </div>
      <Overlay />
      <RoundTwo />
      <ConferenceFinals />
      <StanleyCup />
    </>
  );
}
