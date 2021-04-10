import {useState, useEffect} from 'react'
import { getRegex } from '../helpers/getRegex'

export const useGetRegex = (url) => {
	const [state, setState] = useState({url})

	console.log(state);
	console.log(setState);

	useEffect( () => {
		getRegex(url)
		setState({url})
	}, [url])

	return state
}