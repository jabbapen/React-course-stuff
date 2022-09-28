import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
	// useEffect is for three things
	// when component first renders (,[])
	// when component renders for first time and any time afterwards (no second argument)
	// when it renders for the first time and any time after when something changes ([data])
	const [term, setTerm] = useState('programming')
	const [debouncedTerm, setDebouncedTerm] = useState(term)
	const [results, setResults] = useState([])

	// useEffect doesn't allow async so either
	// A. make a callback inside useEffect
	// B. make a callback inside useEffect and immediately call it
	// C. just use promise syntac

	useEffect(() => {
		const timerId = setTimeout(() => {
			setDebouncedTerm(term)
		}, 1000)

		return () => {
			clearTimeout(timerId)
		}
	}, [term])

	useEffect(() => {
		const search = async () => {
			const { data } = await axios.get(
				'https://en.wikipedia.org/w/api.php',
				{
					params: {
						action: 'query',
						list: 'search',
						origin: '*',
						format: 'json',
						srsearch: debouncedTerm,
					},
				}
			)

			setResults(data.query.search)
		}

		if (debouncedTerm) {
			search()
		}
	}, [debouncedTerm])

	const onTermChange = (e) => {
		setTerm(e.target.value)
	}

	const renderedResults = results.map((result) => {
		return (
			<div key={result.pageid} className="item">
				<div className="right floated content">
					<a
						href={`https://en.wikipedia.org?curid=${result.pageid}`}
						className="ui button"
					>
						Go
					</a>
				</div>
				<div className="content">
					<div className="header">{result.title}</div>
				</div>
				<span
					dangerouslySetInnerHTML={{ __html: result.snippet }}
				></span>
			</div>
		)
	})
	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label>Enter Search Term</label>
					<input
						value={term}
						onChange={onTermChange}
						className="input"
					/>
				</div>
			</div>
			<div className="ui celled list">{renderedResults}</div>
		</div>
	)
}

export default Search
