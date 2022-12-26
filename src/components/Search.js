import React, {useEffect, useState} from 'react';

const Search = (props) => {
	const {
		handleSearch = Function.prototype,
	} = props;

	const [search, setSearch] = useState('');
	const [type, setType] = useState('');


	const handlerSubmit = e => {
		handleSearch(search, type);
		e.preventDefault();
	}

	useEffect(() => {
		setSearch(props.query);
		setType(props.type);
	}, [props.query, props.type]);

	return (
		<form onSubmit={handlerSubmit}>
			<div className="search-row">
				<div className="input-field">
					<input placeholder="Search"
						value={search}
						type="text"
						className="validate"
						onChange={(e) => setSearch(e.target.value)}/>
				</div>
				<button className="btn search-btn" type="submit">Search</button>
			</div>
			<div className="radio-row">
				<label>
					<input name="type" type="radio" value=""
						checked={type === ''}
						onChange={(e) => setType(e.target.value)}
						disabled={search === ''}
						/>
					<span>All</span>
				</label>
				<label>
					<input name="type" type="radio" value="movie"
						checked={type === 'movie'}
						onChange={(e) => setType(e.target.value)}
						disabled={search === ''}
						/>
					<span>Movies</span>
				</label>
				<label>
					<input name="type" type="radio" value="series"
						checked={type === 'series'}
						onChange={(e) => setType(e.target.value)}
						disabled={search === ''}
						/>
					<span>Series</span>
				</label>
			</div>
		</form>
	)
}

export {Search};