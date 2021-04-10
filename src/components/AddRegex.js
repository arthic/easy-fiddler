import React, {useState} from 'react'
// import { getRegex } from '../helpers/getRegex'


export const AddRegex = () => {

	const [inputValue, setInputValue] = useState('')
	const [regex, setRegex] = useState('')

	const handleInputChange = (e) => {
		setInputValue(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		getRegex(inputValue)
	}

	const getRegex = (url) => {

		function replacer(str) {
			return "\\" + str;
		}
		function replacerOne(str) {
			return `^${str}`
		}
		function replacerTwo() {
			return "v=.*"
		}
		let resultado = url
			.replace(/[-./_?]/g, replacer)
			.replace(/https:/, replacerOne)
			.replace("EXACT", "regex")
			.replace(/v=.*/, replacerTwo);
		setRegex(resultado)
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="search-contend">
					<i className="fas fa-search"></i>
					<input
						type="text"
						value={inputValue}
						onChange={handleInputChange}
					/>
				</div>
			</form>

			<p>{regex}</p>
		</>
	)
}
