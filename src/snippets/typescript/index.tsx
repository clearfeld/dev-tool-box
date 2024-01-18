// import './index.scss';

// import { useEffect, useState } from 'react';

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
// import 'highlight.js/scss/vs2015.scss';
// import 'highlight.js/scss/vs.scss';
import "highlight.js/scss/atom-one-dark.scss";

hljs.registerLanguage("javascript", javascript);

// import * as monaco from 'monaco-editor';

// function MonacoEditorTest() {
// 	const [height, setHeight] = useState<string>('100%');

// 	useEffect(() => {
// 		const hdiv = document.getElementById('test');
// 		if (hdiv) {
// 			const x = monaco.editor.create(hdiv, {
// 				value: [
// 					'function x() {',
// 					'\tconsole.log("Hello world!");',
// 					'}',
// 				].join('\n'),
// 				automaticLayout: true,
// 				readOnly: true,
// 				scrollBeyondLastLine: false,
// 				language: 'javascript',
// 				wordWrap: 'on',
// 				wrappingStrategy: 'advanced',
// 				minimap: {
// 					enabled: false,
// 				},
// 				theme: 'vs-dark',
// 				overviewRulerLanes: 0,
// 			});

// 			setHeight(`${x.getContentHeight() as unknown}px`);

// 			console.log(x, x.getContentHeight());
// 		}
// 	}, []);

// 	return (
// 		<div
// 			style={{
// 				padding: '1rem',
// 				boxSizing: 'border-box',
// 				background: '#121010',
// 				margin: '1rem',
// 				borderRadius: '0.25rem',
// 			}}
// 		>
// 			<div
// 				id="test"
// 				style={{
// 					width: '100%',
// 					height,
// 					// height: '100%',
// 				}}
// 			/>
// 		</div>
// 	);
// }

function CodeSnippet(props: any) {
	return (
		<div
			style={{
				background: "var(--color-border)",
				margin: "1rem",
				borderRadius: "0.5rem",
				padding: "0.25rem 1rem",
			}}
		>
			<p
				style={{
					paddingTop: "0.5rem",
				}}
			>
				{props.title}
			</p>

			<pre
				style={{
					fontFamily: "Roboto",
					// lineHeight: '0.75rem',
					fontSize: "1rem",
					backgroundColor: "#17171a",
					padding: "0.5rem",
					borderRadius: "0.25rem",
				}}
			>
				<code
					style={{
						tabSize: "2rem",
					}}
					dangerouslySetInnerHTML={{
						__html: hljs.highlight(props.code, {
							language: "javascript",
						}).value,
					}}
				/>
			</pre>
		</div>
	);
}

function SnippetsTypescript() {
	return (
		<div className="micro-tool-wrap">
			{/* <MonacoEditorTest /> */}

			<CodeSnippet
				title="Fire an event listener only once"
				code={`const el = document.getElementById("btn");

function myClickHandler(){
	console.log('this click will only fire once')
}

el.addEventListener('click', myClickHandler, {
	once: true,
});`}
			/>
		</div>
	);
}
export default SnippetsTypescript;
