import { ReactNode } from 'react'
import { Header } from '../components/header.component'
import { cookies } from 'next/headers'

export default async function WebviewLayout({
  children,
}: {
  children: ReactNode
}) {
  const cookieStore = cookies()

  const deviceHasTopNotch =
    cookieStore.get('deviceHasTopNotch')?.value === 'true'

  return (
    <>
      <Header deviceHasTopNotch={deviceHasTopNotch} />
      <main className="w-full h-full">{children}</main>
    </>
  )
}
