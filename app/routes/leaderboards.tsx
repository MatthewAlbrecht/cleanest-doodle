import { Doodle } from '@prisma/client';
import { useState } from 'react';
import {
  ActionFunction,
  Form,
  json,
  Link,
  redirect,
  useActionData,
  useLoaderData,
  useSubmit,
  useTransition,
} from 'remix';
import { db } from '~/utils/db.server';

/**
 * returns number between 0 - n
 */
const getRandomNumber = (n: number) => Math.floor(Math.random() * n);

type LoaderData = {
  leaderboard: (Pick<Doodle, 'tokenId' | 'imageUrl' | 'id'> & {
    winPct: number;
  })[];
};

export const loader = async () => {
  let leaderboardData = await db.doodle.findMany({
    orderBy: [{ votesFor: { _count: 'desc' } }],
    take: 100,
    select: {
      tokenId: true,
      imageUrl: true,
      id: true,
      _count: {
        select: {
          votesFor: true,
          votesAgainst: true,
        },
      },
    },
  });

  let newLeaderboardData = leaderboardData.map((dood) => ({
    ...dood,
    winPct:
      dood._count.votesAgainst + dood._count.votesFor === 0
        ? 0
        : (dood._count.votesFor /
            (dood._count.votesAgainst + dood._count.votesFor)) *
          100,
  }));

  let data = {
    leaderboard: newLeaderboardData,
  };
  return data;
};

export default function IndexRoute() {
  const submit = useSubmit();
  const data = useLoaderData<LoaderData>();
  const transition = useTransition();
  console.log(transition.submission);
  // show checkbox over clicked one

  async function handleChange(e: React.FormEvent<HTMLFormElement>) {
    submit(e.currentTarget, { replace: true });
  }

  return (
    <div>
      <header>
        <nav className="py-4 flex items-center justify-between px-12">
          <Link to="/">
            <h1 className="text-xl text-white divide-y-2 divide-white/50 space-y-2 font-display text-center">
              <div>
                <span className="sr-only">Doodles</span>
                <img className="h-10" src="images/doodles-logo.svg" />
              </div>
              <span className="block pt-1">Cleanliness Rater</span>
            </h1>
          </Link>
          <Link
            className="text-2xl text-white hover:underline"
            to="/leaderboards"
            prefetch="intent"
          >
            Leaderboards
          </Link>
        </nav>
      </header>
      <main className="mt-12 container mx-auto">
        <div className="mt-20">
          <h2 className="text-3xl md:text-5xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-doodles-green via-doodles-orange to-doodles-pink">
            Leaderboards
          </h2>
          <ul className="px-4 sm:px-0 mt-8 mx-auto max-w-md divide-y-2 divide-white/25">
            {data.leaderboard.map((dood, index) => (
              <li
                key={dood.tokenId}
                className="py-4 flex justify-between items-center"
              >
                <div className="flex items-center">
                  <img
                    className="w-20 rounded-lg"
                    src={`${dood.imageUrl}=s128`}
                  />
                  <span className="ml-4 text-white">
                    Doodles #{dood.tokenId}
                  </span>
                </div>
                <p className="text-white text-xl">{dood.winPct}%</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

function DoodleRadio({
  dood,
}: {
  dood: Pick<Doodle, 'tokenId' | 'imageUrl' | 'id'>;
}) {
  const inputId = `doodle-${dood.tokenId}`;
  return (
    <div>
      <label htmlFor={inputId}>
        <span className="sr-only">doodle number {dood.tokenId}</span>
        <input
          key={inputId}
          id={inputId}
          type="radio"
          className="hidden peer"
          name="doodle-radio"
          value={dood.id}
        />
        <div className="bg-white md:hover:bg-white/95 p-2 sm:p-4 rounded-lg md:peer-checked:p-2 md:peer-checked:border-8 md:peer-checked:border-doodles-green">
          <img className="w-auto rounded-lg" src={`${dood.imageUrl}=s512`} />
          <h3 className="py-4 -mb-4 text-right leading-none text-xl font-bold text-indigo-900">
            #{dood.tokenId}
          </h3>
        </div>
      </label>
    </div>
  );
}
