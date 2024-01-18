/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';

// import Navbar from '../../../components/navbar';
// import Sidebar from '../../../components/sidebar';

// TODO: add verify support
// TODO: add encode / sign support
// TODO: probably should support half screen size and lower

import './index.scss';

function JwtDecoder() {
	const [text, setText] = useState<string>('');

	const [header, setHeader] = useState<string>('');
	const [payload, setPayload] = useState<string>('');

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	function onChangeText(e: any): void {
		setText(e.target.value);

		try {
			const h = jwtDecode(e.target.value, { header: true });
			setHeader(JSON.stringify(h, null, 2));

			const p = jwtDecode(e.target.value);
			setPayload(JSON.stringify(p, null, 2));
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<div className="micro-tool-wrap">
			<h1 className="jwt__decoder__title">Jwt Decoder</h1>

			<div className="jwt__decoder__inner-wrap">
				<textarea
					className="jwt__decoder__textarea"
					name=""
					id=""
					value={text}
					onChange={onChangeText}
				/>

				<div className="jwt__decoder__right-wrap">
					<textarea
						className="jwt__decoder__textarea"
						name=""
						id=""
						value={header}
						disabled
					/>
					<textarea
						className="jwt__decoder__textarea"
						name=""
						id=""
						value={payload}
						disabled
					/>
				</div>
			</div>
		</div>
	);
}

export default JwtDecoder;
