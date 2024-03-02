import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

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
  const data = await fetch("https://api-web.nhle.com/v1/standings/now").then(
    (response) => response.json()
  );

  const { standings } = data;

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

  return json({
    ok: true,
    teams: divisionalTeams,
  });
};

export default function Index() {
  const data = useLoaderData();
  console.log("data", data);
  const { teams } = data;
  return (
    <div className="container mx-auto h-full">
      <h1 className="text-3xl font-bold">Stanley Cup Playoff Games {}</h1>
      <div className="grid grid-cols-9 grid-rows-8 gap-5 h-full"></div>
    </div>
  );
}
