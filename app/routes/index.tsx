import { Doodle } from '@prisma/client';
import { useState } from 'react';
import {
  ActionFunction,
  Form,
  json,
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
  dood1: Pick<Doodle, 'id' | 'tokenId' | 'imageUrl'> | null;
  dood2: Pick<Doodle, 'id' | 'tokenId' | 'imageUrl'> | null;
  leaderboard: (Pick<Doodle, 'tokenId' | 'imageUrl' | 'id'> & {
    winPct: number;
  })[];
};

export const loader = async () => {
  let count = await db.doodle.count();
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
    dood1: await db.doodle.findUnique({
      where: { tokenId: getRandomNumber(count) },
      select: { tokenId: true, imageUrl: true, id: true },
    }),
    dood2: await db.doodle.findUnique({
      where: { tokenId: getRandomNumber(count) },
      select: { tokenId: true, imageUrl: true, id: true },
    }),
    leaderboard: newLeaderboardData,
  };
  return data;
};

type ActionData = {
  formError?: string;
};
// pick two unique random numbers between 0-9999
// grab the image w/ size set to 512 append =s512 to imageUrl
// send that info through the loader
const badRequest = (data: ActionData) => json(data, { status: 400 });
// upon clicking one of the images it should submit a form that increments the popularityIndex by 1
// and then it should grab the next two random doods
export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();

  const selectedId = form.get('doodle-radio');
  const dood1Id = form.get('dood-1-id');
  const dood2Id = form.get('dood-2-id');

  if (
    typeof selectedId !== 'string' ||
    typeof dood1Id !== 'string' ||
    typeof dood2Id !== 'string'
  ) {
    return badRequest({
      formError: `Form not submitted correctly.`,
    });
  }

  await db.vote.create({
    data: {
      voteForId: selectedId,
      voteAgainstId: dood1Id === selectedId ? dood2Id : dood1Id,
    },
  });
  return redirect('/');
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
        <nav className="py-4 flex items-center justify-center">
          <h1 className="text-xl text-white divide-y-2 divide-white/50 space-y-2 font-display text-center">
            <div>
              <span className="sr-only">Doodles</span>
              <img className="h-10" src="images/doodles-logo.svg" />
            </div>
            <span className="block pt-1">Cleanliness Rater</span>
          </h1>
        </nav>
      </header>
      <main className="mt-12 container mx-auto">
        <h2 className="text-3xl md:text-5xl text-white text-center">
          Which dood is{' '}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-doodles-green via-doodles-orange to-doodles-pink">
            cleaner?
          </span>
        </h2>
        {data?.dood1 && data.dood2 && (
          <Form method="post" onChange={handleChange}>
            <div className="m-6 my-12 md:m-16">
              <input type="hidden" name="dood-1-id" value={data.dood1.id} />
              <input type="hidden" name="dood-2-id" value={data.dood2.id} />
              <div className="grid gap-8 md:gap-20 grid-cols-2">
                <DoodleRadio dood={data.dood1} />
                <DoodleRadio dood={data.dood2} />
              </div>
            </div>
          </Form>
        )}
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
