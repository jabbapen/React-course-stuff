import axios from 'axios'

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID f9gRi5FNaXanyaDVbxXL4crcEyAzYoo5n36_xvd4AOs',
	},
})
