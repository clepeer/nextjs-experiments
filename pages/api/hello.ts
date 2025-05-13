// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { extractPackageInfos, PackageInfoResponse } from '@/server/packageInfo'
import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from "zod";

const RequestSchema = z.object({
  lockfilePath: z.string()
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PackageInfoResponse>
) {
  if (req.method === 'GET') {
    try {
      const parsed = RequestSchema.safeParse(req.query);
      if (parsed.success) {
        const result = await extractPackageInfos(parsed.data.lockfilePath)
        return res.status(200).json(result)
      }
      else {
        return res.status(400).json({ success: false, error: `Bad request params ${parsed.error.format()}` });
      }
    } catch (e) {
      return res.status(500).json({ success: false, error: `Something went wrong. ${e}` });
    }
  } else {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
