import { useNavigate } from "react-router"
import MediaItem from "./MediaItem"

function SearchResults({ query, itemData }) {
    const navigate = useNavigate()

    const matchingMedia = itemData.filter(media => {
        const titleLowercase = media.title.toLowerCase()
        const queryLowercase = query.toLowerCase()
        return titleLowercase.includes(queryLowercase)
    })

    const renderMatchingMedia = matchingMedia.map(media => <MediaItem thumbnail={media.thumbnail.regular.large} mediaInfo={media} />)

    return (
        <div className="flow">
            <h2 className="fw-light fs-600">{query.length > 0 ? `Found ${matchingMedia.length} results for '${query}'` : ' Found 0 results'}</h2>
            <div className="media-list grid">{query.length > 0 && renderMatchingMedia}</div>
        </div >
    )
}

export default SearchResults;