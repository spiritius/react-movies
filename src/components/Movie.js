export function Movie(props) {
	const { 
		Poster: poster,
		Title: title,
		Type: type,
		Year: year } = props;
	return (
		<div className="card movie horizontal">
			<div className="card-image">
				{
					poster === 'N/A' ? '' : <img src={poster} />
				}
			</div>
			<div className="card-stacked">
				<div className="card-content">
					<h6>{title}</h6>
				</div>
				<div className="card-action">
					<small>{type}</small>
					&nbsp;&middot;&nbsp;
					<small>{year}</small>
				</div>
			</div>
		</div>
	)
}