/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useReducer, useState } from "react";

import Navbar from "@src/components/navbar";
import Sidebar from "@src/components/sidebar";

// import './index.scss';\

function UrlParser() {
	const [text, setText] = useState<string>(
		`Here is an example of some text. It will be analyzed by this tool.

Each word, character, line and sentence is counted.

It is actively updated as you type.`,
	);
	const [wordCountLength, setwordCountLength] = useState<string>("");

	useEffect(() => {
    const words = text.split(' ');
    let wordCount = 0;
    words.forEach((word) => {
      if (word.trim() !== '') {
        wordCount++;
      }
    });

    const lines = text.split('\n');
    let lineCount = 0;
    let sentenceCount = 0;
    lines.forEach((line) => {
      if (line.trim() !== '') {
        lineCount++;
        // Also calculate sentences for each paragraph here
        const sentences = (line + " ").split(/[.!?]/);
        sentences.forEach((sentence) => {
          if (sentence.trim() !== '') {
            sentenceCount++;
          }
        });
      }
    });

    setwordCountLength(`Word Count: ${wordCount}
Character Count (Including Whitespaces): ${text.length}
Sentence Count: ${sentenceCount}
Paragraph Count: ${lineCount}
    `);
	}, [text]);

	function onChangeText(e: any): void {
		setText(e.target.value);
	}

	return (
		<div className="jwt__decoder__wrapper">
			<h1 className="jwt__decoder__title">Word Counter</h1>

			<div className="jwt__decoder__inner-wrap">
				<div className="jwt__decoder__right-wrap">
					<div>
						<p>Text</p>
						<textarea
							className="jwt__decoder__textarea"
							name=""
							id=""
							value={text}
							rows={10}
							onChange={onChangeText}
						/>
					</div>

					<div>
						<p>Word Count</p>
						<textarea
							className="jwt__decoder__textarea"
							name=""
							id=""
							value={wordCountLength}
							rows={3}
							disabled
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UrlParser;
