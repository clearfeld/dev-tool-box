export function GroupBlock(props: any) {
	return (
		<div className="cheatsheet__commons__flex-child">
			<h3>{props.data.title}</h3>

			<div className="cheatsheet__commons__group-block">
				{props.data.items.map((item, idx) => {
					return <HelpLine key={idx} line_obj={item} />;
				})}
			</div>
		</div>
	);
}

export function HelpLine(props: any) {
	return (
		<div>
			<h4 className="cheatsheet__commons__help-line__title">
				{props.line_obj.title}
			</h4>

			<div className="cheatsheet__commons__help-line__cmd">
				{props.line_obj.cmd}
			</div>
		</div>
	);
}
