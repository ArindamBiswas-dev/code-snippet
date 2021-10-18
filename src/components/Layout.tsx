import { Navbar } from './Navbar'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="px-4 w-full" style={{ maxWidth: '1440px' }}>
        <Navbar />
        <main className="py-5 px-2 md:mt-10">{children}</main>
      </div>
    </div>
  )
}
