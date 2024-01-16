import { Link } from "react-router-dom";

import "./index.scss";

interface I_CardLinkProps {
	title: string;
	link: string;
	description?: string;
	Icon?: any;
	tags?: any[];
}

function CardLink(props: I_CardLinkProps) {
	return (
		<Link to={props.link} className="card-link__link-unstyle">
			<div className="card-link__wrapper">
				<div className="card-link__inner-wrap">
					{props.Icon && (
						<div className="card-link__img-wrap">{props.Icon}</div>
					)}

					<div>
						<h2 className="card-link__title">{props.title}</h2>

						{props.description && (
							<p className="card-link__description">{props.description}</p>
						)}
					</div>
				</div>
			</div>
		</Link>
	);
}

export default CardLink;
