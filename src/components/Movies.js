import { Movie } from './Movie';

export function Movies(props) {
	const { movies = [] } = props;
	return ( <div className="grid">
		{movies.length ? movies.map( (item) => (
			<Movie key={item.imdbID} {...item} />
		)) : <h5>Movies not found</h5>}
		</div>
	)
}