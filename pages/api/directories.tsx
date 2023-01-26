// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getImageDirectoryTree } from '../../util/files';

type RenderTree = {
  id: string;
  name: string;
  children?: readonly RenderTree[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<RenderTree[]>
) {
  res.status(200).json(getImageDirectoryTree())
}
