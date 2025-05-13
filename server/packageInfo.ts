// Module for extracting certain package file information (npm, yarn, etc.)

/**
 * Tasks
 *
 * - Read fixture file
 * - Extract the following information: package name, declared version and locked version
 */
import fs from 'fs';
import * as lockfile from '@yarnpkg/lockfile';

export type PackageInfoResponse = {
  result: PackageInfo[],
  success: true
} | {
  error: string,
  success: false
}

export type PackageInfo = {
  packageName: string,
  declaredVersion: string,
  lockedVersion: string
}

export async function extractPackageInfos(lockfilePath: string): Promise<PackageInfoResponse> {
  try {
    let lockFile = fs.readFileSync(lockfilePath, 'utf8');
    let lockfileJson = lockfile.parse(lockFile);

    const dependencies = lockfileJson.object || {};
    const result = [];

    for (const [ key, entry ] of Object.entries(dependencies)) {
      const keySplits = key.split('@');
      const name: string = keySplits[keySplits.length - 2] || "not found";
      const declared: string = keySplits[keySplits.length - 1] || "not found";
      const locked: string = entry?.version || 'not found';

      result.push({ packageName: name, declaredVersion: declared, lockedVersion: locked });
    }

     return { success: true, result: result };

  } catch (e) {
    return {
      success: false,
      error: `Package info extraction failed. ${e}`
    }
  }
}
