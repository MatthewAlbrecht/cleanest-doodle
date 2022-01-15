import { createSearchParams } from 'react-router-dom';
import fs from 'fs';

export default async function fetchDoods() {
  let doods = [];
  let offset = 0;
  let limit = 50;

  while (offset + limit <= 10000) {
    let res = await fetch(
      'https://api.opensea.io/api/v1/assets?' +
        createSearchParams({
          order_direction: 'asc',
          offset: String(offset),
          limit: String(limit),
          asset_contract_address: '0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e',
        })
    );
    res = await res.json();
    doods.push(...res.assets);
    offset += limit;
  }

  let normalizedDoodles = doods.map((dood) => ({
    tokenId: dood.token_id,
    imageUrl: dood.image_url,
    ...dood.traits.reduce((final, { trait_type, value }) => {
      switch (trait_type) {
        case 'body':
          final.body = value;
          break;
        case 'background':
          final.background = value;
          break;
        case 'hair':
          final.hair = value;
          break;
        case 'head':
          final.head = value;
          break;
        case 'face':
          final.face = value;
          break;
        case 'piercing':
          final.piercing = value;
          break;

        default:
          break;
      }
      return final;
    }, {}),
  }));
  fs.writeFileSync('doodles.json', JSON.stringify(normalizedDoodles));
}
