import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Navbar from '../../../components/navbar';
import Sidebar from '../../../components/sidebar';
import './string-case-converter.css';
import { Button } from '@controlkit/button';

// controlkit button style not working properly
// convert everything into rem/em
// ask about making things full width/height without breaking shit (position absolute)
// ENUM for options? make it a type?

//try rearranging things using grid for layout

function StringCaseConverter() {
	const [inputValue, setInputValue] = useState('');
	const [outputValue, setOutputValue] = useState('');
	const [selectedOption, setSelectedOption] = useState('UPPER CASE');

	const options = [
		'UPPER CASE',
		'lower case',
		'camelCase',
		'snake_case',
		'kebab-case',
	];

	useEffect(() => {
		switch (selectedOption) {
			case 'UPPER CASE':
				return ConvertToUpperCase(inputValue);
			case 'lower case':
				return ConvertToLowerCase(inputValue);
			case 'camelCase':
				return ConvertToCamelCase(inputValue);
			case 'snake_case':
				return ConvertToSnakeCase(inputValue);
			case 'kebab-case':
				return ConvertToKebabCase(inputValue);
		}
	}, [selectedOption, inputValue]);

	function HandleInputChange(event: ChangeEvent<HTMLTextAreaElement>) {
		setInputValue(event.target.value);
	}

	function ConvertToKebabCase(input: string) {
		let words = input
			.split(' ')
			.map((word) => {
				return word.toLocaleLowerCase();
			})
			.join('-');

		setOutputValue(words);
	}

	function ConvertToSnakeCase(input: string) {
		let words = input
			.split(' ')
			.map((word) => {
				return word.toLocaleLowerCase();
			})
			.join('_');

		setOutputValue(words);
	}

	function ConvertToCamelCase(input: string) {
		let words = input
			.split(' ')
			.map((word, index) => {
				if (index == 0) {
					return word.toLowerCase();
				}

				return (
					word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
				);
			})
			.join('');

		setOutputValue(words);
	}

	function ConvertToUpperCase(input: string) {
		setOutputValue(input.toLocaleUpperCase());
	}

	function ConvertToLowerCase(input: string) {
		setOutputValue(input.toLowerCase());
	}
	return (
		<div>
			<Navbar />
			<Sidebar />

			<div className="string-case-converter">
				<div className="string-case-converter__left">
					<div className="string-case-converter__wrapper">
						<h1>Input</h1>
						<Button title="Test" />
						<select
							onChange={(event) =>
								setSelectedOption(event.target.value)
							}
						>
							{options.map((option) => {
								return (
									<option key={option} value={option}>
										{option}
									</option>
								);
							})}
						</select>
					</div>
					<textarea
						className="string-case-converter__text-area"
						value={inputValue}
						onChange={HandleInputChange}
					></textarea>
				</div>
				<div className="string-case-converter__right">
					<div className="string-case-converter__wrapper">
						<h1>Output</h1>
						<button className="string-case-converter__button">
							Copy
						</button>
					</div>

					<textarea
						className="string-case-converter__text-area"
						value={outputValue}
					></textarea>
				</div>
			</div>
		</div>
	);
}

export default StringCaseConverter;
