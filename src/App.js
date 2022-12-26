import React, {useEffect, useState} from 'react';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Main } from './layout/Main';
import { Preloader } from './components/Preloader';


const APIKEY = process.env.REACT_APP_APIKEY;
const API = `https://www.omdbapi.com/?apikey=${APIKEY}&s=`;
const QUERY = 'star wars';

export default function App() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [query, setQuery] = useState(QUERY);
	const [type, setType] = useState('');

	const fetchAPI = (api) => {
		fetch(api)
			.then(response => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error('Failed to fetch');
				}
			})
			.then(data => {
				setMovies(data.Search);
				setIsLoading(false);
			})
			.catch(error => {
				setError(error);
				setIsLoading(true);
			})
	}

	const handleSearch = (query, type) => {
		if (query !== '') {
			setIsLoading(true);
			setQuery(query);
			setType(type);
		}
	}

	useEffect(() => {
		fetchAPI(API+query+'&type='+type);
	}, [query, type]);

	return (<>
		<Header />
			{
				(isLoading && !error) ? (
					<Preloader />
				) : (
					<Main 
						movies={movies} 
						query={query} 
						type={type} 
						handleSearch={handleSearch}
						/>
				)
			}
			{
				error ? (<p>{error.message}</p>) : ''
			}
		<Footer />
	</>)
	// }
}