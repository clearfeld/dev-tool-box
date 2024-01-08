import { ChangeEvent, FormEvent, useState } from 'react';
import Navbar from '../../../components/navbar';
import Sidebar from '../../../components/sidebar';
import './string-case-converter.css';
import { Button } from '@controlkit/button';

// controlkit button style not working properly
// convert everything into rem/em
// ask about making things full width/height without breaking shit (position absolute)
// ENUM for options? make it a type?
// think about how I want to handle dropdown text changes

function StringCaseConverter() {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState(''); 
  const [selectedOption, setSelectedOption] = useState('UPPER CASE');

  const options = [
    "UPPER CASE",
    "lower case",
    "camelCase",
    "snake_case",
    "kebab-case"
  ]

  function HandleInputChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setInputValue(event.target.value);
    console.log(selectedOption);
    switch(selectedOption) {
      case "UPPER CASE":
        return ConvertToUpperCase(event.target.value);
      case "lower case":
        return ConvertToLowerCase(event.target.value);
    }

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
						<button className="string-case-converter__button">
							Clear
						</button>
            <select onChange={(event) => setSelectedOption(event.target.value)}>
              {options.map((option) => {
                return (<option key={option} value={option}>{option}</option>)     
              })}
            </select>
					</div>

					<textarea className='string-case-converter__text-input' value={inputValue} onChange={HandleInputChange}></textarea>
				</div>
				<div className="string-case-converter__right">
					<div className="string-case-converter__wrapper">
						<h1>Output</h1>
						<button className="string-case-converter__button">
							Clear
						</button>
					</div>

					<textarea className='string-case-converter__text-output' value={outputValue}></textarea>
				</div>
			</div>
		</div>
	);
}

export default StringCaseConverter;
