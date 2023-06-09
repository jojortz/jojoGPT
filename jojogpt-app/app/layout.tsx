import { Nunito } from "next/font/google"

import './globals.css'
import Navbar from "./components/navbar/Navbar"
import ClientOnly from "./components/ClientOnly"
import ToasterProvider from "./providers/ToasterProvider"
import RegisterModal from "./components/modals/RegisterModal"
import LoginModal from "./components/modals/LoginModal"
import getCurrentUser from "./actions/getCurrentUser"

export const metadata = {
  title: 'JojoGPT',
  description: 'Text the jojoGPT AI',
  icons: {
    icon: '/images/favicon.ico',
  }
}

const font = Nunito({
  subsets: ["latin"]
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider/>
          <LoginModal/>
          <RegisterModal/>
          <Navbar currentUser={ currentUser }/>
        </ClientOnly>
        <div className="pb-10 pt-28 min-h-full h-fit min-w-full w-fit">
          {children}
        </div>
      </body>
    </html>
  )
}
