// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: 'UZt18wNMFFu711OFwlWnJRS3mvXXitS76vgsNEch240',
});

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { response: { results: results1 } } = await unsplash.search.getPhotos({query: 'DND' }) as any
  const { response: { results: results2 } } = await unsplash.search.getPhotos({query: 'Dungeons and Dragons' }) as any

  const results = [
    ...results1.slice(0, 6),
    ...results2.slice(0, 6)
  ]
    .reduce((acc, photo) => {
      if (!acc[photo.id]) {
        acc[photo.id] = photo
        acc.results.push(photo)
      }

      return acc
    }, {
      results: []
    } as any).results
  
  res.status(200).json(results as any)
}
