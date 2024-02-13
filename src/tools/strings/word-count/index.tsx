/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useReducer, useState } from "react";

import Navbar from "@src/components/navbar";
import Sidebar from "@src/components/sidebar";
import OutputBlock from "@src/components/commons/output-block";

// import './index.scss';\

function UrlParser() {
	const [text, setText] = useState<string>(
		`Here is an example of some text. It will be analyzed by this tool.

Each word, character, line and sentence is counted.

It is actively updated as you type.`,
	);
  const [wordCountLength, setWordCountLength] = useState<string>("");
  const [charCountLength, setCharCountLength] = useState<string>("");
  const [sentenceCountLength, setSentenceCountLength] = useState<string>("");
  const [paragraphCountLength, setParagraphCountLength] = useState<string>("");

	useEffect(() => {
    const words = text.split(' ');
    let wordCount = 0;
	for (const word in words) {
		if (word.trim() !== '') {
		  wordCount++;
		}
	}

    const lines = text.split('\n');
    let lineCount = 0;
    let sentenceCount = 0;
	for (const line of lines) {
		if (line.trim() !== '') {
		  lineCount++;
		  // Also calculate sentences for each paragraph here
		  const sentences = (`${line} `).split(/[.!?]/);
		  for (const sentence in sentences) {
			if (sentence.trim() !== '') {
			  sentenceCount++;
			}
		  }
		}
	}

    setWordCountLength(`${wordCount}`);
    setCharCountLength(`${text.length}`);
    setSentenceCountLength(`${sentenceCount}`);
    setParagraphCountLength(`${lineCount}`);
	}, [text]);

	function  onChangeText(e: React.ChangeEvent<HTMLTextAreaElement>): void {
		setText(e.target.value);
	}

	return (
		<div className="micro-tool-wrap">
			<h1 className="jwt__decoder__title">Word Counter</h1>

			<div className="jwt__decoder__inner-wrap">
					<textarea
						className="jwt__decoder__textarea"
						name=""
						id=""
						value={text}
						rows={25}
						onChange={onChangeText}
					/>
				<div className="jwt__decoder__right-wrap">
					<OutputBlock
						description={wordCountLength}
						title="Word Count"
					/>
					<OutputBlock
						description={charCountLength}
						title="Character Count"
					/>
					<OutputBlock
						description={sentenceCountLength}
						title="Sentence Count"
					/>
					<OutputBlock
						description={paragraphCountLength}
						title="Paragraph Count"
					/>
				</div>
			</div>
		</div>
	);
}

export default UrlParser;
