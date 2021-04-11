import React, {useState} from 'react'

export const AddRegex = () => {

	const [inputValue, setInputValue] = useState('')
	const [regex, setRegex] = useState('')
	const [showCopy, setShowCopy] = useState(false);

	const handleInputChange = (e) => {
		setInputValue(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		getRegex(inputValue)
		setShowCopy(false)
		setInputValue('')
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

	const handleCopy = () => {
		const textoRegex = document.querySelector('.texto-regex')
		textoRegex.select()
		document.execCommand('copy')
		setShowCopy(true)
	}

	return (
		<>
			<div className="input-content">
				<h2>Ingresa tu Regex</h2>
				<form onSubmit={handleSubmit}>
					<div className="search-content">
						<input
							className="input-search"
							type="text"
							value={inputValue}
							onChange={handleInputChange}
						/>
					</div>
				</form>
			</div>
			{
				regex && (
					<div className="regex-content animate__animated animate__fadeInRightBig">
						<i class="fas fa-copy" onClick={handleCopy}></i>
						<input className="texto-regex" type="text" value={regex}/>
					</div>
				)
			}
			{
				showCopy && (
					<div className="text-copy-content animate__animated animate__fadeIn">
						<p>Regex Copiado</p>
						<i class="far fa-check-circle"></i>
					</div>
				)
			}
		</>
	)
}
