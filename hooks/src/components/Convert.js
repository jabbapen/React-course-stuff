import React, { useState, useEffect } from 'react'
import axios from 'axios'

// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const Convert = ({ language, text }) => {
	const [translated, setTranslated] = useState('')
	const [debouncedText, setDebouncedText] = useState(text)

	useEffect(() => {
		const currentTimer = setTimeout(() => {
			if (text) {
				setDebouncedText(text)
			}
		}, 1000)

		return () => {
			clearTimeout(currentTimer)
		}
	}, [text])

	useEffect(() => {
		const doTranslation = async () => {
			const { data } = await axios.post(
				'https://translation.googleapis.com/language/translate/v2',
				{},
				{
					params: {
						q: debouncedText,
						target: language.value,
						key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
					},
				}
			)

			setTranslated(data.data.translations[0].translatedText)
		}

		doTranslation()
	}, [debouncedText, language])

	return (
		<div>
			<h1 className="ui header">{translated}</h1>
		</div>
	)
}

export default Convert
