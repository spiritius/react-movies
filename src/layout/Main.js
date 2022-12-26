import { Movies } from '../components/Movies';
import { Search } from '../components/Search';

export function Main(props) {
	return (
		<main className="container">
			<Search 
				handleSearch={props.handleSearch} 
				query={props.query} 
				type={props.type}
			/>
			<Movies movies={props.movies} />
		</main>
	)
}