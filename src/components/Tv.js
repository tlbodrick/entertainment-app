import MediaItem from "./MediaItem"

function Tv({ itemData }) {
    const tv = itemData.filter(media => media.category === "TV Series")

    const renderTv = tv.map(show => {
        return <MediaItem thumbnail={show.thumbnail.regular.large} mediaInfo={show} thisClass="tv-show" />
    })

    return (
        <div className="flow">
            <h2 className="fw-light fs-600">Tv Series</h2>
            <div className="media-list grid">{renderTv}</div>
        </div>
    )
}

export default Tv;