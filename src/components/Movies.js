import MediaItem from "./MediaItem"

function Movies({ itemData }) {
    const movies = itemData.filter(media => media.category === "Movie")

    const renderMovies = movies.map(movie => {
        return <MediaItem thumbnail={movie.thumbnail.regular.large} mediaInfo={movie} thisClass="movie" />
    })

    return (
        <div className="flow">
            <h2 className="fw-light fs-600">Movies</h2>
            <div className="media-list grid">{renderMovies}</div>
        </div>
    )
}

export default Movies;