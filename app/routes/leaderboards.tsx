import { Doodle } from '@prisma/client';
import { Link, useLoaderData } from 'remix';
import { db } from '~/utils/db.server';

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
  const data = useLoaderData<LoaderData>();

  return (
    <div>
      <header>
        <nav className="py-4 flex items-center justify-between px-6 sm:px-12">
          <Link to="/">
            <h1 className="text-md sm:text-xl text-white divide-y-2 divide-white/50 space-y-2 font-display text-center">
              <div>
                <span className="sr-only">Doodles</span>
                <img
                  className="m-auto h-6 sm:h-10"
                  src="images/doodles-logo.svg"
                />
              </div>
              <span className="block pt-1">Cleanliness Rater</span>
            </h1>
          </Link>
          <Link
            className="text-lg md:text-2xl text-white hover:underline"
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
