import React, {useState} from 'react'
import { getRegex } from '../helpers/getRegex'


export const InputRegex = () => {

	const [inputValue, setInputValue] = useState('')

	const handleInputChange = (e) => {
		setInputValue(e.target.value)
		console.log('Cambio el input');
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		getRegex(inputValue)
		console.log('handleSubmit', inputValue);
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
			{/* <p>{resultado}</p> */}
		</>
	)
}
