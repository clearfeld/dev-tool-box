// import './index.scss';

import { Link } from "react-router-dom";
import CardLink from "../components/commons/card-block";
import typescriptLogo from "../assets/svgs/typescriptsvg.svg";

function Snippets() {
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
				title="Typescript"
				link="/snippets/typescript"
				description="Snippet collection for typescript"
				Icon={
					<img
						src={typescriptLogo}
						// className="svg-filter"
						style={{
							filter: "grayscale(1)",
							width: "2rem",
							height: "2rem",
						}}
					/>
				}
			/>

			{/* <CardLink title="Typescript" link="/cheatsheets/typescript" /> */}
		</div>
	);
}

export default Snippets;
