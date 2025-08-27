import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"

export function Layout() {
  return (
    <div>
      <Navbar />
      <section className="bg-[#e7e8e7] flex justify-center">
        <Outlet />
      </section>
    </div>
  )
}
