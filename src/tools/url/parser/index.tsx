/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useReducer, useState } from "react";

import Navbar from "@src/components/navbar";
import Sidebar from "@src/components/sidebar";

// import './index.scss';\

function UrlParser() {
	const [text, setText] = useState<string>(
		"http://example.com/path/index.html?message=hello&who=world",
	);
	const [parsedUrl, setParsedUrl] = useState<string>("");

	useEffect(() => {
		try {
			const url = new URL(text);
			var dictStr = ``;
			url.searchParams.forEach((value, key) => {
				dictStr += `  ${key}: "${value}"\n`;
			});

			setParsedUrl(`hostname: "${url.hostname}"
protocol: "${url.protocol}"
origin: "${url.origin}"
path: "${url.pathname}"
search (${url.searchParams.size} fields):
${dictStr}host: "${url.host}"`);
		} catch (error) {
			console.log(error);
		}
	}, [text]);

	function onChangeText(e: any): void {
		setText(e.target.value);
	}

	return (
		<div className="jwt__decoder__wrapper">
			<h1 className="jwt__decoder__title">URL Parser</h1>

			<div className="jwt__decoder__inner-wrap">
				<div className="jwt__decoder__right-wrap">
					<div>
						<p>URL</p>
						<textarea
							className="jwt__decoder__textarea"
							name=""
							id=""
							value={text}
							onChange={onChangeText}
						/>
					</div>

					<div>
						<p>Tree View</p>
						<textarea
							className="jwt__decoder__textarea"
							name=""
							id=""
							value={parsedUrl}
							rows={10}
							disabled
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UrlParser;
