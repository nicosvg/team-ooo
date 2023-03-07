import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import getWeek from "https://deno.land/x/date_fns@v2.22.1/getWeek/index.ts";

const getPairs = (team: string[], offset: number) => {
  const pairs: string[][] = [];
  for (let i = 0; i < team.length; i += 1) {
    const index2 = (team.length - i + offset) % team.length;
    if (pairs.every((p) => p[1] !== team[i]))
      pairs.push([team[i], team[Math.abs(index2)]]);
  }
  return pairs;
};

export default function Home(props: PageProps) {
  const search: URLSearchParams = new URLSearchParams(props.url.search);
  const team = search.get("team")?.split(",").sort() || [];

  const manualOffset = Number(search.get("offset")) || 0;
  const offset = (getWeek(new Date()) + manualOffset) % team.length;

  return (
    <>
      <Head>
        <title>OoO Planner</title>
      </Head>
      <div class="max-w-screen max-h-full bg-yellow text-primary">
        <div class="p-4 mx-auto max-w-screen-md bg-orange">
          <img src="/logo.png" class="pt-16" alt="logo" />
          <p class="pt-2">Team members: {team.join(", ")}</p>
          <p class="pt-2">
            The current week is {getWeek(new Date()) + manualOffset}
          </p>
          <div class="p-8 flex flex-col items-center">
            {getPairs(team, offset).map((pair) => {
              return (
                <div class="p-1">
                  {pair[0]} - {pair[1]}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
