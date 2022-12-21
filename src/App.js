import React from 'react';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Main } from './layout/Main';
import { Preloader } from './components/Preloader';


const APIKEY = process.env.REACT_APP_APIKEY;
const API = `http://www.omdbapi.com/?apikey=${APIKEY}&s=`;
const QUERY = 'star wars';

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			movies: [],
			isLoading: true,
			error: null,
			query: QUERY,
			type: ''
		}
	}

	componentDidMount() {
		this.fetchAPI(API+this.state.query+'&type='+this.state.type);
	}

	fetchAPI = (api) => {
		fetch(api)
			.then(response => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error('Failed to fetch');
				}
			})
			.then(data => this.setState({movies: data.Search, isLoading: false}))
			.catch(error => this.setState({isLoading: true, error}))
	}

	handleSearch = (query, type) => {
		if (query !== '') {
			this.setState({
				isLoading: true
			});
	
			this.setState({
				query: query,
				type: type
			}, () => this.fetchAPI(API + this.state.query + '&type='+this.state.type));
		}
	}

	render() {
		const {movies, query, type, isLoading, error} = this.state;
		
		return (<>
			<Header />
				{
					(isLoading) ? (
						<Preloader />
					) : (
						<Main movies={movies} query={query} type={type} handleSearch={this.handleSearch} />
					)
				}
				{
					error ? (<p>{error.message}</p>) : ''
				}
			<Footer />
		</>)
	}
}