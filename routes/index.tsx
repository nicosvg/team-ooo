import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import getWeek from "https://deno.land/x/date_fns@v2.22.1/getWeek/index.ts";
import { getPairs } from "./pairs.ts";

export default function Home(props: PageProps) {
  const search: URLSearchParams = new URLSearchParams(props.url.search);
  const team = search.get("team")?.split(",").sort() || [];

  const manualOffset = Number(search.get("offset")) || 0;
  const weekNumber = (getWeek(new Date()));

  return (
    <>
      <Head>
        <title>Team 1:1</title>
      </Head>
      <div class="max-w-screen h-screen  bg-yellow text-primary flex flex-col items-center">
        <div class="p-4 mx-auto max-w-screen-md bg-orange flex-grow  flex flex-col items-center">
          <img src="/logo.png" class="pt-16" alt="logo" />
          <p class="pt-16">Week {getWeek(new Date()) + manualOffset}</p>
          <div class="p-8 flex flex-col items-center">
            {getPairs(team.length, weekNumber + manualOffset).map((pair) => {
              return (
                <div class="p-1 text-xl">
                  {team[pair[0]]} - {team[pair[1]]}
                </div>
              );
            })}
          </div>
        </div>
        <a href="https://fresh.deno.dev">
          <img
            width="197"
            height="37"
            src="https://fresh.deno.dev/fresh-badge.svg"
            alt="Made with Fresh"
          />
        </a>
      </div>
    </>
  );
}
