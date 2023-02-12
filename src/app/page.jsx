import { Inter } from '@next/font/google'
import { Posts } from '@/components/Posts'
import { getSearch } from './posts/page'
import Link from 'next/link'
import { Main } from '@/components/Main'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const res = await getSearch(1, 6)
  return (
    <div>
      <Main />
      <section>
        <div className='container mx-auto px-3 py-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
          <Posts docs={res.docs}/>
          <div className="col-span-full flex justify-center">
            <Link href="/posts?page=1" className='basis-full md:basis-1/3 grow-0 py-1 px-3 text-center bg-yellow-400 text-black dark:bg-white dark:text-black rounded-xl shadow-sm shadow-slate-200 dark:shadow-white'>
              Ver más posts
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
