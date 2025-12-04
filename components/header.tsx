import Image from "next/image"
import Link from "next/link"
import Navitems from "./Navitems"
import UserDropdown from "./UserDropdown"

function Header() {

    return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper">
                <Link href="/">
                <Image alt="" src="/assets/icons/loogoo.png" width={150} height={40} className="cursor-pointer"/>
                </Link>
                <nav className="hidden sm:block">
                    <Navitems/>
                </nav>
                <UserDropdown/>
            </div>
        </header>
    )
}

export default Header
