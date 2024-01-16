// import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import icon from "../../assets/icon.svg";
import "./Navbar.scss";

import toolsIcon from "../../assets/svgs/tools.svg";
import snippetIcon from "../../assets/svgs/code.svg";
import sheetsIcon from "../../assets/svgs/papers.svg";

function Navbar() {
	return (
		<div className="navbar__wrapper">
			<Link to="/">
				<img width="32" alt="icon" src={icon} />
			</Link>

			<div className="navbar__right-side">
				<Link to="/">
					<div className="navbar__link-wrap">
						<img
							src={toolsIcon}
							className="svg-filter"
							style={{
								width: "1rem",
								height: "1rem",
							}}
						/>

						<p className="navbar__link-text">Tools</p>
					</div>
				</Link>

				<Link to="/snippets">
					<div className="navbar__link-wrap">
						<img
							src={snippetIcon}
							className="svg-filter"
							style={{
								width: "1rem",
								height: "1rem",
							}}
						/>

						<p className="navbar__link-text">Snippets</p>
					</div>
				</Link>

				<Link to="/cheatsheets">
					<div className="navbar__link-wrap">
						<img
							src={sheetsIcon}
							className="svg-filter"
							style={{
								width: "1rem",
								height: "1rem",
							}}
						/>

						<p className="navbar__link-text">Cheat Sheets</p>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
