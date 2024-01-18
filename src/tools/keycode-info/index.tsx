import "./index.scss";

import { useEffect, useState } from "react";

interface I_InfoBlockProps {
	title: string;
	value: string | undefined;
}

function InfoBlock(props: I_InfoBlockProps) {
	return (
		<div className="tools__keycode-info__info-block__wrapper">
			<p className="tools__keycode-info__info-block__title">{props.title}</p>

			<div className="tools__keycode-info__info-block__inner-wrap">
				<p>{props.value}</p>
			</div>
		</div>
	);
}

function KeycodeInfo() {
	const [keyCode, setKeyCode] = useState();

	const [key, setKey] = useState<any>();
	const [code, setCode] = useState<any>();
	const [location, setLocation] = useState<string>();
	const [which, setWhich] = useState<any>();
	// const [charCode, setCharCode] = useState();

	const [control, setControl] = useState<any>();
	const [alt, setAlt] = useState<any>();
	const [shift, setShift] = useState<any>();
	const [meta, setMeta] = useState<any>();

	useEffect(() => {
		document.addEventListener("keydown", Test);

		return () => {
			document.addEventListener("keydown", Test);
		};
	}, []);

	function Test(e: any): void {
		e.preventDefault();

		console.log(e);

		setKeyCode(e.keyCode);
		setKey(e.key);
		setCode(e.code);

		switch (e.location) {
			case 0:
				setLocation("0 - General keys");
				break;
			case 1:
				setLocation("1 - Left side modifier keys");
				break;
			case 2:
				setLocation("2 - Right side modifier keys");
				break;
		}
		setWhich(e.which);
		// setCharCode(e.charCode);

		setControl(e.ctrlKey);
		setAlt(e.altKey);
		setShift(e.shiftKey);
		setMeta(e.metaKey);
	}

	return (
		<div className="micro-tool-wrap">
			{!keyCode ? (
				<div className="tools__keycode-info__press-key">
					Pres any key to get the Javascript event keycode
				</div>
			) : (
				<div>
					<div className="tools__keycode-info__main-text">
						{key} - {which}
					</div>

					<div className="tools__keycode-info__info-block-wrap">
						<InfoBlock title="key" value={key} />
						<InfoBlock title="code" value={code} />
						<InfoBlock title="location" value={location} />
						<InfoBlock title="which" value={which} />
						{/* <div>charCode - {charCode}</div> */}

						<InfoBlock title="control" value={control ? "true" : "false"} />
						<InfoBlock title="alt" value={alt ? "true" : "false"} />
						<InfoBlock title="shift" value={shift ? "true" : "false"} />
						<InfoBlock title="meta" value={meta ? "true" : "false"} />
					</div>
				</div>
			)}
		</div>
	);
}

export default KeycodeInfo;
