import { Inter } from 'next/font/google'
import ClientOnly from './components/ClientOnly'
import getCurrentUser from './actions/getCurrentUser'
import AboutPage from './AboutPage'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const currentUser = await getCurrentUser();

  return (
    <ClientOnly>
      <AboutPage currentUser={currentUser}/>
    </ClientOnly>
  )
}
