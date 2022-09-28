import React from 'react'

class ImageCard extends React.Component {
	constructor(props) {
		super(props)
		this.state = { spans: 0 }
		// this allows us to get access to an html element
		this.imageRef = React.createRef()
	}

	setSpans = () => {
		const height = this.imageRef.current.clientHeight

		const spans = Math.ceil(height / 10)

		this.setState({ spans })
	}

	componentDidMount() {
		// image takes time to render so we don't have height yet
		this.imageRef.current.addEventListener('load', this.setSpans)
	}
	render() {
		const { description, urls } = this.props.image
		return (
			<div style={{ gridRowEnd: `span ${this.state.spans}` }}>
				<img ref={this.imageRef} src={urls.regular} alt={description} />
			</div>
		)
	}
}

export default ImageCard
