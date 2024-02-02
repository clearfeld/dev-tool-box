import "../../index.scss";
import "./index.scss";

interface I_SectionProps {
	title: string;
	cursors: string[];
}

function Section(props: I_SectionProps) {
	return (
		<div
        className="cursors__section"
        >
			<p className="cursors__title">{props.title}</p>

			<div
            className="cursors__card-wrapper"
            >
				{props.cursors.map((cursor: string, _tidx: number) => {
					return (
						<div
							key={cursor}
							className="cursors__card"
							style={{
								cursor: cursor,
							}}
						>
							{cursor}
						</div>
					);
				})}
			</div>
		</div>
	);
}

function CSSCursors() {
	return (
		<div className="micro-tool-wrap">
			<div>
				<Section title="General Purpose" cursors={["default", "none"]} />

				<Section
					title="Status"
					cursors={[
						"help",
						"pointer",
						"progress",
						"wait",
						"context-menu",
						"not-allowed",
					]}
				/>

				<Section
					title="Selection"
					cursors={["cell", "crosshair", "text", "vertical-text"]}
				/>

				<Section title="Zoom" cursors={["zoom-in", "zoom-out"]} />

				<Section
					title="Drag and Drop"
					cursors={["alias", "copy", "move", "no-drop", "grab", "grabbing"]}
				/>

				<Section
					title="Status"
					cursors={[
						"all-scroll",
						"col-resize",
						"row-resize",
						"n-resize",
						"e-resize",
						"s-resize",
						"w-resize",
						"ns-resize",
						"ew-resize",
						"ne-resize",
						"nw-resize",
						"se-resize",
						"sw-resize",
						"nesw-resize",
						"nwse-resize",
					]}
				/>
			</div>
		</div>
	);
}

export default CSSCursors;
