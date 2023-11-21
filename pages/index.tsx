import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
    </main>
  )
}
