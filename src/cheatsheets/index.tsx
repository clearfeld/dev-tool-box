// import './index.scss';

import CardLink from "@src/components/commons/card-block";
import vimLogo from "@assets/svgs/vim.svg";
import packageLogo from "@assets/svgs/package.svg";

function Cheatsheets() {
	return (
		<div className="selector-wrap">
			<CardLink
				title="NPM"
				link="/cheatsheets/npm"
				description="Cheat sheet for npm"
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
