import LoginBtn from "../btn/login-btn"
import { ModeToggle } from "../ui/mode-toggle"
import Logo from "./logo"
import NavLinks from "./nav-links"

const Navbar = () => {
  return (
    <header className='h-14 flex items-center justify-between '>
      <Logo />
      <NavLinks />
      <div className='flex items-center gap-2'>
        <ModeToggle />
        <LoginBtn />
      </div>
    </header>
  )
}

export default Navbar
