import "./index.scss";

interface I_OutputBlockProps {
	title: string;
	description: string;
}

function OutputBlock(props: I_OutputBlockProps) {
	return (
		<div className="card-output__output-unstyle">
			<div className="card-output__wrapper">
				<div className="card-output__inner-wrap">
					<div>
						<p className="card-output__title">{props.title}</p>
						<h2 className="card-output__description">{props.description}</h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OutputBlock;
