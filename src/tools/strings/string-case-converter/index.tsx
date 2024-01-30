import { useState, useEffect, ChangeEvent } from "react";
import "./style.scss";

function StringCaseConverter() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("UPPER CASE");
  const [showToast, setShowToast] = useState(false);
  const options = [
    "UPPER CASE",
    "lower case",
    "camelCase",
    "snake_case",
    "kebab-case",
  ];

  useEffect(() => {
    switch (selectedOption) {
      case "UPPER CASE":
        return convertToUpperCase(inputValue);
      case "lower case":
        return convertToLowerCase(inputValue);
      case "camelCase":
        return convertToCamelCase(inputValue);
      case "snake_case":
        return convertToSnakeCase(inputValue);
      case "kebab-case":
        return convertToKebabCase(inputValue);
    }
  }, [selectedOption, inputValue]);

  function handleInputChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setInputValue(event.target.value);
  }

  function convertToKebabCase(input: string) {
    let words = input
      .split(" ")
      .map((word) => {
        return word.toLocaleLowerCase();
      })
      .join("-");

    setOutputValue(words);
  }

  function convertToSnakeCase(input: string) {
    let words = input
      .split(" ")
      .map((word) => {
        return word.toLocaleLowerCase();
      })
      .join("_");

    setOutputValue(words);
  }

  function convertToCamelCase(input: string) {
    let words = input
      .split(" ")
      .map((word, index) => {
        if (index == 0) {
          return word.toLowerCase();
        }

        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join("");

    setOutputValue(words);
  }

  function convertToUpperCase(input: string) {
    setOutputValue(input.toLocaleUpperCase());
  }

  function convertToLowerCase(input: string) {
    setOutputValue(input.toLowerCase());
  }

  function handleCopyClick() {
    navigator.clipboard.writeText(outputValue);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 1000);
  }

  return (
    <div className="string-case-converter">
      <div className="string-case-converter__content">
        <div className="string-case-converter__wrapper">
          <p>Input</p>

          <select onChange={(event) => setSelectedOption(event.target.value)}>
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
          onChange={handleInputChange}></textarea>
      </div>
      <div className="string-case-converter__content">
        <div className="string-case-converter__wrapper">
          <p>Output</p>
          <button
            className="string-case-converter__button"
            onClick={handleCopyClick}>
            Copy
          </button>

          <div
            className={`string-case-converter__toast ${
              showToast ? "string-case-converter__toast--shown" : ""
            }`}>
            <p>Copied!</p>
          </div>
        </div>

        <textarea
          className="string-case-converter__text-area"
          value={outputValue}></textarea>
      </div>
    </div>
  );
}

export default StringCaseConverter;
