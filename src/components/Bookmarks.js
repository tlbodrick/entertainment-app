import { useContext } from "react"
import MediaItem from "./MediaItem"
import { Context } from "../BookmarkContext"


function Bookmarks() {

    const { bookmarkItems } = useContext(Context)

    const renderBookmarks = bookmarkItems.map(bookmark => {
        return <MediaItem thumbnail={bookmark.thumbnail.regular.large} mediaInfo={bookmark} thisClass="bookmark" />
    })


    return (
        <div className="flow">
            <h2 className="fw-light fs-600">Bookmarks</h2>
            <div className="media-list grid">{renderBookmarks}</div>
        </div>
    )
}

export default Bookmarks;