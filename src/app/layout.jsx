import '../../styles/output.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { cookies } from 'next/headers';
import { CookiesWarning } from '@/components/CookieWarning';

export default function RootLayout({ children }) {
  const cookieStore = cookies();

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${cookieStore.has("theme")? cookieStore.get("theme").value : "light"}`}>
        <div className='min-h-screen flex flex-col justify-between dark:text-white   bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-900 dark:to-blue-900'>
          <Header theme={`${cookieStore.has("theme")? cookieStore.get("theme").value : "light"}`}/>
            <div className='pt-14'>
              {children}
            </div>
            {cookieStore.has("acepted cookies") != true || cookieStore.get("acepted cookies").value != "true"? <CookiesWarning /> : null}
          <Footer />
        </div>
      </body>  
    </html>
  )
}
