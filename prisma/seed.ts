import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import doods from '../doodles.json';

async function seed() {
  let normalizedDoods = doods.map((dood) => ({
    ...dood,
    tokenId: +dood.tokenId,
  }));

  let creation = await prisma.doodle.createMany({
    data: normalizedDoods,
  });
}

seed();
