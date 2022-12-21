import React from 'react';

class Search extends React.Component {
	constructor(props) {
		super();

		this.state = {
			search: '',
			type: ''
		}
	}

	componentDidMount() {
		this.setState({
			search: this.props.query,
			type: this.props.type,
		});
	}

	handleType = e => {
		this.setState({[e.target.name]: e.target.value})
	}

	handlerSubmit = e => {
		this.props.handleSearch(this.state.search, this.state.type);
		e.preventDefault();
	}

	render() {
		const {search, type} = this.state;

		return (
			<form onSubmit={
				this.handlerSubmit
			}>
				<div className="search-row">
					<div className="input-field">
						<input placeholder="Search"
							value={search}
							type="text"
							className="validate"
							onChange={
								(e) => this.setState({search: e.target.value})
							}/>
					</div>
					<button className="btn search-btn" type="submit">Search</button>
				</div>
				<div className="radio-row">
					<label>
						<input name="type" type="radio" value=""
							checked={
								type === ''
							}
							onChange={
								e => this.handleType(e)
							}
							disabled={search === ''}
							/>
						<span>All</span>
					</label>
					<label>
						<input name="type" type="radio" value="movie"
							checked={
								type === 'movie'
							}
							onChange={
								e => this.handleType(e)
							}
							disabled={search === ''}
							/>
						<span>Movies</span>
					</label>
					<label>
						<input name="type" type="radio" value="series"
							checked={
								type === 'series'
							}
							onChange={
								e => this.handleType(e)
							}
							disabled={search === ''}
							/>
						<span>Series</span>
					</label>
				</div>
			</form>
		)
	}
}

export {
	Search
};
