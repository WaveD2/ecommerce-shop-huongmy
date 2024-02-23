import {NavLink} from "react-router-dom"
import {MdCategory, MdContacts, MdHomeFilled, MdShop2} from "react-icons/md"

const NavbarComponent = ({containerStyles}) => {
	return (
		<nav className={containerStyles}>
			<NavLink
				className={({isActive}) => (isActive ? "active_link" : "")}
				to="/"
			>
				<div className="flexCenter gap-x-2 text-base lg:text-xl">
					<MdHomeFilled size={24} /> Home
				</div>
			</NavLink>
			<NavLink
				className={({isActive}) => (isActive ? "active_link" : "")}
				to="/mens"
			>
				<div className="flexCenter gap-x-2 text-base lg:text-xl">
					<MdCategory size={24} />
					Men's
				</div>
			</NavLink>
			<NavLink
				className={({isActive}) => (isActive ? "active_link" : "")}
				to="/women"
			>
				<div className="flexCenter gap-x-2 text-base lg:text-xl ">
					<MdShop2 size={24} />
					Women's
				</div>
			</NavLink>
			<NavLink
				className={({isActive}) => (isActive ? "active_link" : "")}
				to="/kids"
			>
				<div className="flexCenter gap-x-2 text-base lg:text-xl">
					<MdContacts size={24} />
					Kid's
				</div>
			</NavLink>
		</nav>
	)
}

export default NavbarComponent
