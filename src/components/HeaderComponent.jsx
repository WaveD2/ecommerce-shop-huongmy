import React, {useState} from "react"
import {Link, NavLink} from "react-router-dom"
import logo from "../assets/logo.png"
import NavbarComponent from "./NavbarComponent"
import {MdClose, MdMenu} from "react-icons/md"
import {FaShoppingCart, FaUser} from "react-icons/fa"
import {HiOutlineLogout} from "react-icons/hi"

const HeaderComponent = () => {
	const [menuOpen, setMenuOpen] = useState(false)

	const toggleMenu = () => {
		setMenuOpen((prev) => !prev)
	}
	return (
		<header className="fixed top-0 left-0 m-auto max_add_container w-full bg-white ring-1 ring-slate-900/5 z-10">
			<div className="px-4 flexBetween py-2 max-xs:px-2">
				<div>
					<Link src="/">
						<img src={logo} alt="logo" height={66} width={66} />
					</Link>
				</div>
				{/* Navbar desktop */}
				<NavbarComponent
					containerStyles={"hidden md:flex gap-x-5 xl-gap-x-10 "}
				/>
				{/* Navbar mobile */}
				<NavbarComponent
					containerStyles={`${
						menuOpen
							? "flex item-start flex-col gap-y-8 fixed top-20 right-[20%] p-8 bg-gray-200 rounded-3xl shadow-md w-64 medium-16 ring-1 ring-late-900/5 transition-all duration-300"
							: "hidden"
					}`}
				/>
				{/* : 	"flex item-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-while rounded-3xl shadow-md w-64 medium-16 ring-1 ring-late-900/5 transition-all duration-300" */}
				<div className="flexBetween sm:gap-x-6 text-base ">
					{!menuOpen ? (
						<MdMenu
							className="md:hidden cursor-pointer hover:text-secondary mr-2 ring-1 ring-slate-900/30 h-8 w-8 rounded-full"
							onClick={toggleMenu}
						/>
					) : (
						<MdClose
							className="md:hidden cursor-pointer hover:text-secondary mr-2 ring-1 ring-slate-900/30 h-8 w-8 rounded-full"
							onClick={toggleMenu}
						/>
					)}
				</div>

				<div className="flexBetween sm:gap-x-6">
					<NavLink to={"cart-page"} className="flex">
						<FaShoppingCart className="p-1 h-8 w-8 ring-slate-900/30 ring-1 rounded-full" />
						<span className="relative right-2 top-[-8px] flexCenter w-5 h-5 rounded-full bg-secondary text-white font-medium ">
							0
						</span>
					</NavLink>
					<NavLink to={"logout"} className="btn_secondary_outline flexCenter">
						<HiOutlineLogout className="p-1 h-8 w-8" />
						<span className="text-base text-white font-semibold">Out</span>
					</NavLink>
					{/* <NavLink to={"login"} className="btn_secondary_outline flexCenter">
						<FaUser className="p-1 h-8 w-8" />
						<span className="text-base text-white font-semibold">Login</span>
					</NavLink> */}
				</div>
			</div>
		</header>
	)
}

export default HeaderComponent
