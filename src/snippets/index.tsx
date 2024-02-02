// import './index.scss';

// import { Link } from "react-router-dom";
import CardLink from "@src/components/commons/card-block";
import typescriptLogo from "@assets/svgs/typescriptsvg.svg";

function Snippets() {
	return (
		<div className="selector-wrap">
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
