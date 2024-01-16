// import './index.scss';

import { Link } from "react-router-dom";
import CardLink from "../components/commons/card-block";
import vimLogo from "../assets/svgs/vim.svg";
import packageLogo from "../assets/svgs/package.svg";

function Cheatsheets() {
	return (
		<div
			style={{
				position: "absolute",
				marginLeft: "var(--sidebar-size)",
				marginTop: "4rem",
				top: "0",
				left: "0",
				display: "flex",
				flexWrap: "wrap",
			}}
		>
			<CardLink
				title="NPM"
				link="/cheatsheets/npm"
				description="Cheat sheet for the vim editor"
				Icon={
					<img
						src={packageLogo}
						className="svg-filter"
						style={{
							// filter: "grayscale(1)",
							width: "2rem",
							height: "2rem",
						}}
					/>
				}
			/>

			<CardLink
				title="Vim"
				link="/cheatsheets/vim"
				description="Cheat sheet for the vim editor"
				Icon={
					<img
						src={vimLogo}
						style={{
							filter: "grayscale(1)",
							width: "2rem",
							height: "2rem",
						}}
					/>
				}
				// Icon={<JWTSVG width="2.5rem" height="2.5rem" />}
			/>

			{/* <CardLink title="Typescript" link="/cheatsheets/typescript" /> */}
		</div>
	);
}

export default Cheatsheets;
