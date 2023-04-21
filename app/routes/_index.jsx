import { json } from '@remix-run/node';
import {useLoaderData} from "@remix-run/react";

export const meta = () => {
  return [{ title: "New Remix App" }];
};

export const loader = async () => {

  const standings = await fetch('https://statsapi.web.nhl.com/api/v1/standings').then(response => response.json());

  console.log('data', standings);

  return json({ ok: true, standings });
};

export default function Index() {
  const data = useLoaderData();
  console.log('data', data);
  const teams = Array(31).fill({});
  return (
    <div className="container bg-white mx-auto h-full">
      <h1 className="text-3xl font-bold">Stanley Cup Playoff Games {}</h1>
      <div className="grid grid-cols-9 grid-rows-8 gap-5 h-full">
          {teams.map((t, i) => <div key={i} className={`div${(i +1)}`}>Team {i + 1}</div>)}
      </div>
    </div>
  );
}
