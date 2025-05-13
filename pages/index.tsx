import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const lockfilePath = "./fixtures/yarn-v1.lock"

  type PackageInfo = {
    packageName: string;
    declaredVersion: string;
    lockedVersion: string;
  };
  const [data, setData] = useState<PackageInfo[]>([]);

  useEffect(() => {
    const packageInfoGET = async () => {
      const params = new URLSearchParams();
      params.append("lockfilePath", lockfilePath);

      const res = await fetch(`/api/hello?${params}`);
      const data = await res.json();
      console.log("Package Infos")
      console.log(data)
      // store some examples to show in UI
      setData(data.result.slice(-5,))
    };

    packageInfoGET();
  }, []);

  
  return (
    <main
      className={`min-h-screen p-24 ${inter.className}`}
    >
      <div className=" z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="h-48 w-full items-end justify-center">
            <Image
              src="/logo.png"
              alt="Ketryx logo"
              width={200}
              height={24}
              priority
            />
        </div>
      </div>
      <div className="w-full border-b border-gray-300 pb-6 pt-6 rounded-xl border bg-gray-200 p-4">
        <p>
          Get started by editing&nbsp;
          <code className="font-mono font-bold">server/packageInfo.ts</code>
        </p>
        <p>
          GraphQL server is accessible here: <Link href="/api/graphql"><span className="font-mono font-bold">/api/graphql</span></Link>
        </p>
      </div>
      <div className="w-full border-b border-gray-300 pb-6 pt-6 rounded-xl border bg-gray-200 p-4">
        <h1>
          Example Package Infos. The entire list you can see on the console:
        </h1>
        ---
        <ul>
        {data.map((item) => (
          <li key={`${item.packageName}-${item.declaredVersion}`}>
            <p>Package Name: {item.packageName}</p>
            <p>Declared Version: {item.declaredVersion}</p>
            <p>Locked Version: {item.lockedVersion}</p>
            ---
          </li>
        ))}
      </ul>
      </div>
    </main>
  )
}
