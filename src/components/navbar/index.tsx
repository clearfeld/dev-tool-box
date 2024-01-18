// import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import icon from "../../assets/icon.svg";
import "./navbar.scss";

import toolsIcon from "../../assets/svgs/tools.svg";
import snippetIcon from "../../assets/svgs/code.svg";
import sheetsIcon from "../../assets/svgs/papers.svg";
import { ReactElement, useState } from "react";

type T_NavRoutes = "Tools" | "Snippets" | "Cheatsheets";

interface I_NavLinkProps {
	to: string;
	title: T_NavRoutes;
	active: boolean;
	setCurRoute: (arg: T_NavRoutes) => void;
	Img: ReactElement;
}

function NavLink(props: I_NavLinkProps) {
	return (
		<Link
			className="navbar__link"
			to={props.to}
			onClick={() => {
				props.setCurRoute(props.title);
			}}
		>
			<div
				className={`navbar__link-wrap ${
					props.active && "navbar__link-wrap-active"
				}`}
			>
				{props.Img}

				<p className="navbar__link-text">{props.title}</p>
			</div>
		</Link>
	);
}

function Navbar() {
	const [curRoute, setCurRoute] = useState<T_NavRoutes>("Tools");

	return (
		<div className="navbar__wrapper">
			<Link to="/">
				<img width="32" alt="icon" src={icon} />
			</Link>

			<div className="navbar__right-side">
				<NavLink
					to="/"
					title="Tools"
					active={curRoute === "Tools"}
					setCurRoute={setCurRoute}
					Img={
						<img
							src={toolsIcon}
							className="svg-filter"
							style={{
								width: "1rem",
								height: "1rem",
							}}
							alt=""
						/>
					}
				/>

				<NavLink
					to="/snippets"
					title="Snippets"
					active={curRoute === "Snippets"}
					setCurRoute={setCurRoute}
					Img={
						<img
							src={snippetIcon}
							className="svg-filter"
							style={{
								width: "1rem",
								height: "1rem",
							}}
							alt=""
						/>
					}
				/>

				<NavLink
					to="/cheatsheets"
					title="Cheatsheets"
					active={curRoute === "Cheatsheets"}
					setCurRoute={setCurRoute}
					Img={
						<img
							src={sheetsIcon}
							className="svg-filter"
							style={{
								width: "1rem",
								height: "1rem",
							}}
							alt=""
						/>
					}
				/>
			</div>
		</div>
	);
}

export default Navbar;
