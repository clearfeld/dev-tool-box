/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useReducer, useState } from 'react';

import Navbar from '@src/components/navbar';
import Sidebar from '@src/components/sidebar';

// import './index.scss';\

function UrlEncoderDecoder() {
	const [text, setText] = useState<string>('"https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"');
    const [decoded, setDecoded] = useState<string>('');

	useEffect(() => {
		const decoded = decodeURI(text);
		setDecoded(decoded);
	}, [text]);

	function onChangeUrl(e: any): void {
		setText(e.target.value);
	}

	function onChangeDecoded(e: any): void {
		setDecoded(e.target.value);
		const encoded = encodeURI(e.target.value);
		setText(encoded);
		// change the text too
	}

	return (
		<div className="jwt__decoder__wrapper">
			<h1 className="jwt__decoder__title">URL Parser</h1>

			<div className="jwt__decoder__inner-wrap">
				<div className="jwt__decoder__right-wrap">
					<div>
						<p>Encoded</p>
						<textarea
							className="jwt__decoder__textarea"
							name=""
							id=""
							value={text}
                            onChange={onChangeUrl}
						/>
					</div>

					<div>
						<p>Decoded</p>
						<textarea
							className="jwt__decoder__textarea"
							name=""
							id=""
							value={decoded}
							rows={10}
							onChange={onChangeDecoded}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UrlEncoderDecoder;
