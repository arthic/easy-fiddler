import React from 'react'
import { useGetRegex } from '../hooks/useGetRegex'

export const Regex = ({urlRegex}) => {
	// state es el producto del custom hook
	// desestructuracion de la imagen
	const {url} = useGetRegex(urlRegex)
	return (
		<>
			<p>{url}</p>
		</>
	)
}

