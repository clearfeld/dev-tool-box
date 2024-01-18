/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
// import { jwtDecode } from 'jwt-decode';

import { md5, sha1, sha224, sha256, sha512 } from 'hash-wasm';

// import Navbar from '../../../components/navbar';
// import Sidebar from '../../../components/sidebar';

// TODO: add verify support
// TODO: add encode / sign support
// TODO: probably should support half screen size and lower

// import './index.scss';

function HashGenerator() {
	const [text, setText] = useState<string>('Hello, world!');

	const [md5Text, setMd5Text] = useState<string>('');
	const [sha1Text, setSha1Text] = useState<string>('');
	const [sha224Text, setSha224Text] = useState<string>('');
	const [sha256Text, setSha256Text] = useState<string>('');
	const [sha512Text, setSha512Text] = useState<string>('');

	useEffect(() => {
		md5(text)
			.then((res: string) => {
				setMd5Text(res);
			})
			.catch((err) => {
				console.error('Failed md5 - ', err);
			});

		sha1(text)
			.then((res: string) => {
				setSha1Text(res);
			})
			.catch((err) => {
				console.error('Failed md5 - ', err);
			});

		sha224(text)
			.then((res: string) => {
				setSha224Text(res);
			})
			.catch((err) => {
				console.error('Failed md5 - ', err);
			});

		sha256(text)
			.then((res: string) => {
				setSha256Text(res);
			})
			.catch((err) => {
				console.error('Failed md5 - ', err);
			});

		sha512(text)
			.then((res: string) => {
				setSha512Text(res);
			})
			.catch((err) => {
				console.error('Failed md5 - ', err);
			});
	}, [text]);

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	function onChangeText(e: any): void {
		setText(e.target.value);
	}

	return (
		<div className="micro-tool-wrap">
			<h1 className="jwt__decoder__title">Hash Generator</h1>

			<div className="jwt__decoder__inner-wrap">
				<textarea
					className="jwt__decoder__textarea"
					name=""
					id=""
					value={text}
					onChange={onChangeText}
				/>

				<div className="jwt__decoder__right-wrap">
					<div>
						<p>Md5 Hash</p>
						<textarea
							className="jwt__decoder__textarea"
							name=""
							id=""
							value={md5Text}
							disabled
						/>
					</div>

					<div>
						<p>Sha1 Hash</p>
						<textarea
							className="jwt__decoder__textarea"
							name=""
							id=""
							value={sha1Text}
							disabled
						/>
					</div>

					<div>
						<p>Sha224 Hash</p>
						<textarea
							className="jwt__decoder__textarea"
							name=""
							id=""
							value={sha224Text}
							disabled
						/>
					</div>

					<div>
						<p>Sha256 Hash</p>
						<textarea
							className="jwt__decoder__textarea"
							name=""
							id=""
							value={sha256Text}
							disabled
						/>
					</div>

					<div>
						<p>Sha512 Hash</p>
						<textarea
							className="jwt__decoder__textarea"
							name=""
							id=""
							value={sha512Text}
							disabled
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HashGenerator;
