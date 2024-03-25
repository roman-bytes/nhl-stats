import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Overlay } from "~/components/Overlay";
import { GameBanner } from "~/components/GameBanner";
import { RoundOne } from "~/components/RoundOne";

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
  const standingsData = await fetch(
    "https://api-web.nhle.com/v1/standings/now"
  ).then((response) => response.json());
  const gamesData = await fetch(
    "https://api-web.nhle.com/v1/scoreboard/now"
  ).then((response) => response.json());

  const { standings } = standingsData;
  console.log("GAMES", gamesData);

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
  return (
    <>
      <GameBanner games={games} />
      <RoundOne teams={matchUps} />
      <Overlay />
    </>
  );
}
